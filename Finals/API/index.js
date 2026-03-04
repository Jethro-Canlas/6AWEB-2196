// This file is saved inside the 'api' folder.

const express = require("express");
const { MongoClient } = require("mongodb");
const dns = require("dns");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECTION_STRING ="mongodb://localhost:27017";

const DATABASENAME = "MyDb";
let database;

// Middleware instantiation
app.use((req, res, next) => {
  if (!database) {
    return res.status(503).json({ error: "Database not connected yet." });
  }
  next();
});

console.log("Starting API...");
console.log("Connecting to MongoDB...");

async function start() {
  try {
    // Create client with timeouts so you see errors quickly
    const client = new MongoClient(CONNECTION_STRING, {
      serverSelectionTimeoutMS: 10000, // 10s
      connectTimeoutMS: 10000,
    });

    await client.connect();

    database = client.db(DATABASENAME);
    console.log("Yay! Now connected to Cluster");

    app.listen(5038, () => {
      console.log("Server running on http://localhost:5038");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

start();

// ROUTES TO ALL METHODS

// Get all officers
app.get("/api/books/GetBooks", async (req, res) => {
  try {
    const result = await database.collection("Books").find({}).toArray();
    res.send(result);
  } catch (error) {
    console.error("Error fetching officers:", error);
    res.status(500).json({ error: "Failed to fetch officers" });
  }
});

// Add an officer
app.post("/api/books/AddBook", multer().none(), async (req, res) => {
  try {
    const numOfDocs = await database.collection("Books").countDocuments();

    await database.collection("Books").insertOne({
      id: String(numOfDocs + 1),      name: req.body.name,
      rank: req.body.rank,
      status: req.body.status,
      theater: req.body.theater,
      branch: req.body.branch,
    });

    res.json("Officer added successfully");
  } catch (error) {
    console.error("Error adding officer:", error);
    res.status(500).json({ error: "Failed to add officer" });
  }
});

// Delete officer
app.delete("/api/books/DeleteBook", async (req, res) => {
  try {
    await database.collection("Books").deleteOne({ id: req.query.id });
    res.json("Officer dismissed successfully!");
  } catch (error) {
    console.error("Error deleting officer:", error);
    res.status(500).json({ error: "Failed to delete officer" });
  }
});

// Get officer by ID
app.get("/api/books/GetBookById", async (req, res) => {
  try {
    const result = await database.collection("Books").findOne({ id: req.query.id });
    if (!result) return res.status(404).json({ error: "Officer not found" });
    res.send(result);
  } catch (error) {
    console.error("Error fetching officer:", error);
    res.status(500).json({ error: "Failed to fetch officer" });
  }
});

// Update officer
app.put("/api/books/UpdateBook", multer().none(), async (req, res) => {
  try {
    await database.collection("Books").updateOne(
      { id: req.body.id },
      { $set: {          name: req.body.name,
          rank: req.body.rank,
          status: req.body.status,
          theater: req.body.theater,
          branch: req.body.branch,
        }
      }
    );
    res.json("Officer updated successfully!");
  } catch (error) {
    console.error("Error updating officer:", error);
    res.status(500).json({ error: "Failed to update officer" });
  }
});