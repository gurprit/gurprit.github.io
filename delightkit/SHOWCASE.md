# DelightKit ecommerce showcase

The GitHub Pages demo lives at https://gurprit.github.io/delightkit/.

## Run locally

From the repository root, run `python3 -m http.server 8765`, then open
`http://localhost:8765/delightkit/`. No build step or package installation is needed.

The live showcase uses `site.js` and `site.css`. The React panel is explicitly an
integration example, retaining the existing CelebrationButton API shown by this
site. Paid React source is not hosted in this public demo repository. The free
standalone example remains at `free/`.

Product illustrations are inline SVG created for this demo. There are no external
image or font requests. The basket, delivery threshold and promotional code are
simulated and do not create orders or apply real discounts.

## Screenshot shot list

Use a desktop viewport around 1440 × 1000 at 100% browser zoom. Capture actual
rendered UI; do not add fake particles or claim the React example is running.

1. **delightkit-overview**: hero and top of the shopping section. Show the two
   implementation badges and product cards.
2. **delightkit-add-to-cart-confetti**: shopping section; click the case’s Add to
   basket button and capture roughly 0.7 seconds later.
3. **delightkit-wishlist-burst**: shopping section; save the tote using its heart
   and capture roughly 0.7 seconds later.
4. **delightkit-ambient-effects**: seasonal promo section with ambient motion on.
5. **delightkit-free-delivery-unlocked**: reset the basket, then add one case and
   one tote (£63). Capture the visible free-delivery reward.
6. **delightkit-vanilla-js**: Vanilla JavaScript panel including its label, working
   helper example and link to the standalone free demo.
7. **delightkit-react-typescript**: React panel, keeping the integration-example
   explanation visible.
8. **delightkit-whats-included**: full-kit feature grid.

Use the ambient pause button when you need to inspect a still composition. When
reduced motion is enabled, actions still update basket and wishlist state, but
confetti is suppressed. Do not disable that preference for visitors.

## Suggested listing copy

### Short description

Ecommerce microinteractions with standalone Vanilla JavaScript examples and
optional React + TypeScript components. Includes celebration bursts, wishlist
feedback, milestone unlocks and ambient confetti.

### Description introduction

DelightKit adds visual feedback to everyday ecommerce actions: adding a product
to a basket, saving a favourite, reaching a delivery threshold or discovering a
promotional reward.

Two implementations are available in the full kit: framework-free Vanilla
JavaScript examples and optional React + TypeScript components for React
projects. The public showcase runs on Vanilla JavaScript; its React section shows
an integration example. Editable CSS and reduced-motion support help the effects
fit your storefront.

### Requirements

- A modern browser with JavaScript enabled for the interactions.
- Include the relevant JavaScript and CSS in your site.
- React is needed only for the optional React components. Use the purchased
  package documentation for its exact supported versions and integration steps.

### Reviewer note — use after uploading screenshots

Updated the demo and listing screenshots to show the effects in ecommerce
contexts: product cards, wishlist controls, a basket with a free-delivery
milestone, and a seasonal promotion. The page explicitly labels the live Vanilla
JavaScript demos and distinguishes them from the optional React + TypeScript
integration example.

Confirm all paid-bundle contents, licence terms and version requirements against
the ZIP before resubmitting. This repo contains the public showcase and free demo,
not the paid package.
