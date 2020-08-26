const express = require("express");
const db = require('../../db/models');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const UserRepository = require('../../db/user-repository');
const { authenticated, generateToken } = require('./security-utils');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cors = require('cors');
const multerS3 = require('multer-s3');
router.use(cookieParser());
require("dotenv").config();
const aws = require("aws-sdk");
const s3 = new aws.S3();


aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: 'zackitty',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

const singleUpload = upload.single("image");

router.post('/', function(req, res){
  const uid = req.params.id;
  singleUpload(req, res, function (err) {
    if (err) {
      return res.json({
        success: false,
        errors: {
          title: "Image Upload Error",
          detail: err.message,
          error: err,
        },
      });
    }
    console.log(req.file)
  })
   


})



module.exports = router;