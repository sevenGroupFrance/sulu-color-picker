# sevengroupfrance/sulu-color-picker-bundle

Inspired by [this pull request](https://github.com/sulu/sulu-demo/pull/66).

## What is this bundle's goal?
Importing a custom fonctionality into [sulu](https://github.com/sulu/sulu), in this example, a custom content type.
This bundle will make a color picker with a few colors only. This is handy if you don't want to select a color via the normal color picker sulu has.

![How the color picker looks in sulu's admin](img/cp-1.png)

## Installation
1. Download the [package](https://packagist.org/packages/sevengroupfrance/sulu-color-picker-bundle) in your project with the following command line:\
`composer require sevengroupfrance/sulu-color-picker-bundle`.
2. In `config/bundles.php` add the following code:\
`SevenGroupFrance\SuluColorPickerBundle\ColorPickerCustomBundle::class => ['all' => true]`.
3. In `assets/admin/package.json`, add the following line in the "dependencies" object:\
`"sulu-color-picker-bundle": "file:node_modules/@sulu/vendor/sevengroupfrance/sulu-color-picker-bundle/src/Resources/js"`.
4. In `assets/admin`, `npm install` to initialize the bundle's symlink directory.
5. In `assets/admin/index.js`, add this line:\
`import 'sulu-color-picker-bundle'`.
6. In `assets/admin`, `npm run watch` or `npm run build`

## dotenv configuration
This bundle uses the .env constants as well as the npm package [dotenv](https://www.npmjs.com/package/dotenv). Install the package in your `assets/admin/node_modules` directory.
Once this is done, add those lines in your `assets/admin/webpack.config.js` file:\
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

This will add a new parameters to SULU's webpack.config.js' plugins object and enable your env variables in your js files.

## colors configuration
This part is quite simple.
Open your .env file in your root directory, and add the constant `COLOR_PICKER_COLORS`.

Then, give it a string for its value, with the colors you want:\
`COLOR_PICKER_COLORS="#F18C1C #3C3C3B #FFFFFF"`

The colors can be hexadecimals, rgb or color name (pretty much everything that works on CSS) and have to be separated by a single space gap.\
Finally, once you've saved your .env file, do a new `npm run watch` or `npm run build` in your `assets/admin` directory to initialize the colors you've saved.

## Use in your template files
Once installed, to use this new content type, you'll have to create a new property with the type `color_picker_custom`.

```
<property name="title_color" type="color_picker_custom">
    <meta>
        <title lang="en">Page's title - 80 characters max</title>
    </meta>
</property>
```
