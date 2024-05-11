import express from "express";
import { connectDatabase, } from "../frameworks/database/config.js";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const db = process.env.DB;
const col = process.env.COL;
router.get("/getall", async (req, res) => {
    const con = await connectDatabase();
    const result = await con?.db(db).collection(col).find().toArray();
    res.status(200).send(result);
});
export { router };
