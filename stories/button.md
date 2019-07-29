# @vcnkit/core/Button

A set of button variations which can be used as buttons or link-buttons.

### Basic usage

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

### Usage as a link-button

If you pass the `href`-prop, the button will render an `<a>`-tag.

```jsx
import * as Button from '@vcnkit/core/Button';

const Component = () => (
    <Button.Primary
        href="https://www.google.com"
        target="_blank"
        rel="nofollow"
    >
        Save
    </Button.Primary>
);
```

## Variations

### Button.Primary

This should be used for most buttons.

### Button.Destructive

Use this for destructive actions.