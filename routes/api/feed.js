const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { Photo } = require('../../db/models');
const { authenticated, generateToken } = require('./security-utils');
const {port } = require("../../config")
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
  
  const photos = await Photo.findAll({
    order: [['createdAt', 'DESC']]
  });

  res.json({ photos });
}))


module.exports = router