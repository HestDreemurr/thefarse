const WebSocket = require("ws")

const server = new WebSocket.Server({
  port: 8080
})

server.on("connection", client => {
  console.log("[+] Um cliente se conectou ao servidor")
  
  client.on("message", msg => {
    
  })
})