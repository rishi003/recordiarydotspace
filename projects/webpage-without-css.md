---
title: "Webpage without CSS"
titleImage: https://i.ibb.co/2ywMy0X/image-for-blog-post-21.jpg
titleImageName: "a snapshot of CSS code"
github: "https://github.com/rishi003/Without-CSS"
description: "A simple application developed in NodeJS which scrapes down a webpage and renders it in pure HTML without any CSS styling."
technologies:["NodeJS","Express","Puppeteer","Materialize CSS"]
---

The frontend of a website can primarily be divided into two components:

- Content: Handled by HTML tags and structure.
- Styling: Handled by CSS.



![An image of a website wireframe using markers and watercolours](https://i.ibb.co/x7qYg6w/image-for-blog-post-22.jpg)

To get a good idea of the accessibility of the content to screen readers and other aiding devices it is necessary to look at un-rendered webpage.

This small tool runs on a NodeJS server using [ExpressJS framework](https://expressjs.com/) and extracts out the entire content of a webpage provided as a URL with [Puppeteer](https://pptr.dev/). It then extracts the content of the body tag and renders it on the screen.

For UI, I used a simple CSS framework: [Materialize](https://materializecss.com/).

---

Where can it be used:

- Extract just the content of the page.
- Check if your page is ready for visually impaired people.
- Optimize the use of assets such as images and graphics as they are displayed in the same size they get delivered.

---


