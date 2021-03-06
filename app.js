const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('Home')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});