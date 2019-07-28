# @vcnkit/core/MessageBar

Variants of a bar to show important messages to the user.

### Basic usage

```jsx
import * as MessageBar from '@vcnkit/core/MessageBar';

const Component = () => (
    <MessageBar.Info>
        You are now using the MessageBar component.
    </MessageBar.Info>
);
```

### Variants

#### MessageBar.Message

Use this to display a normal message to the user.

#### MessageBar.Info

Use this to show a more noticable information message to the user.

#### MessageBar.Warning

This can be used to notify the user of a special condition or non-breaking error.

#### MessageBar.Error

Alert the user to a very important condition or serious error that will hinder the current workflow.

#### MessageBar.Experimental

Lets the user know the feature or page they are currently using is experimental and can be changed or removed at any moment.