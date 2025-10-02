import { Router } from "express";
import {
  addRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room";
import { getRoomDetails } from "../controllers/room-detail";

const router = Router();

router.get("/room-details", getRoomDetails);

router.post("/rooms", addRoom);
router.get("/rooms", getRooms);
router.get("/rooms/:id", getRoom);
router.put("/rooms/:id", updateRoom);
router.delete("/rooms/:id", deleteRoom);

export default router;
