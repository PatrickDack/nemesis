require('dotenv').config();
const PORT = process.env.PORT || 6666;

const app = require('./app');

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
