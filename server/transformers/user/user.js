const userTransformer = (user) => {
  return {
    id: user.id,
    username: user.username,
    // email: !!user.email ? user.email : null,
    avatar: user.avatar,
  };
};
module.exports = { userTransformer };
