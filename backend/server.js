import express from 'express';
import cors from 'cors';
import colors from 'colors';
import morgan from 'morgan';
import sequelize from './config/db.js';
import router from './routes/userRoutes.js';

const app = express();

//database conection logic
sequelize.authenticate()
.then(() => {
    console.log('Application connected successfully to the database......'.green.bold);
})

.catch(error => {
    console.log(`Error: ${error}`.red.bold);
});

app.use(express.urlencoded({ extended: true }));
//Use morgan only app is on development server
app.use(morgan('dev'));

//To allow color package
colors.enable();

//To allow express to use json s data exchande format
app.use(express.json());

//To allow for cross origin resource sharing
app.use(cors());

//To allow the server to use imported routes
app.use('/register', router)


//Fetching paynow API for payment integration, API key is housed in the dotenv file


//Basic routing for testing
app.get('/', (req, res) => {
    res.send('API runninng......');
});


//setup the port of the app and binding it to the .env file
const PORT  = process.env.PORT || 5000;

//Setup server listening on a dynamic PORT
app.listen(
    PORT,
    console.log(`Server running on http://localhost:${PORT}`.yellow.bold
    )
);
