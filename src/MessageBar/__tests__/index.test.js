import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import 'jest-styled-components';

import * as Button from '../../Button';
import { Feedback } from '../../Icons';
import * as MessageBar from '../';

describe('MessageBar', () => {
    test('Normal message renders correctly', () => {
        const tree = renderer.create(
            <MessageBar.Message>
                MessageMessageBar
            </MessageBar.Message>
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });
    
    test('Info message renders correctly', () => {
        const tree = renderer.create(
            <MessageBar.Info>
                InfoMessageBar
            </MessageBar.Info>
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Warning message renders correctly', () => {
        const tree = renderer.create(
            <MessageBar.Warning>
                WarningMessageBar
            </MessageBar.Warning>
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Error message renders correctly', () => {
        const tree = renderer.create(
            <MessageBar.Error>
                ErrorMessageBar
            </MessageBar.Error>
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Experimental message renders correctly', () => {
        const tree = renderer.create(
            <MessageBar.Experimental>
                ExperimentalMessageBar
            </MessageBar.Experimental>
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly with a different icon', () => {   
        const messageBar = mount(
            <MessageBar.Message
                icon={ <Feedback /> }
            >
                MessageMessageBar
            </MessageBar.Message>           
        );

        expect(messageBar.find(Feedback).length).toBe(1);
    });

    test('Renders correctly with an action', () => {
        const messageBar = mount(
            <MessageBar.Message
                actions={ <Button.Primary>Test</Button.Primary> }
            >
                MessageMessageBar
            </MessageBar.Message>           
        );

        expect(messageBar.find(Button.Primary).length).toBe(1);
    });
});
