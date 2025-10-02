import { Request, Response } from "express";
import { query } from "../db/mysql";

export const getRoomDetails = async (req: Request, res: Response) => {
  try {
    const data = await query(
      `
        SELECT 
          room_detail_id, 
          room_detail_name, 
          unit, 
          capacity 
        FROM room_details
      `
    );

    res.send({
      status: 200,
      message: "Success get all data",
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
};
