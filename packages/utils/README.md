# TypeScript Utilities library

This library is part of [`@honzachalupa/common`](https://github.com/honzachalupa/common) monorepo.

## Installation

When using on client-side, you may need to add Node.js fallbacks in your Webpack config.

```
fallback: {
    stream: require.resolve("stream-browserify"),
    zlib: require.resolve("browserify-zlib"),
},
```

## Documentation

### App

`cleanObject(object: object)`\
`scrollToTop()`\
`scrollToRef(ref: RefObject<HTMLElement>)`

### Data

`groupObjectsBy(array: any[], key: string)`\
`fillStringVariables(string: string | number, variables: { [key: string]: string | number })`

### Formatting

`formatCurrency(value: number, currencyCode: TCurrencyCodes)`\
`formatPhoneNumber(phoneNumber: string)`

### Browser

`getBrowserLanguage(fallbackLanguage?: string)`
