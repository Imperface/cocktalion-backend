const fs = require('fs/promises');
const path = require('node:path');

const { User } = require('../../models/user.js');

const { HttpError, cloudinary } = require('../../helpers/index.js');

const updateUser = async (req, res) => {
  const { file } = req;
  let { _id, name: userName } = req.user;
  const name = req.body.name;

  const updateObj = {};
  if (name !== undefined) {
    updateObj.name = name;
  }

  if (file) {
    const { path: tempUpload, originalname } = req.file;

    const avatar = await cloudinary.uploader.upload(
      tempUpload,
      {
        folder: 'usersAvatars',

        allowed_formats: ['png', 'jpg', 'jpeg'],
        aspect_ratio: '1.0',
        gravity: 'face',
        height: 200,
        zoom: '0.75',
        crop: 'thumb',
        radius: 'max',
      },
      function (error, result) {
        if (error) {
          throw HttpError(500, 'Server error');
        }
      }
    );
    updateObj.avatarURL = avatar.url;
  }

  const user = await User.findByIdAndUpdate(_id, updateObj, { new: true });
  const { _id: userId, name: updatedUsername, email, avatarURL } = user;

  res.json({ _id: userId, name: updatedUsername, email, avatarURL });
};

module.exports = updateUser;
