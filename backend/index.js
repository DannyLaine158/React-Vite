const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3001);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getUserRoute = require(`./routes/UserRoute`);

app.use(getUserRoute);

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});