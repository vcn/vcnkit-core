# VCNKit/Core

Core UI components for VCNKit.

## Installation

NPM

```sh
npm install @vcnkit/core
```

Yarn

```sh
yarn add @vcnkit/core
```

## Usage

### ThemeProvider

```jsx
import { ThemeProvider } from '@vcnkit/core';

const App = () => (
    <ThemeProvider
        theme={ themeOverrides }
    >
        <YourApp />
    </ThemeProvider>
);
```

### Button

```jsx
import * as Button from '@vcnkit/core/Button';

const Component = () => (
    <Button.Primary
        onClick={ handleClick }
    >
        Save
    </Button.Primary>
);
```

### ActionBar

```jsx
import ActionBar from '@vcnkit/core/ActionBar';
import * as Button from '@vcnkit/core/Button';

const Component = () => (
    <ActionBar>
        <Button.Primary>Button 1</Button.Primary>
        <Button.Primary>Button 2</Button.Primary>
    </ActionBar>
);
```

### Icons

```jsx
import { Info, Flask } from '@vcnkit/core/Icons';

const Component = () => (
    <>
        <Info />
        <Flash />
    </>
);
```

### MessageBar

```jsx
import * as MessageBar from '@vcnkit/core/MessageBar';

const Component = () => (
    <MessageBar.Info>
        You are now using the MessageBar component.
    </MessageBar.Info>
);
```

## Storybook

```sh
yarn install && yarn storybook
```

# License

This library is licensed under the terms of the [MIT license](/LICENSE).
 
Google Material Design Icons - [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)

Material Design Community Icons - [SIL Open Font License 1.1](https://spdx.org/licenses/OFL-1.1.html)

Twemoji - [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)