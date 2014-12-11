var socket = io.connect('/');

socket.on('Welcome', function(data){
  console.log(data)
});

socket.on('reply', function(data){
  console.log(data);
  $('h3').append(data.message)
});
