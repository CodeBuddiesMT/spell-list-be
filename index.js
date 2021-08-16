const server = require("./api/server");
require("dotenv").config();

// .env variables
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`\n === Server listening on port ${PORT} === \n`);
});
