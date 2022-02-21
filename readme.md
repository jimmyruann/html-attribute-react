# HTML Attribute to React Attribute

## Note\*

This project is the TypeScript version of https://github.com/hatashiro/react-attr-converter

## Feature

- TypeScript support
- Translate `string, string[], Record<string, any>`

## How to use

```
import { translate } from "html-attribute-react";

translate('class'); // => 'className'
translate('for'); // => 'htmlFor'
translate('onclick'); // => 'onClick'
translate('onCLICK'); // => 'onClick'

translate([
    'class',
    'for',
    'onclick',
    'onCLICK'
]) // => ['className', 'htmlFor', 'onClick', 'onClick']


translate({
    class: "abcd",
    for: "#id",
    "data-test": "data",
    classID: 1,
}) // => { className: "abcd", htmlFor: "#id", "data-test": "data", classID: 1, }
```

## Bug

Please report them in [Issue](#).

Contribution are welcomed.

## License

[MIT](#)
