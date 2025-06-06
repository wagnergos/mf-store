export const mfConfig = {
  name: 'host',
  filename: 'remoteEntry.js',
  remotes: {
    products: 'products@http://localhost:3001/remoteEntry.js',
  },
  exposes: {
    './RemoteEntry': './src/App.tsx',
  },
  shared: ['react', 'react-dom', 'react-router'],
};
