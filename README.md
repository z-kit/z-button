# <a name="z-button"></a> z-button

[![Greenkeeper badge](https://badges.greenkeeper.io/z-kit/z-button.svg)](https://greenkeeper.io/)

[![Build]](https://travis-ci.org/z-kit/z-button) [![SemVer]](http://semver.org/) [![License]](LICENSE)

A styled button component for your web application.

## <a name="toc"></a> Table of contents

- [z-button](#z-button)
- [Table of contents](#toc)
- [Install](#install)
  - [Import as HTML/CSS component](#import-css)
  - [Import as Stateless Functional Component (SFC)](#import-sfc)
- [How to use](#howto)
  - [CSS component](#css)
  - [Stateless Functional Component](#sfc)
- [Theming](#theming)
- [License](#license)

## <a name="install"></a> Install

The package is available to download through [npm](https://npmjs.com):

```bash
npm install z-button --save
```

### <a name="import-css"></a> Import as HTML/CSS component

### The simple case

The package will be located inside the `node_modules` folder, you can import it into the HTML document as follows:

```html
<link rel="stylesheet" href="node_modules/z-button/dist/style.css">
```

### When bundling an web app

**For bundlers that support CSS, like [Webpack](https://webpack.github.io/), you can use it like this:**

```javascript
require('z-button/dist/style.css');
```

### <a name="import-sfc"></a> Import as a Stateless Functional Component (SFC)

The package does not include the renderer, you can use any renderer that supports SFCs. You could use React, Preact, Inferno, etc.

**Notice: This package contains CSS styling, you may need a bundler that's capable of requiring CSS files like Webpack with [css-loader](https://github.com/webpack/css-loader).**

Once you have chosen the renderer you can include the package in your project as follows:

```jsx
// Assuming the React renderer is being used
const React = require('react');
const render = require('react-dom').render;

// Passing the render function when importing
const ZButton = require('z-button')(React.createElement);

// Render it on page, using JSX here :)
render(<ZButton>Click me!</ZButton>, document.body);
```

## <a name="howto"></a> How to use

### <a name="css"></a> CSS component

Just add the HTML structure and CSS classes to reproduce the UI component.

### Class hierarchy

| Recommended HTML tags      | Parent | Class                  | Description                                                                          | Type     |
| -------------------------- | ------ | ---------------------- | ------------------------------------------------------------------------------------ | -------- |
| `button`, `a`              | `root` | `.z-button`            | Root container                                                                       | Block    |
| Any containing `.z-button` | `root` | `.z-button--bordered`  | Change the style of the button to be bordered with transparent background            | Modifier |
| Any containing `.z-button` | `root` | `.z-button--flat`      | Change the style of the button to be flat with no border or background               | Modifier |
| Any containing `.z-button` | `root` | `.z-button--icon`      | Change the style of the button to have a fixed size, useful for housing single icons | Modifier |
| Any containing `.z-button` | `root` | `.z-button--block`     | Make the button fill all the parent's width                                          | Modifier |
| Any containing `.z-button` | `root` | `.z-button--rounded`   | Make the button more round                                                           | Modifier |
| Any containing `.z-button` | `root` | `.z-button--secondary` | Secondary color for the button                                                       | Modifier |
| Any containing `.z-button` | `root` | `.z-button--success`   | Color the button green                                                               | Modifier |
| Any containing `.z-button` | `root` | `.z-button--warning`   | Color the button yellow                                                              | Modifier |
| Any containing `.z-button` | `root` | `.z-button--danger`    | Color the button red                                                                 | Modifier |

#### Full working example:

```html
<button class="z-button z-button--rounded">Click me!</button>
```

### <a name="sfc"></a> Stateless Functional Component

Render the HTML by using the SFC and passing props.

### Supported Props

| Prop name   | Expected Type               | Description                                                    |
| ----------- | --------------------------- | -------------------------------------------------------------- |
| `children`  | `HTMLElement` or `TextNode` | Button content                                                 |
| `bordered`  | `boolean`                   | Pass true to make change the style of the button to bordered   |
| `flat`      | `boolean`                   | Pass true to make change the style of the button to flat       |
| `icon`      | `boolean`                   | Pass true to make the button expect an icon as content         |
| `block`     | `boolean`                   | Pass true to make the button fill the parent's container width |
| `rounded`   | `boolean`                   | Pass true to make the button fully rounded                     |
| `secondary` | `boolean`                   | Pass true to make the button secondary                         |
| `success`   | `boolean`                   | Pass true to make the button green                             |
| `warning`   | `boolean`                   | Pass true to make the button yellow                            |
| `danger`    | `boolean`                   | Pass true to make the button red                               |

#### Full example (JSX):

```jsx
<ZButton>Click me!</ZButton>
```

## Theming

Available since `1.2.0`, now `z-button` supports theming through CSS Variables!

Check the list of variables used:

| Variable | Expected type | Description |
| ---- | ---- | ---- |
| --primary-color | `color` | The primary background-color for the buttons |
| --lighter-primary-color | `color` | background-color for the focused/hovered buttons |
| --darker-primary-color | `color` | background-color for the active buttons |
| --secondary-color | `color` | An alternative background-color for the buttons |
| --lighter-secondary-color | `color` | Alternative background-color for the focused/hovered buttons |
| --darker-secondary-color | `color` | Alternative background-color for the active buttons |
| --success-color | `color` | background-color indicating a success action button |
| --lighter-success-color | `color` | background-color indicating a focused/hovered success action button |
| --darker-success-color | `color` | background-color indicating an active success action button |
| --warning-color | `color` | background-color indicating a warning action button |
| --lighter-warning-color | `color` | background-color indicating a focused/hovered warning action button |
| --darker-warning-color | `color` | background-color indicating an active warning action button |
| --danger-color | `color` | background-color indicating a danger action button |
| --lighter-danger-color | `color` | background-color indicating a focused/hovered danger action button |
| --darker-danger-color | `color` | background-color indicating an active danger action button |
| --disabled-color | `color` | background-color indicating a disabled button |
| --button-text-color | `color` | Text color for the button, usually light |

## <a name="license"></a> LICENSE

[MIT](LICENSE)

[Build]: https://img.shields.io/travis/z-kit/z-button.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/z-button.svg