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

const Component = () => (
    <ActionBar>
        <button>Button 1</button>
        <button>Button 2</button>
    </ActionBar>
);
```

## Storybook

```sh
yarn install && yarn storybook
```