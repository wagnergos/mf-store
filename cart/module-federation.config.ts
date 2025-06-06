export const mfConfig = {
  name: 'cart',
  filename: 'remoteEntry.js',
  exposes: {
    './Cart': './src/Cart',
  },
  remotes: {
    host: 'host@http://localhost:3000/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router'],
};
