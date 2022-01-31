# Common monorepo

### Project Status

This project is in development phase and it's not ready for production use.
Thank you.

#### Installation

`yarn install`\
`yarn husky install`

#### Lint

`yarn lint`

#### Test

`yarn test`

#### Build

`yarn build`

#### Run Storybook

`yarn storybook:watch`

### Resources

[Changelog](https://github.com/honzachalupa/common/blob/master/CHANGELOG.md)

---

# React UI library

This library is part of [`@honzachalupa/common`](https://github.com/honzachalupa/common) monorepo.

### Examples

[Storybook](https://master--61f6de08e97ef3003afa0396.chromatic.com)\
[Chromatic library](https://chromatic.com/library?appId=61f6de08e97ef3003afa0396&branch=master)


---

# TypeScript Utilities library

This library is part of [`@honzachalupa/common`](https://github.com/honzachalupa/common) monorepo.

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

