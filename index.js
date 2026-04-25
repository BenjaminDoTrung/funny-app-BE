import express from "express";
import cors from "cors";
const app = express();
import {CONNECT_DB, GET_DB} from './src/config/mongodb.js'
import routes from "./src/routes/index.js";

const START_SERVER = () => {
  // Middleware
  app.use(express.json());
  app.use(cors()); // cho phép frontend gọi API

  // Import routes
  app.use("/api", routes);

  // Test route
  app.get("/", async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.send("Funny App Backend is running...");
  });

  // Port
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`3. Server running at http://localhost:${PORT}`);
  });
}
console.log('1. connecting to MongoDB Cloud Atlas...')
CONNECT_DB()
  .then(() => console.log('2. Connected to MongoDB Atlas!'))
  .then(() => START_SERVER())
  .catch(error => {
    console.error(error)
    process.exit(0)
  })
// START_SERVER()
