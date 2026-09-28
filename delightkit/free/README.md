# DelightKit Free ✨

A tiny, dependency-free celebration burst for ecommerce buttons and success actions.

**Live demo:** https://gurprit.github.io/delightkit/

**DelightKit Pro:** https://sahotaguru.gumroad.com/l/gewsp

DelightKit Free is the open-source teaser for **DelightKit Pro**, a collection of polished ecommerce microinteractions for React and vanilla JavaScript.

## What it does

Click a button and get a fast burst of bright confetti followed by a slow, natural flutter down.

Good fits include:

- Add to basket
- Wishlist / like
- Signup success
- Reward unlocked
- Free shipping reached
- Review submitted

It is deliberately small: no animation framework, no runtime dependency, and no canvas.

## Quick start

```html
<link rel="stylesheet" href="./src/delightkit-free.css">
<button data-delight-burst>Add to basket</button>
<script type="module">
  import { wireCelebrations } from './src/delightkit-free.js';
  wireCelebrations();
</script>
```

## JavaScript API

```js
import { burst } from './src/delightkit-free.js';

const button = document.querySelector('#buy');
burst(button, {
  amount: 24,
  colors: ['#ff2da6', '#00d9ff', '#ffe600']
});
```

## Accessibility

DelightKit Free respects `prefers-reduced-motion: reduce`.

## Want the full kit?

**DelightKit Pro** adds React + TypeScript components, ambient floating confetti and hearts, like / wishlist celebrations, ecommerce milestone unlocks, editable source and a commercial-use licence.

**Get DelightKit Pro for £29 → https://sahotaguru.gumroad.com/l/gewsp**

## Licence

DelightKit Free is released under the MIT License. The paid DelightKit Pro bundle uses its own commercial licence.
