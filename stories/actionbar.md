# @vcnkit/core/ActionBar

Container for one or more buttons in a component. This container will apply the appropriate spacing between and around it's children.

### Basic usage

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