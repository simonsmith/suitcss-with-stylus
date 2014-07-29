# SUIT CSS with Stylus

This is an example of mixing [Stylus](http://learnboost.github.io/stylus) and [SUIT CSS](https://github.com/suitcss/suit).

SUIT is an excellent way to structure and build components but as the tools focus on future-facing CSS it can mean you lose some handy parts of preprocessors like Sass and LESS.

By combining it with Stylus and building with Gulp it allows things like functions and nesting to come back whilst also harnessing the tools that SUIT provides.

### Why Stylus?

Firstly, Stylus is great and provides almost everything you'll need from Sass or Less but critically it also plays nice with the `--` custom property prefix and also allows `@import` to be escaped with [`@css`](http://learnboost.github.io/stylus/docs/literal.html)

These are key features for working with the SUIT preprocessor.

### How it works

Using [gulp](gulpjs.com) the SUIT components (written as Stylus files) are compiled into CSS and those CSS files are passed through the SUIT build tools. A single file is the result.

### Custom properties

SUIT makes use of the [custom property syntax](http://www.w3.org/TR/css-variables/#defining-variables) for variable data. Whilst this works perfectly well with Stylus, I find the syntax clunky. 

In this repo I've added an example of using the SUIT [theme principles](https://github.com/suitcss/theme/) with normal Stylus variables. This is just my preference and either can be used. How much of Stylus is used is completely up to you.