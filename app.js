const router = require('./routes/router');
const bodyParser = require('body-parser');
require('dotenv').config();

const express = require('express');




const app = express();

// Définission du moteur de template
app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"));

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());


// Appelle les routes 
router(app);




module.exports = app.listen(PORT, ()=> {
    console.log(`Ecoute sur le port ${PORT}...`);
})