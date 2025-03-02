const express = require('express');
const cors = require('cors');
const { MongoClient } = require("mongodb");
const mysql  = require("mysql2/promise");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ message: 'OK' })
});

//set variables for logging in
//const mongoUri = "mongodb+srv://reidmgillis:vfsvfs@cluster0.ldxe0.mongodb.net/"
const mongoUri = "mongodb+srv://admin:vfsvfsvfs@cluster0.gkyjn.mongodb.net/"
const mongoClient = new MongoClient(mongoUri);

const dbConfig = {
    //host: "database-2.czeee2egge1d.ca-central-1.rds.amazonaws.com", //in colab DBAccessJS file in 3rd cells
    host: "database-2.czeee2egge1d.ca-central-1.rds.amazonaws.com", //in colab DBAccessJS file in 3rd cells
    user: "admin",
    password: "vfsvfsvfs",
    database: "leaderboard_db_reid"
}



//async can use 'awake' as a promise. Use try and catch
async function startSever() {
    try {
        await mongoClient.connect();
        console.log("connected to mongo DB")

        //in DBAccessJS db = client ['myFirstDatabase']
        const db = mongoClient.db("myFirstDatabase");
        const userCollection = db.collection("users");





   

    //first end point
    //put api to distigusing that we're asking for api
    //const { email } = req.body; -> extact email key from within the req body
    app.post("/api/login", async (req, res) => {
        const { email } = req.body;
        try {
            console.log(email);
            const user = await userCollection.findOne({ email })

            if (!user) {
                return res.status(404).json({ error: "User not found" })
                //({error: "User not found"}) -> send object that can be read in the front end
            }

            res.json({
                _id: user._id,
                username: user.username,
                email: user.email
            })
        } catch (error) {
            //in back end. This returns error if sever request fails. Note, 500 are internal server errors. The data sent is fine, but the sever has error
            //400 are bad request that is error in the request sent
            console.error("loging error", error);
            res.status(500).json({ error: "internal server error" });
        }
    });


        //on browser, connect via http localhost:3000/api/leaderboard
    app.get("/api/leaderboard", async (req, res) => {
        //const count = parseInt(req.query.count) -> send all the users, whcih are equal to the total count.
        //if that fails, then send 10
        const count = parseInt(req.query.count) || 10;
        let connection;

        try {
            connection = await mysql.createConnection(dbConfig);
            //put rows in list and execute command. This specifies the data to return and how to return it.
            //CREATE TABLE IF NOT EXISTS users -> 'user' here shoudl match table created in db 'EXISTS users'
            const [rows] = await connection.execute(
                `SELECT player_name, score FROM users
                ORDER BY score DESC
                LIMIT ${count}`
            );
            res.json({ success: true, data: rows });
        } catch (err) {
            console.log("Error fetching leaderboard", err);
            res.status(500).json({ error: "Internal server error" });
        } finally {
            //finish connection b/c we're using mongo, which is different than python. It automatically opens the connection, but we still need to close it
            if (connection) {
                await connection.end();
            }
        }
    });

    app.listen(port, () => {
        console.log(`server running on http://localhost:${port}`);
    });

    } catch (error) {
        console.error("server start error ", error)
    }

}
startSever().catch(console.error);




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