const PORT = 6000;
const app = require("./app");
const listener = () => console.log(`listening to ${PORT}`);
app.listen(PORT, listener);
