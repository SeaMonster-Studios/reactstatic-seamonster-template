# React-Static + SMS Headless WP

## Features

- React Static
- Headless Backend (WordPress)
- Emotion CSS-in-JS
- Netlify Lambdas
- Gravity Forms API access via JWT & Netlify Lambdas

## Setup

- Make sure you have _npm_ installed globally
- run `npm i`
- Clone and install Recommended WP Repo
- Setup .env
- Setup WP Authentication/JWT
- run `npm start`

### Install Recommended WP Repo

URL: https://github.com/SeaMonster-Studios/wordpress-headless-upstream

Clone, and then run the script, `bash install.sh -d domain-of-live-site.com`

### Recommended WP Plugins

These are installed automatically when you use the Recommended WP Install

https://github.com/SeaMonster-Studios/wordpress-headless-plugins

### .env

- API_USER: This needs to be an admin level username in wordpress
- API_PASSWORD: The password to your API_USER
- API_URL: Example: https://my-awesome-wp-site.com/wp-json
- SENTRY_URL: Used for debugging, something you get when you setup a new sentry instance.
- SITE_ROOT: Used by react static for site map generation, etc. Use whatever the domain is the site is currently running on.
  - Local example: https://localhost.com:3000/
  - Live Example: https://my-awesome-wp-site.com/

### WP Authentication/JWT

Add the following items to your `wp-config.php` file:

- define('JWT_AUTH_SECRET_KEY', 'SECURE_STRING_HERE');
- define('JWT_AUTH_CORS_ENABLE', true);

For the SECRET_KEY, you can use a string from here https://api.wordpress.org/secret-key/1.1/salt/

More info on the JWT plugin here: https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/

## Tips

- Use the `decode` function from the `he` library when rendering any HTML from WordPress. This will prevent `&amp;` from rendering, instead of `&`
