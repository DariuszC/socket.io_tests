import { DB_URL } from "../config/variables";
import mongoose from "mongoose";
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("");
    console.log("");
    console.log(DB_URL);
    console.log(` DB up and running `);
    console.log("");
    console.log("");
  }
);
