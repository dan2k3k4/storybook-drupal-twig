# Storybook Drupal Twig

Steps to reproduce the issue:

- `yarn`
- `yarn run build-library`
- `yarn run build-storybook`

You get an error about:

```
44% building 289/318 modules 29 active ...niel.lemon/coding/storybook-drupal-twig/node_modules/@storybook/addon-console/dist/react-decorator.jsError compiling twig template $resolved:be5251a98196e38f98214d64d91aa75bb869b6b1a24479ae5988619d43260fa332096cc978b75b5335634e7c44b4dc36a295cf3361b5e44b231535c7705a89e6:questions-answers.html.twig:
TwigException: Unable to parse 'trans 'Open menu' with {'context': 'Drupal frontend'}'
ERR! => Failed to build the preview
ERR! ./twig/components/news/news-teaser/news-teaser.html.twig
ERR! Module build failed (from ./node_modules/twig-loader/index.js):
ERR! SyntaxError: Unexpected token u in JSON at position 0
ERR!     at JSON.parse (<anonymous>)
ERR!     at Object.webpack (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/lib/compiler.js:91:33)
ERR!     at Object.Twig.compiler.compile (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/node_modules/twig/twig.js:1893:52)
ERR!     at Twig.Template.compile (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/node_modules/twig/twig.js:1836:26)
ERR!     at compile (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/lib/loader.js:67:19)
ERR!     at Object.module.exports (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/lib/loader.js:104:7)
ERR!  @ ./twig/components/news/news-teaser/news-teaser.stories.js 4:0-49 7:9-19
ERR!  @ . sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(ts|js))$
ERR!  @ ./.storybook/generated-stories-entry.js
ERR!  @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-a11y/dist/a11yRunner.js-generated-other-entry.js ./node_modules/@storybook/addon-a11y/dist/a11yHighlight.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-knobs/dist/preset/addDecorator.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js
ERR! ./twig/components/accordion/accordion.html.twig
```

Doing `yarn run storybook` also gives the same error:

```
[./node_modules/@storybook/core/dist/server/preview/globals.js] 93 bytes {vendors~main} [built]
[./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined] (webpack)-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined 7.68 KiB {vendors~main} [built]
    + 932 hidden modules

ERROR in ./twig/components/questions-answers/questions-answers.html.twig
Module build failed (from ./node_modules/twig-loader/index.js):
SyntaxError: Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at Object.webpack (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/lib/compiler.js:91:33)
    at Object.Twig.compiler.compile (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/node_modules/twig/twig.js:1893:52)
    at Twig.Template.compile (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/node_modules/twig/twig.js:1836:26)
    at compile (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/lib/loader.js:67:19)
    at Object.module.exports (/Users/daniel.lemon/coding/storybook-drupal-twig/node_modules/twig-loader/lib/loader.js:104:7)
 @ ./twig/components/questions-answers/questions-answers.stories.js 4:0-61 7:9-25
 @ . sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(ts|js))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-a11y/dist/a11yRunner.js-generated-other-entry.js ./node_modules/@storybook/addon-a11y/dist/a11yHighlight.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-knobs/dist/preset/addDecorator.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js (webpack)-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined
 ```
