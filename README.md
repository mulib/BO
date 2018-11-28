# Back Office Application

## 1. General

this document describe the development principals for react-redux web application, including TDD, localization, UI, API calls, configuration and third party libraries

## 2. Infrastructure

this section describe the main infra libraries used in the project

### 2.2. devDependencies

devDependencies are the libraries that require for build time (resolving modules, code linting, testing, bundling etc.)
devDependencies will not be part of production bundle

#### 2.2.1. webpack

webpack is a static module bundler for modern JavaScript applications. 

webpack generates one or more bundles from application assets (Typescript files, Sass files, images, fonts etc.)

**Set up**:

The goals of development and production builds differ greatly. In development, we want strong source mapping and a localhost server with live reloading or hot module replacement. In production, our goals shift to a focus on minified bundles, lighter weight source maps, and optimized assets to improve load time. With this logical separation at hand, we typically recommend writing separate webpack configurations for each environment.

While we will separate the production and development specific bits out, note that we'll still maintain a "common" configuration to keep things DRY. In order to merge these configurations together, we'll use a utility called webpack-merge. With the "common" configuration in place, we won't have to duplicate code within the environment-specific configurations.

in order to achieve the above set up, we using three seperate files cor webpack configuration:

- webpack.comon.config
- webpack.dev.config
- webpack.prod.config
- webpack.test.config 

package | version | description
---------|----------|---------
[webpack](https://github.com/webpack/webpack) | ^4.26.0 | webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.
[webpack-cli](https://www.npmjs.com/package/webpack-cli) | ^3.1.2 | webpack CLI is a CLI tool for providing a flexible set of commands for developers to increase speed when setting up a custom webpack project
[webpack-dev-server](https://github.com/webpack/webpack-dev-server) | ^3.1.10 | Use webpack with a development server that provides live reloading. This should be used for development only.
[webpack-merge](https://github.com/survivejs/webpack-merge) | ^4.1.4 | this package used in order to merge between common webpack configuration to prod/test/dev specific configuration

**Entry and Output**:

below configuration shows the entry and output of webpack build. it means that `index.ts` will wrap the entire application. once webpack done with his magic, the output bundle will be saved under `dist/main.bundle.js`.
the bundle can be served by node-express server hosted on AWS

```javascript
    entry: {app: "./src/index.ts"},
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },

```

**build modes**:
bellow configuration define the available build modes

```javascript
// webpack.dev.js
    devServer: {
        contentBase: './dist', // This tells webpack-dev-server to serve the files from the dist directory
         hot: true // set hot module replacement (HMR)
    },

```

```json
// package.json
    "scripts": {
        "test": "test",
        "start": "webpack-dev-server --open --config webpack.dev.js",
        "prod": "webpack --config webpack.prod.js"
    },
```

for development we using webpack-dev-server to enable live reloading (watch file change and rebuild)
the webpack-dev-server will lunch the browser on port :8080 and serve the `dist/index.html`
in addition, we set the `hot: true` option to enable hot module replacement, it basically says that code changes or assets changes will be compiled and reflected to the browser without need to refresh and re-build the whole application.


**to run dev mode from terminal run** `npm start`
**to run prod mode from terminal (or CI/CB ) run** `npm run prod`

##### 2.2.1.1 Sass

package | version | description
---------|----------|---------
 [node-sass](https://github.com/sass/node-sass) | ^4.10.0 | Node-sass is a library that provides binding for Node.js to LibSass, the C version of the stylesheet preprocessor, Sass. allows you to compile .scss files to css
 [sass-loader](https://github.com/webpack-contrib/sass-loader)| ^7.1.0 | compiles Sass to CSS, using Node Sass by default
 [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)| ^0.4.4 | This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps. (used in prod only to save build time in dev mode)
Sass (`.scss` extension) language enable to write more scalable CSS using concepts like mixings, variables, inheritance etc.

webpack compile .scss files using Node-Sass and sass-loader plugin.

- webpack enables to import css file and use it as a module within your typescript code (using `css-loader`)
- style-loader will create`<style>` section within the source HTML and throw the compiled css there

```javascript
// webpack.config.js
module.exports = {
    module: {
        rules: [{
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
};

```

##### 2.2.1.1 Images

##### 2.2.1.1 Fonts

#### typescript

package | version | description
---------|----------|---------
 [typescript](https://github.com/Microsoft/TypeScript) | ^3.1.6 | TypeScript is a strict syntactical superset of JavaScript, and adds optional static typing to the language.
 [ts-loader](https://github.com/TypeStrong/ts-loader)| ^5.3.0 | webpack plugin used in order to compile typescript to javascript

we using ts loader to compile `.ts|.tsx` files from src folder to `dist/main.bundle.js`
the file static file `dist/index.html` have single reference to `dist/main.bundle.js` that includes the front end code (react application).

### 2.3. dependencies

dependencies are the libraries that require for run time (data model, Utilities, UI rendering, API calls)

#### 2.3.1. React

package | version | description
---------|----------|---------
 [react](https://reactjs.org/docs/react-api.html) | ^16.6.3 | React is a JavaScript library for creating user interfaces.
 [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom)| ^16.6.3 | This package serves as the entry point to the DOM and server renderers for React


#### 2.3.2. Redux

using redux on react application enable having consistent "global" state within react components

React limit data passing from parent to child and redux solve the need to inject props down the components hierarchy

the way to use Redux within react application is the react-redux library that provide simple interface to connect component props to the "global" redux state

package | version | description
---------|----------|---------
 [redux](https://github.com/reduxjs/redux) | ^4.0.1 | Redux is a predictable state container for JavaScript apps
 [react-redux](https://github.com/reduxjs/react-redux)| ^5.1.1 | Official React bindings for Redux

#### 2.3.3. blueprintjs

#### 2.3.4. axios


1. add gulp build scripts for test, dev, prod
2. separate webpack config for test dev prod
3. optimize the bundle for prod(thread-loader/optimize assets)
4. separate  entities to node modules (themes, server, ui-components)
5. add react router with code splitting

#### 2.3.5. express


### 2.4. theme

theme is set of variables and classNames that define the colors, fonts and icons 
in addition, the theme contains the style for custom react components, we expose the theme thru single theme file that we require() in global scope of the application (for build optimization)


### 2.5. VSCode extension


### 2.6. Workspace Set up

## TODO

TODO: add test run script and configuration once adding the test framework
TODO: change the entry value once adding React
TODO: figure out what AWS service is better to host web applications (lambda+API GW or S3 or other)
TODO: integrate hot HOC for React so the HMR will work in harmony with the way react works 
TODO: add configuration and console command for tests
TODO: add React-router
TODO: add description for express
TODO: add explanation on theme folder and refer to CONTRIBUTING.md
TODO: add recommended extensions to workspace settings
TODO: create VSCode workspace file
TODO: add caching for bundle chunks to save build time https://webpack.js.org/guides/caching/
TODO: add nodemon and nodemon script for server.ts
TODO: add configuration file
TODO: add react-intl for localization
TODO: add the optimization plugins see https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
TODO: add code splitting see https://webpack.js.org/guides/code-splitting/#entry-points