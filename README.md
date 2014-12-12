Introduction to WebSockets
==========================

In this project, we were introduced to Web Sockets.  We deployed the socket.io real-time engine to pass messages between a client-side console and server console.  In this example, upon connection to the server, a client browser console should receive and print a "Hi" message.  The server has also been programmed to respond if the browser 'emits' (i.e. sends out) a "message" through `socket.emit('message', {message: "HELLO"});`.  In this instance, the server would respond with `HELLO REPLY`.  Through jQuery, the server's response is subsequently added to the web-page in the `h3` heading element.  The code that achieves this is `$('h3').append(data.message)`.

###Core Technologies
- Node.js
- Express Server
- EJS Templating
- Socket.io Websockets
- jQuery
- Basic HTML/CSS