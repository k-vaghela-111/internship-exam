import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
   path: "./.env",
});

const PORT = process.env.PORT;

connectDB()
   .then(() => {
      app.listen(PORT, () => {
         console.log(`Server is listening at port ${PORT}`);
      });

      app.on("error", (err) => {
         console.log("Server error occurred : ", err);
         throw err;
      });
   })
   .catch((err) => {
      console.log("Server error occurred: ", err);
      throw err;
   });
