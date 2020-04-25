# MarkLogic UI Component Library
React component library that extends Ant Design.

## Installing the Library

```
npm install --save marklogic-ui-library
```

## Using the Component Library

- Setup your application repo to handle custom Ant Design theming https://ant.design/docs/react/use-with-create-react-app#Advanced-Guides
- Copy config-overrides.js from /playground into application repo
- Add Ant Design CSS file to app: '../node_modules/antd/dist/antd.css';
- Add minifed Marklogic UI CSS file to app:  path to '../node_modules/marklogic-ui-library/dist/styles.min.css'

```jsx
import React from 'react'

import { MLButton } from 'marklogic-ui-library';

const App = () => {
  return (
    <MLButton>Submit</MLButton>
  )
}
```

## Developing UI Components

```
# If you don't have NVM and want to use it to install the proper node version, intall it with these instructions: https://github.com/nvm-sh/nvm

# Install and use node >=8.16 if you don't have it already:
nvm install 8
nvm use 8

# Install Yarn, if you don't have it already:
npm install -g yarn

# Install Dependencies
npm run install:all

# Start Rollup (listens for changes for components in src folder)
# (run from main repo directory):
yarn run start

# In another terminal: Start Playground (import and test new components here)
cd playground; yarn run start

# Playground should be running at http://localhost:3000

```
- Add new components in the root/src folder
- Add CSS to root/src/styles.scss file
- Import/Export component in root/src/index.js
- Create Stories for the component in the root/stories folder

## Viewing UI Components
This repo uses Storybook to view components and provide usage guidelines and API documentation
```
# Install Dependencies
npm run install:all

# Start Storybook
npm run storybook

Storybook: localhost:6006
```

## Publishing static version of Storybook
```
# Build Storybook
npm run build-storybook

Static files will be in the /storybook-dist folder
```


## Publishing the Library to NPM
Make sure you are logged in to npm
```
Update root/package.json
version needs to increase everytime it is published.

# Build minified CSS and publish library to NPM
npm publish
```


## Using this library

### Create-React-App

The `playground` folder has an example [config-overrides.js](playground/config-overrides.js) for create-react-app.
