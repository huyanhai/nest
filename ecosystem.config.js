module.exports = {
  apps: [
    {
      name: 'shui',
      script: 'dist/main.js',
      watch: true,
      env: {
        NODE_ENV: 'prod',
      },
    },
  ],
};
