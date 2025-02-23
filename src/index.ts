import express from "express";
import cors from "cors";  // Importa cors

const app = express();

app.use(cors({
  origin: "http://localhost:4200", 
  methods: "GET,POST,PUT,DELETE",  
  allowedHeaders: "Content-Type,Authorization" 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import indexRoutes from "./routes/index";
app.use(indexRoutes);


app.listen(3000, () => {
  console.log("Server on port", 3000);
});
