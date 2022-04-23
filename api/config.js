import dotenv from 'dotenv';
dotenv.config();
export default {
  PORT: process.env.PORT || 3333,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://admin:vREepsliFX3P3axo@cluster0.pjgka.mongodb.net/backendDb?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
};