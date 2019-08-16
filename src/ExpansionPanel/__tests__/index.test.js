import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import * as Panel from '../';

afterEach(cleanup);

describe('ExpansionPanel', () => {
    test('Panel renders', () => {
        const { asFragment } = render(
            <Panel.Panel>
                <Panel.Header>Header</Panel.Header>
                <Panel.Content>Content</Panel.Content>
            </Panel.Panel>           
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test('Panel renders with custom icon', () => {
        const CustomIcon = () => <p>CustomIcon</p>;

        const { getByText, asFragment } = render(
            <Panel.Panel>
                <Panel.Header icon={ <CustomIcon /> }>Header</Panel.Header>
                <Panel.Content>Content</Panel.Content>
            </Panel.Panel>       
        );

        expect(getByText('CustomIcon')).toHaveTextContent('CustomIcon');
        expect(asFragment()).toMatchSnapshot();
    });

    test('Panel expands and collapses with local state', async () => {
        const { getByText } = render(
            <Panel.Panel>
                <Panel.Header>Header</Panel.Header>
                <Panel.Content>
                    <p>Child</p>
                </Panel.Content>
            </Panel.Panel>           
        );

        fireEvent.click(getByText('Header'));

        const node = await waitForElement(() => getByText('Child'));
        expect(node).toHaveTextContent('Child');
    });

    test('Panel expands and collapsed with prop', () => {
        const { queryByText, rerender } = render(
            <Panel.Panel expanded={ false }>
                <Panel.Header>Header</Panel.Header>
                <Panel.Content>Content</Panel.Content>
            </Panel.Panel> 
        );

        expect(queryByText('Content')).not.toBeInTheDocument();

        rerender(
            <Panel.Panel expanded>
                <Panel.Header>Header</Panel.Header>
                <Panel.Content>Content</Panel.Content>
            </Panel.Panel> 
        );

        expect(queryByText('Content')).toBeInTheDocument();
    });
});