const bcrypt = require("bcryptjs");
const findUserPrisma = require("../DB/auth/getUser");
const registerPrisma = require("../DB/auth/register");
const BadRequestError = require("../errors/bad-request");
const asyncWrapper = require("../middlewares/async");
const { userTransformer } = require("../transformers/user/user");
const generateToken = require("../utils/jwtToken");
const uploadImage = require("../utils/upload_cloudinary");

const register = asyncWrapper(async (req, res) => {
  const { username, email, password, profileImg } = req.body;

  if (!username || !email || !password)
    throw new BadRequestError("fill out all the fields");

  const ifUserExist = await findUserPrisma(email);
  if (ifUserExist) throw new BadRequestError("User already register");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const avatar = await uploadImage(profileImg);
  const resp = await registerPrisma({
    username,
    email,
    password: hashedPassword,
    avatar,
  });
  res.status(200).send("registered");
});

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) throw new BadRequestError("fill out all the fields");

  const user = await findUserPrisma(email);
  if (!user) throw new BadRequestError("User is not registered");

  const isAuthorized = await bcrypt.compare(password, user.password);

  if (!isAuthorized) throw new BadRequestError("wrong password");

  const token = generateToken(user.id, user.username);

  res.cookie("aaccessToken", token, { httpOnly: true });
  res.send({ ...userTransformer(user) });
});

const logout = asyncWrapper(async (req, res) => {
  res.clearCookie("aaccessToken");
  res.send("you are logged out");
});
module.exports = { register, login, logout };
