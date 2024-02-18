const { User } = require('../../models/user.js');

const { HttpError, cloudinary } = require('../../helpers/index.js');

const updateUser = async (req, res, next) => {
  // get file
  const { file } = req;

  // get userId
  const { _id } = req.user;

  // get name from params
  const newUsername = req.body.name;

  // create object for update
  const updateUserParams = {};

  // add new name to update object if newUsername !== undefined
  if (newUsername !== undefined) {
    updateUserParams.name = newUsername;
  }

  // send file to cloudinary if file !== false
  if (file) {
    // get file path
    const { path: tempUpload } = req.file;

    // send file to cloudinary
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
      error => {
        if (error) {
          next(HttpError(400, 'Bad request'));
        }
      }
    );

    // add new avatarURL to object for update
    updateUserParams.avatarURL = avatar.url;
  }

  // update user
  const user = await User.findByIdAndUpdate(_id, updateUserParams, {
    new: true,
  });

  // get user fields
  const { name, email, avatarURL } = user;

  res.status(200).json({ _id, name, email, avatarURL });
};

module.exports = updateUser;
