let allUsers = [];
let recipient = {};
const socketEvents = (socket, io) => {
  socket.on("join", () => {
    allUsers.push({ id: socket.id });
  });
  socket.on("private_message", (data) => {
    const { recipientId, message } = data;
    recipient = allUsers.find((user) => user.id === recipientId);
    if (recipient) {
      io.to(recipient.id).emit("receive_message", {
        sender: socket.id,
        message: message,
        createdTime: new Date().toLocaleTimeString(),
        sentByMe: false,
      }); // Send to all users in recipientId, including sender
    }
    // db
    socket.emit("receive_message", {
      ...data,
      createdTime: new Date().toLocaleTimeString(),
      sentByMe: true,
    });
  });
  socket.on("disconnect", () => {
    // console.log("disconnected", socket.id);
    allUsers = allUsers.filter((user) => user.id !== socket.id);
  });
};

module.exports = socketEvents;
