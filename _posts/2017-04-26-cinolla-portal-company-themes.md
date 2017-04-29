---
layout: post
title: Developing company themes for Cinolla's new React-Powered Portal
date: 2017-04-26 12:00:00
image: 2017-04-26-cinolla-portal-company-themes/theme-result.png
tags:
- JavaScript
- React
- Cinolla
- CSS
- Theming
---
At [Cinolla][Cinolla] we're busy rebuilding the booking portal. Since shipping it a couple of years ago, the needs of the clients (and the number of clients) has shifted somewhat. More and more centres require it for several different things. With each centre's attendees being completely different, we need a solution that works for them all.

We're taking the opportunity to rewrite the site as a React application. The ability to adjust easily to different views based on the data supplied is a huge bonus. Alongside Redux for state management and improving the overall experience for users, it's a huge win - and probably worth several posts on its own.

It's still (very) early doors on this project. One of the priorities is getting a good base set up for the rest of the site to sit upon. A key part of that is separate themes for each company and centre that are using Cinolla.

## The existing system
In the existing Cinolla portal, each company and centre has their own overrides for the main Cinolla layout. Each company has their own one that's applied to all of their centres with each centre also having its own override. These are in the form of a single CSS file that's added to each page.

It's a system that, on the whole, works. It's not something we focused on as a priority, however, and as such each override file is a big mess of different CSS rules of varying specificity.

It also doesn't help that the base Cinolla theme has a lot of superflouous content within it that would always need to be hidden.

## The new system
This new React system has something radically different to the old system - a build step. Webpack is fundamental in React development and we're using it as much as possible to generate small JS files, app shell, tests and a whole bunch more.

One big thing in use is [CSS modules][CSS modules]. With help of the `css-loader` loader we can scope CSS to each component, which then gets swept up into its own CSS file. It analyses where each bit of CSS gets used, generates a unique class name for it, and applys it where necessary in the component. It's great.

```js
import React from 'react';
import styles from './styles.scss';
class MainLayout extends React.Component {
    render() {
        return (
            <div className={styles.MainLayout}></div>
    }
}
```

The above will generate a React component with a class of something like `MainLayout__1bv25`, which means nothing else will clash with the CSS for that component. If you don't like the "cascading" part of CSS, it's ideal.

Each style file is SASS, that gets compiled as an earlier part of the Webpack process. It adds a little more complexity to the set up, but it's not something Webpack can't handle.

### The issue with CSS Modules

The problem is, this class name is pretty much unpredictable by design. If we wanted to override these styles, we would need to either use a completely different CSS file for each company/centre, or add another class to the element that contained the company/centre-specific overrides.

Each component is bundled in a directory containing the JSX, the tests to be ran on it, and the styling. It makes sense to keep those files together, so we should keep the overrides together too.

[![Theme Files][Theme Files]][Theme Files]

With so many companies now wanting to use the portal feature within Cinolla, there's lots of these overrides and we can't manually include each override into every file as that would get very messy very quickly.

We could dynamically include the CSS files, but as these files are based on internal Cinolla IDs for companies and centres that won't be known at the time of compiling. That means Webpack has to include all CSS files and switch between them as neccessary.

That's fine if we only had a couple of overrides, but with 50+ companies potentially having many values to include, that main CSS file is going to inflate fast. But for a lack of a better solution, that's the way we would need to go.

## What company is this?

If we have the overrides included altogether, we need a way of letting each component know what the current company and centre ID is in order to display correctly. We could do it by props manually, but that's a lot of passing around to do.

In order to save adding props manually each time, we can use a little-known, barely documented, highly volatile feature of React - [Context][Context].

It's essentially passing values down through components as far as necessary. You can supply them in a parent, then way down in its children you can pick them up. They're best avoided for data in many cases, but for things like theming they're ideal.

In most cases, you would provide a colour or a set of CSS properties to apply to every component for a theme instead of apply specific CSS rules, but they are flexible enough for all uses.

[![Context Values][Context Values]][Context Values]

I came across a great post about [Providers and Higher Order Components][Providers and Higher Order Components] that outlines how to create a generic wrapper component to apply the context and another to pull them in (with their specific syntax) and apply them as props.

This gave birth to the `CentreTheme` and `CentreThemeProvider` components. The whole app is wrapped in `<CentreThemeProvider>`, which uses Cinolla's API to grab the company and centre IDs and apply them as context values. `CentreTheme` is then used as a higher order component that supplies those context values as companyId and centreId props.

### The issue with context

Remember when I said you shouldn't use context? Yeah. Don't use context.

React is really good at knowing when props and state change. It's kind of it's thing. Context however not so much. In an application where a user would move between centres quite often, we can't rely on context being up to date and as such, it's a non-starter.

Alongside that, even when updating the passed props manually, I still couldn't get CSS modules to pick up the change and apply the new CSS with any reliability.

Even if those things could be worked around, all the CSS lives in one file. With potentially hundreds of extra classes to download, that approach isn't going to scale.

Another solution is needed, sadly.

## Back to Gulp

Gulp is another build processor for a variety of different project types. It was all the rage a couple of years ago and when I come across old projects of mine that use it I can pick it up pretty quickly. A lot of tie-ins with other technologies have npm packages already built and it's just a case of clipping them together.

As the SASS files need pre-processing anyway, it's a case of finding packages that process the SASS into CSS and combine them into a separate file. I took a bit of a sledgehammer approach to this and came up with the following task. There's a similar one for centres too.

```js
gulp.task('company-overrides', () => {
  for (let companyId = 1; companyId <= 50; companyId += 1) {
    gulp.src(`./src/components/**/overrides/company/${companyId}.scss`)
      .pipe(sass())
      .pipe(concat(`company-${companyId}.css`))
      .pipe(cleanCSS())
      .pipe(gulp.dest('./dist/assets/overrides/'));
  }
});
```

In short, it looks through each component to see if it has any overrides for a company, and if it does it processes the SASS, combines the result and adds the file to the output directory. This results in a bunch of CSS files titled `company1.css`, `company2.css`, `company3.css` etc. that we inject into the page as necessary.

These files contain the same class names as the original CSS. It does mean we had to abandon CSS modules for now, but it's not a huge deal at this early stage. By adopting a more traditional BEM-style approach it's not making much of a difference anyway.

Theme files aren't something we would generate on a regular basis, so this can be generated as a separate command. This will also watch these files and regenerate for any changes that occur.

It's far from elegant, but it works. It's a shame I couldn't work it into the Webpack flow but maybe that's one for the future.

[Theme Files]:{{ site.baseurl }}/assets/2017-04-26-cinolla-portal-company-themes/theme-files.png
[Theme Result]:{{ site.baseurl }}/assets/2017-04-26-cinolla-portal-company-themes/theme-files.png
[Context Values]:{{ site.baseurl }}/assets/2017-04-26-cinolla-portal-company-themes/context-values.png

[Cinolla]:http://www.cinolla.com
[CSS Modules]:https://github.com/css-modules/css-modules
[Context]:https://facebook.github.io/react/docs/context.html
[Providers and Higher Order Components]:https://medium.com/@bloodyowl/the-provider-and-higher-order-component-patterns-with-react-d16ab2d1636