const express = require("express");
const { Photo, User} = require('../../db/models');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const cors = require('cors');

const multers3 = require('multer-s3');
// router.use(cookieParser());
require("dotenv").config();
const AWS = require("aws-sdk");

const s3= new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


const uploadS3 = multer({
  storage: multers3({
    s3: s3,
    acl: 'public-read',
    bucket: 'zackitty',
    metadata: (req, file, cb) => {
      cb(null, {fieldName: file.fieldname})
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + '-' + file.originalname)
    }
  })
});

const UserRepository = require('../../db/user-repository');

router.post('/', uploadS3.single('thisFile'), asyncHandler(async (req, res) => {


 


  const photo = await Photo.build({
    name: `${req.file.originalname} ${Date.now().toString()}`,
    photoPath: req.file.location,
  })
  return await photo.save()



}));

module.exports = router;