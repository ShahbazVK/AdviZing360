const userTransformer = (user) => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
};
module.exports = userTransformer;
