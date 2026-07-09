# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

A pack of Gravity UI icons. Icons have two sources, SVG and React. Have a look at [showcase](https://preview.gravity-ui.com/icons/) page.

## Install

```shell
npm install --save-dev @gravity-ui/icons
```

## Usage

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

or

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> You might need an appropriate loader for this

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## For AI agents

The official SVG icon set for Gravity UI, shipped as both React components and raw `.svg` files for use with `@gravity-ui/uikit`'s `Icon` renderer.

### When to use

- You need an icon inside a Gravity UI app and want a consistent, ready-made set.
- Rendering an icon via uikit: import the icon component here and pass it to uikit's `Icon` through its `data` prop.
- You need the raw `.svg` asset (e.g. for CSS `background-image` or a build-time SVG loader) rather than a React component.

### When not to use

- Rendering the icon on screen — this package only provides the glyphs; the actual renderer (sizing, color, a11y) is the `Icon` component from [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- You need a custom or brand icon that is not in the set — import your own SVG and pass it to uikit's `Icon`; do not expect it to live here.

### Common pitfalls

- **Icons are passed as data, not by name.** Do `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} />` — there is no `<Icon name="gear" />` API, and this package exports no `<Icon>` component of its own.
- **Import path matters for tree-shaking.** `import Cloud from '@gravity-ui/icons/Cloud'` pulls a single icon; `import {Cloud} from '@gravity-ui/icons'` works too but relies on the bundler to tree-shake the barrel.
- **SVG imports need a loader.** `import icon from '@gravity-ui/icons/svgs/cloud.svg'` only works if your bundler is configured to handle `.svg` files.
- **Size and color come from the renderer.** Set `size` on uikit's `Icon` and control color with `color`/CSS `currentColor`; the SVGs themselves carry no fixed color.
