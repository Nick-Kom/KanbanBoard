let fallback = require('express-history-api-fallback');
let express = require('express');
let app = express();
let root = __dirname + '/assets';

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));

app.listen(process.env.PORT || 3000);
