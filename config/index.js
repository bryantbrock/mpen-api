import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET
};
