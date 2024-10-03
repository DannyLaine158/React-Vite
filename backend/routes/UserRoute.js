const { Router } = require('express');
const router = Router();
const database = require('../data/data.json');

router.get('/', async (req, res) => {
    res.status(200).json({
        msg: "Ok",
    });
});

router.post('/login', async (req, res) => {
    let data = [
        req.body.username,
        req.body.password
    ];

    let isLoggedIn = false;
    let user = {};
    for (let i = 0; i < database.length; i++) {
        user = database[i];
        if ( user.username === data[0] &&
            user.password === data[1] ) {
            isLoggedIn = true;
            break;
        }
    }

    if (isLoggedIn) {
        res.status(200).json({user});
    } else {
        res.status(401).json({err: "No autorizado"});
    }
})

module.exports = router;