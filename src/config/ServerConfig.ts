import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT
export const YT_API_KEY = process.env.YT_API_KEY || "";