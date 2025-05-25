import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config({
    path: "./env"
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    console.log("Connected to MongoDB");
}).catch((error) => { 
    console.log(`Mongo db connection fail !!! ${error}`)
});




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
