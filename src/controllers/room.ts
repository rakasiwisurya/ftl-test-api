import { Request, Response } from "express";

export const addRoom = async (req: Request, res: Response) => {
  const { room } = req.body;

  try {
    res.send({
      status: 200,
      message: "Success add new data",
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

export const getRooms = async (req: Request, res: Response) => {
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

export const getRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    res.send({
      status: 200,
      message: "Success get detail data",
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

export const updateRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    res.send({
      status: 200,
      message: "Success update data",
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

export const deleteRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    res.send({
      status: 200,
      message: "Success delete data",
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
