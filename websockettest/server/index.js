const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log(`rebroadcasting ${socket.id} message: ${JSON.stringify(message)}`)
    socket.id = message["username"];
    io.emit(
      "message",      
      JSON.stringify(message)
    );
  });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
