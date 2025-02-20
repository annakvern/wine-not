import express, { Request, Response } from "express";
import { spawn } from "child_process";

const app = express();
const CLI_PATH = "/usr/local/bin/darwin_arm64"; // Ensure this is the correct path to your CLI tool

app.get("/api/assortment", (_req: Request, res: Response) => {
  // Define your filters
  const filters = ["--category", "Vin", "--limit", "10"];

  const process = spawn(CLI_PATH, ["assortment", ...filters]);

  let output = "";

  process.stdout.on("data", (data) => {
    output += data.toString();
  });

  process.stderr.on("data", (data) => {
    console.error(`⚠️ CLI Error: ${data.toString()}`);
  });

  process.on("close", (code) => {
    if (code !== 0) {
      return res
        .status(500)
        .json({ error: `CLI process exited with code ${code}` });
    }

    try {
      const jsonData = JSON.parse(output);
      return res.json(jsonData);
    } catch (parseError) {
      console.error("❌ JSON Parse Error:", parseError);
      return res.status(500).json({ error: "Invalid JSON response from CLI" });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
