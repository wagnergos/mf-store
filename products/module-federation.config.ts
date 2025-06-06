export const mfConfig = {
  name: 'products',
  filename: 'remoteEntry.js',
  exposes: {
    './Products': './src/Products',
  },
  remotes: {
    host: 'host@http://localhost:3000/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router'],
};
