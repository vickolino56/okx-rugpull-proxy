const https = requiere("https")
module.exports = function handler (req, res) {
  res.setHeader("Access-control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-control-allow-headers", "Content-type");

  if (req.method === "options") {
    res.status(200).end();
    return;
  }

const { address } = req.query;

if (!address) {
  return res.status(400).json({ error: "address is required"});
}
 const url = "https://api.dexscreener.com/token-pairs/v1/solana/" + address;
  https.get(url, function(apiRes) {
    var body = "";
    apiRes.on("data", function(chunk) { body += chunk; });
    apiRes.on("end", function(){
      try { 
      var data = json.parse(body);
        res.status(200).json(data);
      } catch(e) {
        res.status(500).json({ error: "parse error" });
      }
    });
  }).on("error", function(e) {
    res.status(500).json({ error: e.message });
  });
};
