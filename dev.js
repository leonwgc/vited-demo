const { run } = require('vited');

run(
  true,
  {
    server: {
      host: '0.0.0.0',
      port: 3001,
    },
  },
  () => {
    console.log('构建完成');
  }
);
