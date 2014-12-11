var socket = function(io){

  io.on('connection', function(socket){

    console.log('Client connected!');

    socket.emit("Welcome", {message: "Hi"});

    socket.on('message', function(data){
      socket.emit('reply', {message: data + " REPLY"});
      console.log(data);
    });

    socket.on('disconnect', function(){
      console.log('Client disconnected!');
    });

  });

};


module.exports = socket;