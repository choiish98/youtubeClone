import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => 
    res.send("Hello from ass");

const handleProfile = (req, res) => 
    res.send("you are on my profile"); 

const betwwenHome = (req, res, next) => {
    console.log("Between");
    next();
}

app.use(betwwenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);