import express from "express";

// absolute paths: @routes, @pages, @controller, @services, @config @utils
// eslint-disable-next-line import/no-unresolved
import route from "@routes/route";

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "I am the index.ts file" });
});
app.use("/", route);

// Avoiding console.log and using process.std.out instead
app.listen(3000, () => process.stdout.write("Server running on port 3000"));
