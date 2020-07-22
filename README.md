# MarkLogic UI Component Library
React component library that extends Ant Design.

## Installing the Library

```
npm install --save @marklogic/design-system
```

## Using the Component Library

- Setup your application repo to handle custom Ant Design theming https://ant.design/docs/react/use-with-create-react-app#Advanced-Guides
- Copy config-overrides.js from /playground into application repo
- Add Ant Design CSS file to app: '../node_modules/antd/dist/antd.css';
- Add minifed Marklogic UI CSS file to app:  path to '../node_modules/@marklogic/design-system/dist/styles.min.css'

```jsx
import React from 'react'

import { MLButton } from '@marklogic/design-system';

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

# Start Storybook:
yarn run storybook

# In another terminal: Start Playground (import and test new components here)
cd playground; yarn run start

# Playground should be running at http://localhost:3000

```

### Generate a new component with Plop.js:
Install plop: `yarn global add plop` or `npm install -g plop`
Then run the generator in one of two ways:

a. Just run "plop" and type in the arguments as prompted

b. or, pass in the arguments as space-separate command line arguments, eg:
  `plop component  4 "General" MLTypography "MLText MLTitle MLParagraph"`
  - 4 corresponds to UX-4
  - "General" Corresponds to the category the Ant component is in on the Ant documentation sidebar
  - MLTypography is the name of the main component
  - "MLText MLTitle MLParagraph" is the name of all child components (eg MLTypography.MLText)
  
This will generate:
  - The component folder, with its JS and Less files in `src/`
  - The Story file (jsx) and its documentation file (mdx) in `stories/`

Then, once it's been generated, add an entry to `src/index.js` to export the component.

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
