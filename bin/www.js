// IMPORTS

import app from '../app.js';     // configura servidor
import debug from 'debug';    // modulo debugeo
import http  from 'http';     // modulo para servidores HTTP

// PORT
// process.env guarda config de variables de entorno necesarias para proteger
let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// START SERV
let server = http.createServer(app);    // crea servidor estandarizado con HTTP
let ready = ()=> console.log('server ready on port '+port);
server.listen(port, ready);                    // "escucha" el puerto para levantarlo 
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
