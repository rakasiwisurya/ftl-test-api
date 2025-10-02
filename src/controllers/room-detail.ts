import { Request, Response } from "express";

export const getRoomDetails = async (req: Request, res: Response) => {
  try {
    res.send({
      status: 200,
      message: "Success get all data",
      data: null,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
};
