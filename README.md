# index.js code;
```javascript

const http = require("http");
const expressApp = require("./app/app");
const PORT = process.env.PORT || 3000;

const server = http.createServer(expressApp);

const { Server } = require('socket.io');
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(`Successful connection`);
    socket.emit("message", "Welcome");
});


server.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});

```
# How to run 

```javascript

npm run local:debug:start
```