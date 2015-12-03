var browserSync = require( 'browser-sync');

browserSync({
    notify: false,
    port: 80,
    server: {
      baseDir: ['dist']
    }
  },require('./serverapi/server.js'));