# Web-Development

For front-end development

##Getting Started

1. Run `npm install`
2. Use `npm run watch` to bundle with Webpack and watch for changes
3. `npm start` will start the server with Webpack Hot Middleware

##Deploying
A npm postinstall script is included to run `npm run build` after install.

1. `npm run build` will bundle the client for production
2. A Profile is included for Heroku. It will run `npm run start:prod`.
