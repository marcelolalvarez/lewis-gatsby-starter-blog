---
title: "How to Install Jekyll on Ubuntu"
date: "2020-03-11"
---

![photo](Jekyll.png)

**[Jekyll](https://jekyllrb.com/)** is a very simple, blog-aware, static site generator that is perfect for personal, project, or organization sites.

I came across Jekyll a few months ago. My site was originally done in Wordpress and then I re did it in html5. Having the site as a basic html site was good enough for me. At some point I had thought about writing some of my daily work experiences and wanted a more dynamic site but lightweight at the same time. And this is when I found Jekyll.

What is Jekyll? Jekyll is a static site generator, which is part of Ruby (the programming language). This guide will help you get started. In this post we will just discuss how to install it in Ubuntu even though the installation in MACOS is very similar. I will create another post later that will focus on how to build a basic Website.

I also want to mention that even though Jekyll is marketed as a blogging platform it can also be used to build Website, like in Wordpress.

Run the following commands in Ubuntu to have Jekyll up and running in your system.

1. sudo apt-get update
2. sudo apt-get install ruby
3. sudo apt-get install ruby-dev
4. sudo gem install bundler
5. sudo gem install jekyll
6. CD to the project directory
7. bundle update
8. bundle install
9. bundle exec jekyll server (this will run the default site in your localhost. So fire your browser and go to http://localhost:4000)

That’s it. You should be able to see a basic Jekyll site in your browser.