module.exports = {
  apps: [ {
    name: 'API',
    script: 'server/index.js',
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  } ]
};
