# SUIT CSS with Stylus & PostCSS

This is an example of writing SUIT components with Stylus and then using [gulp](http://gulpjs.com/) and [PostCSS](https://github.com/postcss/postcss) to handle the tooling

By combining SUIT with Stylus it allows things like functions and nesting to come back whilst also harnessing the tools that SUIT provides. On top of that there is an entire [ecosystem of PostCSS plugins](https://github.com/postcss/postcss#plugins) available for further processing.

### Why Stylus?

Stylus plays nice with the `--` custom property prefix and also allows `@import` to be escaped with [`@css`](http://learnboost.github.io/stylus/docs/literal.html)

These are key features for working with the SUIT preprocessor. Plus it's really fast and allows minimal syntax

### How it works

Using [gulp](gulpjs.com) the SUIT components (written as Stylus files) are compiled into CSS, linted with the SUIT conformance tool and then built with [postcss-import](https://github.com/postcss/postcss-import) and [cssnext](https://github.com/cssnext/cssnext). A single file is the result.

Additional plugins can be added easily.

### Treating SUIT as a global

In this repo the dependencies of each component are listed as `@imports` so that `postcss-import` can work out the dependency tree.

An alternative to this is to treat SUIT as a global library. This works well and can reduce the hassle of ensuring each component requires the right dependencies.

Example from `base.styl`:

``` css
@css {
  @custom-media --xs-viewport (min-width: 30em);
  @custom-media --sm-viewport (min-width: 48em);
  @custom-media --md-viewport (min-width: 62em);
  @custom-media --lg-viewport (min-width: 75em);

  /**
   * Use SUIT as a global
   */
  @import "suitcss-base";
  @import "suitcss-utils";
  @import "suitcss-components";
}

@require "functions"
@require "vars"

/**
 * More code here
 */
```
