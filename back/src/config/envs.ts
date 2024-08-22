import "dotenv/config";

export const PORT =
  process.env.PORT !== undefined ? Number(process.env.PORT) : 3002;
// export const DB = process.env.DB
