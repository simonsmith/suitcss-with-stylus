# SUIT CSS with Stylus

This is an example of mixing [Stylus](http://learnboost.github.io/stylus) and [SUIT CSS](https://github.com/suitcss/suit).

By combining SUIT with Stylus it allows things like functions and nesting to come back whilst also harnessing the tools that SUIT provides.

### Why Stylus?

Firstly, Stylus plays nice with the `--` custom property prefix and also allows `@import` to be escaped with [`@css`](http://learnboost.github.io/stylus/docs/literal.html)

These are key features for working with the SUIT preprocessor. Plus it's really fast and fits nicely in the gulp pipeline

### How it works

Using [gulp](gulpjs.com) the SUIT components (written as Stylus files) are compiled into CSS and those CSS files are passed through the SUIT build tools. A single file is the result.

### Treating SUIT as a global

In this repo the dependencies of each component are listed as `@imports` so that rework-npm can work out the dependency tree. An alternative to this is to treat SUIT as a global library. This works well and can reduce the hassle of ensuring each component requires the right dependencies.

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