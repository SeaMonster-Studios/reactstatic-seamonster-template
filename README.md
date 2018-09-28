# React-Static with SeaMonster Studios Setup

## Backend (SeaMonster Studios Only)

- Repo: https://github.com/SeaMonster-Studios/wordpress-headless-starter-cloudways
- Application to clone: https://platform.cloudways.com/apps/615270/setting

## Features

- React Static
- Emotion CSS-in-JS
- Netlify Lambdas
- Gravity Forms API access via JWT & Netlify Lambdas

## Setup

- Make sure you have _yarn_ installed globally
- run `yarn`
- Clone and install Recommended WP Repo
- Add .env variables
- run `yarn start`

### .env

- API_USER: This needs to be an admin level username in wordpress
- API_PASSWORD: The password to your API_USER
- API_URL: Example: https://my-awesome-wp-site.com/wp-json
- SENTRY_DSN: Log into https://sentry.io/ > Create a project (React) > Go to project settings > Go to "Client Keys (DSN)" in the left navigation
- SITE_ROOT: Used by react static for site map generation, etc. Use whatever the domain is the site is currently running on.

  - Local example: https://localhost.com:3000/
  - Live Example: https://my-awesome-wp-site.com/

## SeaMonster Studios React Components and Utils

- Bit: https://bitsrc.io/seamonster-studios/react
- Git repo: https://github.com/SeaMonster-Studios/react-components

### Using Bit with custom CLI commands

First off, you can check out the docs [here](https://docs.bitsrc.io/). We've abstracted some of the commands here for brevity. When using the seamonster-studios/react bit scope.

#### SMS Bit CLI Commands

##### Bit Tag

`yarn ss:tag <dir/scope> <file/component> <any bit options>`

##### Yarn add bit component

`yarn ss:add <dir/scope> <file/component> <any bit options>`

##### Bit add component to bit

`yarn ss:watch <dir/scope> <file/component> <any bit options>`

##### Bit import component into project

`yarn ss:import <dir/scope> <file/component> <any bit options>`

##### Bit export component (send updated version to bit). You can also use the `--eject` option to remove the component files from your project and return it to being an npm dependency

`yarn ss:export <dir/scope> <file/component> <any bit options>`

Example
`yarn ss:add component flexible-layout`
