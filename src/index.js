import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();


dotenv.config({
    path: "./env"
});

connectDB()




/** 
;(async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.on("error", (err) => {
      console.error("Express error:", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
)();
*/
