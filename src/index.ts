import express from "express";

const app = express();

// NEVER USE MAGIC NUMBERS IN YOUR CODE
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello! The server is working.');
});

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})

export default app;