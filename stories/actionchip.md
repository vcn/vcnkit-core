# @vcnkit/core/ActionChip

Chip to execute a specific action.

### Basic usage

```jsx
import ActionChip from '@vcnkit/core/ActionChip';

const Component = () => (
    <ActionChip
        onClick={ handleClick }
    >
        Power off
    </ActionChip>
);
```

### Icon

The chip can display an icon, any component that renders an SVG that gets passed to the `icon`-prop will be rendered at the front of the chip.

```jsx
import ActionChip from '@vcnkit/core/ActionChip';
import * as Icons from '@vcnkit/core/Icons';

const Component = () => (
    <ActionChip
        icon={ <Icons.PowerSettingsNew /> }
        onClick={ handleClick }
    >
        Power off
    </ActionChip>
);
```

### Loading indicator

By setting the `loading`-prop to true, a loading indicator will be displayed on the chip and any actions untill loading is complete will be prevented.

```jsx
import ActionChip from '@vcnkit/core/ActionChip';
import * as Icons from '@vcnkit/core/Icons';

const Component = () => (
    <ActionChip
        icon={ <Icons.PowerSettingsNew /> }
        onClick={ handleClick }
        loading
    >
        Powering off
    </ActionChip>
);
```