# sevengroupfrance/sulu-color-picker-bundle

Inspired by [this pull request](https://github.com/sulu/sulu-demo/pull/66).

## What is this bundle's goal?
Importing a custom fonctionality, in this example, a custom content type.

## Installation
1. Download the package in your project with the following command line: 
`composer require sevengroupfrance/sulu-color-picker-bundle`.
2. In `config/bundles.php` add the following code: 
`sevenGroupFrance\suluColorPickerBundle\ColorPickerCustomBundle::class => ['all' => true]`.
3. In `assets/admin/package.json`, add the following line in the "dependencies" object: 
`"sulu-color-picker-bundle": "file:node_modules/@sulu/vendor/sevengroupfrance/sulu-color-picker-bundle/src/Resources/js"`.
4. In `assets/admin`, `npm install` to initialize the bundle's symlink directory.
5. In `assets/admin/index.js`, add this line:
`import 'sulu-color-picker-bundle'`.
6. In `assets/admin`, `npm run watch` or `npm run build`

## Colors configuration
This bundle uses the .env constants as well as the npm package [dotenv](https://www.npmjs.com/package/dotenv). Install the package in your `assets/admin/node_modules` directory.
Once this is done, add those lines in your `assets/admin/webpack.config.js` file:
At the start of your file:
```
require('dotenv').config({ path: './../../.env' });
const webpack = require('webpack');
```
In the module.export object:
```
config.plugins.push(new webpack.DefinePlugin({
    "process.env": JSON.stringify(process.env)
  }))
```
This will add a new parameters to SULU's webpack.config.js' plugins object that will enable your env variables in your js files.

Finally, to configure your colors, write your constant with a string as value.
Said string will contain
