> **Disclaimer**: This template is still in Development.

<div align="center">
    <img align="center" alt="BRACKETS logo" src="./template/app/assets/img/logo.png"/>
</div>

<h3 align="center">React Native Brackets template</h3>

<p align="center">
 Backets template to boost React Native projects.
</p>

## Preconfigured with

- Typescript
- [React Navigation](https://reactnavigation.org/) (v5) for navigation
  - stacks
  - bottom tabs
  - also icludes `NavigationService` for navigating outside react components
- [react-native-config](https://github.com/luggit/react-native-config) to manage
separate environments (dev, staging, production).
- [Mobx](https://mobx.js.org/) for state management
- [lingui](https://github.com/lingui/js-lingui) for translations
- UI kit
  - [react-native-styled.macro](https://github.com/z0al/react-native-styled.macro) - [tailwind css](https://tailwindcss.com/) like library for styling react native apps
  - [React Native Elements](https://reactnativeelements.com/docs)
  - examples of Button & Typography components
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- [Expo unimodules](https://docs.expo.io/)
- handy npm scripts.

## TODOS

- [x] UI kit
- [ ] Reactron
- [ ] error boundary  
- [ ] no network info panel
- [ ] eslint & husky
- [ ] fastlane
- [ ] version (branch) with graphql ?
- [ ] force update screen ?
- [ ] [webp image support ?](https://github.com/Aleksefo/react-native-webp-format#readme)

## Getting started

<p>Create a new project using the template.</p>

```
npx react-native init MyApp --template react-native-template-brackets
```

## Recommended Libraries

<p>Good libraries to install when needed.</p>

- [urql](https://formidable.com/open-source/urql/docs/) fro graphql instead of apollo client
- [react-native-notifier](https://github.com/seniv/react-native-notifier) for fast and simple in-app notifications
