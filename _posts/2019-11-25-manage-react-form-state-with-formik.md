---
layout: post
title: Manage React form state with Formik
date: 2019-11-25 12:00:00
image: 2019-11-25-manage-react-form-state-with-formik/manage-react-form-state-with-formik-cover.jpg
thumbnail: 2019-11-25-manage-react-form-state-with-formik/manage-react-form-state-with-formik-cover-sm.jpg
tags:
  - Tutorial
  - Net Magazine
  - JS
  - React
  - Form
  - Formik
---

Ever tried making a form in a React app? At the start it might not seem so bad, but as it grows it turns into a beast. The [redux-form][redux-form] package is often the go-to choice out there to help, but that relies on Redux and is a massive burden for a quote-unquote "simple" form.

Thankfully, there's a new solution out there. In the latest [Net Magazine][net magazine] we take a look at [Formik][formik] and how it can help make complex forms without all the heavy lifting.

[![Manage React form state with Formik][manage react form state with formik]][manage react form state with formik]

Handling a form in React typically involves hooking up a bunch of [controlled components][controlled components] to get state in a big object. That data can then be used however it's needed, but it would typically need to be validated and submitted to a server somewhere.

In short, Formik is doing all of that upfront work for us. At the top level, the [Formik component][formik - formik component] handles the business logic - the state, the validation and the submission flow. For each field, there's a [Field component][formik - field component] that deals the change and blur handlers for us. In short, all we need to do is piece Formik's hard work together.

In this tutorial, we make a small voting application that takes a question and four possible answers. The user enters their name and chooses an answer and can submit it to a server. Inside, we're dealing with field generation, required values and displaying errors. There's plenty in there to introduce the concepts and where to go next.

If this all sounds like something that might help your next React project, the [tutorial files][github tutorial files] are online to look at. Better still, go and buy the latest issue of [Net Magazine][net magazine]. In there I go through making that component step by step.

[Manage React form state with Formik]:{{ site.baseurl }}/assets/2019-11-25-manage-react-form-state-with-formik/manage-react-form-state-with-formik.jpg

[net magazine]: https://www.myfavouritemagazines.co.uk/design/net-magazine-back-issues/net-january-2020-issue-327/
[redux-form]: https://redux-form.com/
[formik]: https://jaredpalmer.com/formik
[controlled components]: https://reactjs.org/docs/forms.html#controlled-components
[formik - formik component]: https://jaredpalmer.com/formik/docs/api/formik
[formik - field component]: https://jaredpalmer.com/formik/docs/api/field
[github tutorial files]: https://github.com/mattcrouch/formik-tutorial
