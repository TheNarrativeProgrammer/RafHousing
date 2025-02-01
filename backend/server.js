const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ message: 'OK' })
});

//app.get('key -> fetch calls this key in front end and get receives the req and returns a res.
app.get('/api/leaderboard-summary', (req, res) => {
        const summaryData = [
            { player: 'Reid', score: 10000000 },
            { player: 'Simone', score: 200 },
            { player: 'spencer', score: -2 },
            { player: 'Lev', score: -2000 },
            { player: 'Xwen', score: "???" },
            { player: 'Ben', score: 6006 },
            { player: 'Cole', score: 18 },
            { player: 'Jason', score: "..." },
            { player: 'Jacod', score: 4669 }
        ]
    res.json(summaryData);
});

app.get('*', (req, res) => {
    {
        res.sendFile(path.join(__dirname, 'index.html'))
    }
});



app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});