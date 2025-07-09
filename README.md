# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./Screenshot-mobile.png)
![](./Screenshot-tablet.png)
![](./Screenshot-desktop.png)
![](./Screenshot -desktop-error1.png)
![](./Screenshot-desktop-error2.png)
![](./Screenshot-desktop-success.png)

### Links

- Solution URL: [Solution URL](https://your-solution-url.com)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

This project provided a great opportunity to deepen my understanding of custom form validation using Vanilla JavaScript, going beyond the browser's default behavior. Key learnings include:

- Controlling HTML5 Form Validation: Successfully used the novalidate attribute on the form to disable the browser's default validation and take full control with JavaScript. This was crucial for showing custom error messages and handling different validation scenarios.

- Custom Email Validation with Regex: Implemented a regular expression (/^[^\s@]+@[^\s@]+\.[^\s@]+$/) to validate email formats, providing more granular control than the browser's native type="email" validation, especially for edge cases like "cosap@co".

- Managing Form States with Classes: Learned to effectively add and remove CSS classes (.error, .hidden, .success-message, .error-message) to the form and message elements. This allowed for dynamic visual feedback (e.g., red borders, showing/hiding messages, changing message color for success/error states) based on validation outcomes.

- Utilizing ValidityState API: Continued to use emailInput.validity.valueMissing for checking required fields, even with novalidate, demonstrating how to combine semantic HTML with custom JavaScript validation.

- Responsive Design with container-type and Media Queries: Reinforced responsive design principles using container-type: size and traditional media queries to adapt the layout and styles across different screen sizes.

## Author

- Website - [Claudia Cantiani](https://cla91.github.io/)
- Frontend Mentor - [@cla91](https://www.frontendmentor.io/profile/cla91)
- Github - [@cla91](https://github.com/cla91)
