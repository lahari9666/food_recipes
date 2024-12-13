const http = require('http');
const path = require('path');
const fs = require('fs');
const { MongoClient } = require('mongodb');
async function main() {
    const uri = `mongodb+srv://lahari:Lahari2002@recipe.kos5d.mongodb.net/recipe?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);
    try {
        await client.connect();
    } finally {
        await client.close();
    }
}

main().catch(console.error);

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });    
        const uri = `mongodb+srv://lahari:Lahari2002@recipe.kos5d.mongodb.net/recipe?retryWrites=true&w=majority`;
        const client = new MongoClient(uri);
        try {
            await client.connect();
            let response = await getDataFromMongo(client)
            res.end(JSON.stringify(response))
        } finally {
            await client.close();
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(" <h1> 404 Nothing Found </h1>")
    }
});

async function getDataFromMongo(client) {
    const cursor = client.db("recipe").collection("food")
        .find();
    const results = await cursor.toArray();
    if (results.length > 0) {
        return results[0];
    } else {
        console.log(`No results`);
    }
}
const PORT = process.env.PORT || 1024;
server.listen(PORT, () => console.log(`Our server is running on port: ${PORT}`));