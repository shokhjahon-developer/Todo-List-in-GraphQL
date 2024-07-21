const { env } = process;
const { PORT } = env;

const config = {
  port: PORT,
};

module.exports = config;
