import { Request, Response } from "express";
import { query } from "../db/mysql";

export const addRoom = async (req: Request, res: Response) => {
  const {
    unit,
    room_detail_id,
    date,
    start_time,
    end_time,
    participant,
    consumptions,
  } = req.body;

  try {
    await query(
      `
        INSERT INTO rooms (
          unit,
          room_detail_id,
          date,
          start_time,
          end_time,
          participant,
          consumptions
        ) VALUES (
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?
        )
      `,
      [
        unit,
        room_detail_id,
        new Date(date),
        new Date(start_time),
        new Date(end_time),
        participant,
        consumptions,
      ]
    );

    res.send({
      status: 200,
      message: "Success add new data",
      data: null,
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

export const getRooms = async (req: Request, res: Response) => {
  try {
    const data = await query(
      `
        SELECT 
          r.room_id,
          r.unit,
          r.room_detail_id,
          rd.room_detail_name,
          rd.capacity,
          r.date,
          r.start_time,
          r.end_time,
          r.participant,
          r.consumptions 
        FROM rooms r 
        JOIN room_details rd ON rd.room_detail_id = r.room_detail_id
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

export const getRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await query(
      `
        SELECT 
          r.room_id,
          r.unit,
          r.room_detail_id,
          rd.room_detail_name,
          rd.capacity,
          r.date,
          r.start_time,
          r.end_time,
          r.participant,
          r.consumptions 
        FROM rooms r 
        JOIN room_details rd ON rd.room_detail_id = r.room_detail_id
        WHERE room_id = ?
      `,
      [id]
    );

    res.send({
      status: 200,
      message: "Success get detail data",
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

export const updateRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    res.send({
      status: 200,
      message: "Success update data",
      data: null,
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

export const deleteRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    res.send({
      status: 200,
      message: "Success delete data",
      data: null,
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
