# Inphinity

> Infinity Scroll without [jQuery](https://jquery.com/) or other dependency.

Infinitely inspired by [Infinity Scroll](https://github.com/infinite-scroll/infinite-scroll)

### How to use?

Relax bro! A better documentation coming soon. For while, see a simple example:

```javascript
inphinity.on('#posts').set({
  navSelector : "p.pagination",
  nextSelector  : "p.pagination a.older",
  itemSelector  : ".container ul#posts li.post",
  finishedMsg: "<em>That's all folks!</em>",
  loadingMsg: 'Loading more...',
  animationSpeed: "slow"
});
```

##### Options to Set
`navSelector`    - Pagination nav (default: 'div.navigation')

`nextSelector`   - href attribute, who specifies the URL of the next page.  (default: 'div.navigation a:first')

`itemSelector`   - List items in structure (default: 'div.post')

`finishedMsg`    - Message to show when finish pages when ends (format: HTML, default: "<em>That's all folks!</em>")

`loadingMsg`     - Message to show when load more items (format: HTML, default: 'Loading more...')

`animationSpeed` - Set speed of the animations (options: ["slow", "fast"], default: 500)


### Where we use it?

Inphinity was made to Jekyll static blogs, Drupal and Wordpress sites/blogs.

### Who uses?

- [My personal blog](http://raphamorim.com/blog)

## License

The MIT License (MIT)

Copyright (c) 2015 [Raphael Amorim](http://github.com/raphamorim)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
