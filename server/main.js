import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/posts';
import morgan from 'morgan';
import mongoose from 'mongoose';

/*
	load this config
*/
const config = require('../config');


const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// print the request log on console
app.set(morgan('dev'));

// set the secret key variable for jwt
app.set('jwt-secret', config.secret);

app.use('/', express.static(__dirname + '/../public'));

app.use('/', routes);

app.use('/api', routes);

 
const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});


/*
	connect to mongodb server
*/
mongoose.connect(config.mongodbUri);
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
	console.log('connected to mongodb server');
})

