import express, { Request, Response } from "express";
import systembolaget from "systembolaget-api"; // Import the API as a library

const app = express();
const PORT = 5000;

app.get("/api/assortment", async (req: Request, res: Response) => {
  try {
    console.log("📡 Fetching products from Systembolaget API...");

    // Fetch products with filters
    const products = await systembolaget.assortment({
      category: "Vin", // Adjust this based on actual filter keys
      assortmentText: "Fast sortiment", // Make sure this is valid
    });

    console.log(`✅ Fetched ${products.length} products`);
    res.json(products.slice(0, 10)); // Limit to 10 results
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch assortment" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
