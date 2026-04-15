export default async function handler (req, res) {
  res.setHeader("Access-control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-control-allow-headers", "Content-type");

  if (req.method === "options") {
    return res.status(200).end();
  }

const { address } = req.query;

if (!address) {
  return res.status(400).json({ error: "address is required"});
}
  try {
    const response = await fetch( `https://api.dexscreener.com/token-pairs/v1/solana/${address}); 
    const data = await response.json();
    return res.status(200).json(data);
    } catch (error) { 
    return res.status(500).json({error: "failed to fetch data"});
    }
    }
