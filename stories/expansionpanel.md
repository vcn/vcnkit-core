# @vcnkit/core/ExpansionPanel

Panel component that can be expanded by clicking on the header.

### A simple expansion panel utilizing local state.

The basic Expansion Panel consists of a header and the content that should be displayed when the panel is expanded.

```jsx
import * as Panel from '@vcnkit/core/ExpansionPanel';

const SomeComponent = () => (
    <Panel.Panel>
        <Panel.Header>I am an Expansion Panel</Panel.Header>
        <Panel.Content>
            This will only be visible when the panel is expanded.
        </Panel.Content>
    </Panel.Panel>
)
```

The above code will render a panel that will toggle the expanded-state when the `Panel.Header` is clicked on or gets triggered by a keypress.

#### Setting the default state

The panel is collapsed by default, if you want it to be expanded by default you can simply pass the `initialExpanded`-prop to `Panel.Panel`.

```jsx
import * as Panel from '@vcnkit/core/ExpansionPanel';

const SomeComponent = () => (
    <Panel.Panel initialExpanded>
        <Panel.Header>I am an Expansion Panel</Panel.Header>
        <Panel.Content>
            This will only be visible when the panel is expanded.
        </Panel.Content>
    </Panel.Panel>
)
```

### Controlling the ExpansionPanel from another component or state manager

If you want to control the ExpansionPanel's `expanded` state from another component or a state manager like Redux, you need to provide an `onChange` handler to `Panel.Panel` and it will stop using local state. When a user clicks on the `Panel.Header` the `onChange` function will be called with the current expanded state. It is up to you to then change the value of the `expanded`-prop.


### Using a different component as icon

The `<Panel.Header>` component takes an optional `icon`-prop. The provided component will be used in place of the "Expand more"-arrow. In order to react to the current expanded state, you can use the `Panel.usePanel`-hook to retrieve it.

```jsx
import * as Panel from '@vcnkit/core/ExpansionPanel';

// Create a component to act as an icon.
const SomeOtherIcon = () => {
    const { expanded } = usePanel();
    return expanded ? <p>Expanded</p> : <p>Not expanded</p>;
};

// Inject our own icon into <ExpansionPanel.Header>
const SomeComponent = () => (
    <Panel.Panel initialExpanded>
        <Panel.Header icon={ <SomeOtherIcon /> }>I am an Expansion Panel</Panel.Header>
        <Panel.Content>
            This will only be visible when the panel is expanded.
        </Panel.Content>
    </Panel.Panel>    
);
```