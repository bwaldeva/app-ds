# Material Symbols for React

A simple React component wrapper for Material Symbols on-top of [Ravindra Marella's npm package](https://github.com/marella/material-symbols) of Google's Material Symbols.

**Author:** [Bryan Waldeva](https://github.com/bwaldeva)

## Installation (npm)

```bash
npm install material-symbols-react
```

## Usage (JSX/TSX)

```TSX
import { MaterialSymbol } from "material-symbols-react";

export default function Component() {
  return (
    <MaterialSymbol symbol="home" />
  )
}

```

## Props

Refer to the [Google Material Symbols Documentation from Ravindra Marella](https://marella.me/material-symbols/demo/) for list of symbols (icons) and details on the effect of the props below.

| Prop        | Type (Typescript)                                | Notes                                                                                           |
| :---------- | :----------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| `symbol`    | `'10k' \| '10mp' \| ... \| 'zoom_out_map'`       | **Required**. Refer to Google Material Symbols Documentation.                                   |
| `styling`   | `outlined \| rounded \| sharp`                   | **Optional. Default `false`**.                                                                  |
| `filled`    | `boolean \| undefined`                           | **Optional. Default `false`**.                                                                  |
| `weight`    | `100 \| ... \| 700 \| undefined`                 | **Optional. Default `400`**.                                                                    |
| `grade`     | `-25 \| ... \| 100 \| undefined`                 | **Optional. Default `0`**.                                                                      |
| `size`      | `20 \| ... \| 48 \| undefined`                   | **Optional. Default `24`**. Refer to Optical Size in documentation.                             |
| `className` | `string \| undefined`                            | **Optional. Default `undefined`**. You can set any CSS className for additional styling.        |
| `ref`       | `React.ForwardRef<HTMLSpanElement> \| undefined` | **Optional. Default `undefined`**. Can forward a ref to the underlying span element.            |
| `...props`  | `... \| undefined`                               | **Optional. Default `undefined`**. Any additional component props applicable to a span element. |

## License

Material Symbols are created by [Google](https://github.com/google/material-design-icons/blob/master/LICENSE).
Ravindra Marella's NPM package of the Material Symbols is distributed with an [Apache 2.0 License](https://github.com/marella/material-symbols/blob/main/LICENSE)
This package is distributed with an [MIT License](https://github.com/bwaldeva/app-ds/blob/main/packages/material-symbols-react/LICENSE.txt).
