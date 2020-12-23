# 🍓 jamstack

This project is a [JAMstack](https://jamstack.org/) starter kit. Its goal is to provide a template for creating modern progressive web apps, using the following technologies:

- [React](https://reactjs.org/) for a declarative, component-based frontend architecture
- [GraphQL](https://graphql.org/) for an intuitive, strongly-typed contract between the frontend and backend
- [Netlify](https://www.netlify.com/) for static site deployments & previews (CI/CD directly integrated into GitHub)
- [Netlify Functions](https://www.netlify.com/products/functions/) for a serverless, on-demand API
- [Netlify Dev](https://www.netlify.com/products/dev/) for a unified local development experience that closely replicates your deployment environment
- [Apollo Client](https://www.apollographql.com/docs/react/) for comprehensive state management with React, using GraphQL
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) for a feature-rich GraphQL server that supports middleware, Federation, subscriptions, and more
- [TypeScript](https://www.typescriptlang.org/) for type safety, improved language features, and a single programming language shared between the frontend and backend
- [graphql-code-generator](https://graphql-code-generator.com/) for generating type definitions from the GraphQL schema(s) to be used in both the frontend and backend

Check out the deployed version of the web app at [jamstackdemo.netlify.app](https://jamstackdemo.netlify.app/) or click the button below to check out the GraphQL Playground for the API.

<a href="https://jamstackdemo.netlify.app/.netlify/functions/graphql" target="_blank"><img src="https://imgur.com/MPRWar8.png" width="150"></a>

## Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nathanchapman/jamstack)

Use the `Deploy to Netlify` button above to clone the repo on GitHub and automatically start building & deploying with your Netlify account (recommended method). You could also clone the repo manually instead, if you prefer.

Next, make sure you have the [Netlify CLI](https://github.com/netlify/cli) installed globally

> npm install -g netlify-cli

Once you have the project cloned, install the dependencies

> npm install

Then start up the development server

> npm start

This will start the Netlify Dev server with the [Node.js inspector](https://nodejs.org/en/docs/guides/debugging-getting-started/) and allow you to attach to the instance to hit breakpoints in your lambda code (GraphQL resolvers). A [VS Code launch configuration](https://code.visualstudio.com/docs/editor/debugging) is [provided in the project](.vscode/launch.json) to skip the process of setting up debugging tools.

## Deploying

If you used the `Deploy to Netlify` button, you're all set. Any commits pushed to your `main` branch will automatically [deploy using Netlify](https://docs.netlify.com/site-deploys/overview/#branches-and-deploys).

[Deployment previews](https://docs.netlify.com/site-deploys/overview/#deploy-preview-controls) are a great way to test your changes in a deployed environment before you make them live.

See the [Netlify Workflow](https://www.netlify.com/products/workflow/) for more details.

## TODOs

- Enable frontend debugging with webpack + chrome debug configurations
