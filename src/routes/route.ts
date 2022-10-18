import { Router } from "express";

const router = Router();

router.get("/routes", (req, res) => {
  res.json({ message: "Welcome to Routes" });
});

router.get("/pages", (req, res) => {
  res.json({ message: "Welcome to Pages" });
});

router.get("/api", (req, res) => {
  res.json({ message: "Welcome to APIs" });
});

export default router;
