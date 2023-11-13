const userTransformer = (user) => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    avatar: user.avatar,
  };
};
module.exports = userTransformer;
