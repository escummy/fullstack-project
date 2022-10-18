import express from "express";

// @ to specify any file inside routes folder
// examples: @routes, @pages, @controller, @services, @config @utils
import route from "@routes/route";

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "I am the index.ts file" });
});
app.use("/", route);

app.listen(3000, () => console.log("Server running on port 3000"));
