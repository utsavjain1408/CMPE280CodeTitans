import express from 'express'
import nodemon from 'nodemon'
import bodyParser from 'body-parser'
import routes from 'src/routes'

const app = express();
const PORT = 3000;

//mongoose connection

mongoose.Promise = global.Promise;
var ProductCatalogueConnection = mongoose.connect('mongodb://localhost/ProductCatalogue', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and Express Server ${PORT} port per hal raha rai`)
);

app.listen(PORT, () =>
    console.log(`Aapna server ${PORT} per chal raha rai.`)
);