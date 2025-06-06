# MF Store

A simple Micro-Frontend demo using React, Rspack, Module Federation, and automatic deploy via Zephyr. Basically, the application is a host that loads two remotes on the same page: one for viewing products and another for viewing the cart.

**[Live Demo](https://t-latest-wagner-gon-alves-host-mf-store-wagnergos-ze.zephyrcloud.app/)**

Feel free to play around with the code using StackBlitz.

[![Open in StackBlitz](https://camo.githubusercontent.com/e9392ad1a0cb081a5be23067cfb953616abc12f4e260f581a302e020c41d41c0/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667)](https://stackblitz.com/github/wagnergos/mf-store?file=package.json)

## Apps and Packages

**Rspack Applications**

- **host**: An Rspack application and also the host app
- **products**: Another Rspack application with Module Federation setup being consumed by the host
- **cart**: Another Rspack application with Module Federation setup being consumed by the host

## Prerequisites

- Node.js ≥ 20
- npm
- A [Zephyr Cloud](https://zephyr-cloud.io/) account

## Installation

```bash
git clone https://github.com/your-username/mf-store.git
cd mf-store
npm install
```

## Development

Run all micro-frontends in development mode:

```bash
npm run start
```

- **products** will run on [http://localhost:3001](http://localhost:3001)
- **cart** will run on [http://localhost:3002](http://localhost:3002)
- **host** will run on [http://localhost:3000](http://localhost:3000)

Open [http://localhost:3000](http://localhost:3000) to see the host loading both remotes.

## Build & Deploy

Generate production bundles for all micro-frontends and deploy to Zephyr. You must be logged into your Zephyr Cloud account.

```bash
npm run build
```

> This is part of the Zephyr documentation: "Behind the scene, we map your git configuration to Zephyr (remote origin URL, organization or username, repository name and branch) to deploy your application. Without this step your deployment will fail"

- **products** output: `products/dist/`
- **cart** output: `cart/dist/`
- **host** output: `host/dist/`

Your application will be available at the URL provided by the Zephyr at the end of the build.

## Limitations & Improvements

This implementation is deliberately kept simple to focus on the micro-frontend aspects. Components could be more DRY. We could also have global configurations for TypeScript and Tailwind.
