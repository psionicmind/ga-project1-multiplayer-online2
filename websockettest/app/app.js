
const socket = io("ws://localhost:8080");

// receive message
socket.on("message", (text) => {
  const el = document.createElement("li");
  el.innerHTML = text;
  console.log(`test=${text}`);
  document.querySelector("ul").appendChild(el);
});

// send out message using EMIT
document.querySelector("button").onclick = () => {

  testjson= {"username":"king", "action": "move", value: 12}
  socket.username="king";
  socket.emit("message",testjson);
};
