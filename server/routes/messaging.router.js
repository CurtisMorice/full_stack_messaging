const router = require('express').Router();

// Get our connection to the database
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('In messaging.router GET to read');

    // Build a string for the query
    const queryText = 'SELECT * FROM messages';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);
        })
        .catch((err) => {
            console.log('Error getting all messages: ', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('In message_router POST to create');

    let newSong = req.body;

    const queryText = `INSERT INTO messages(name, message) 
    VALUES ($1, $2)`;
    pool.query(queryText, [newMessage.name, newMessage.message])

    .then((results) => {
        console.log('Successful add of message', req.body);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('Error adding message', err);
        res.sendStatus(500);
    });

});



module.exports = router;