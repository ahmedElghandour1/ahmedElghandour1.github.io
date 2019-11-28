const express = require('express');
const hbs = require('hbs');
var path = require('path');

const port = process.env.PORT || 3000;


const app = express();

app.use(express.static(`${__dirname}/public`));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/public/views/partials`);

app.get('/', (req, res) => {
    res.render('index.hbs')
})



app.listen(port, () => {
    console.log('Server is up');
})

