import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ActionBar from '../';

describe('ActionBar', () => {
    test('renders', () => {
        const tree = renderer.create(
            <ActionBar>
                <button>Button 1</button>
                <button>Button 2</button>
            </ActionBar>
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });
});
