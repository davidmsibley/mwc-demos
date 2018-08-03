# MyUW Web Components Demos

This repository is for examples of MyUW Web Components being used in different
ways and with different technologies. This can also be used for testing
updates.

## Development

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```
## Testing changes in components

To see a component's changes live in development, cd to the component of your choosing, for example `myuw-app-bar`, and run
```
npm link
npm start
```

Then in `mwc-demos` run
```
npm link myuw-app-bar
npm start
```

If you want to show that example on gh-pages, package up the component and drop it in a folder in lib, for example `src/lib/myuw-app-bar/demo1.js`
