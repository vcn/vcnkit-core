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

## Storybook

```sh
yarn install && yarn storybook
```