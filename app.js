import express from "express";
import { dirname } from "path";
import path from 'path';
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'views')))

app.get("/", (req, res) => {
    res.render(__dirname + "/views/home.ejs");
});

app.get("/login", (req,res)=>{
    res.render(__dirname+"/views/login.ejs")
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});