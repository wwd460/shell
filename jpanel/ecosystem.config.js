module.exports = {
  apps: [
    { 
      name: 'jpanel',
      script: './jpanel.js',
      watch: ['jpanel.js'],
      // Delay between restart
      watch_delay: 2000,
      ignore_watch: ['node_modules', 'public'],
      watch_options: {
        followSymlinks: false,
      },
    },
  ],
};
