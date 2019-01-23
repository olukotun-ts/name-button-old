const express = require('express');

const app = express();
const port = 3000;

app.use('/static', express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/public/' });
});
app.listen(port, () => console.log(`Listening on port ${port}.`));
