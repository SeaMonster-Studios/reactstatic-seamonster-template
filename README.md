# React-Static + SMS Headless WP

## Backend (SeaMonster Studios Only)
- Repo: https://github.com/SeaMonster-Studios/wordpress-headless-starter-cloudways
- Application to clone: https://platform.cloudways.com/apps/615270/setting

## Features

- React Static
- Headless Backend (WordPress)
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

#### Add component or util to your project (like any other npm dependency)
Components:

`yarn run add:component <component-name>`

Utils:

`yarn run add:tuil <util-name>`

#### Import component or util (so you can modify it per the project)
Components:

`yarn run import:component <component-name>`

Utils:

`yarn run import:tuil <util-name>`

Note that when you do this, you're project will start using the compiled (dist) version of the component without changing any of your import statements. If you want to make changes you change the source file. Then either run `bit build`, or change your import statments to import the source file instead of the dist file.
