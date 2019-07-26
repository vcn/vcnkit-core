import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import 'jest-styled-components';

import * as Button from '../';

describe('Button', () => {
    test('Primary button renders', () => {
        const tree = renderer.create(
            <Button.Primary
                onClick={ () =>{} }
            >
                PrimaryButton
            </Button.Primary>
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule('color', '#5282B5');
    });
    
    test('Destructive button renders', () => {
        const tree = renderer.create(
            <Button.Destructive
                onClick={ () =>{} }
            >
                DestructiveButton
            </Button.Destructive>
        ).toJSON();
    
        expect(tree).toMatchSnapshot();    
        expect(tree).toHaveStyleRule('color', '#E53935');
    });
    
    test('Calls click-handler when clicked', () => {
        const handleClick = jest.fn();

        const button = mount(
            <Button.Primary
                onClick={ handleClick }
            >
                PrimaryButton
            </Button.Primary>
        );

        button.find('button').getDOMNode().dispatchEvent(new MouseEvent('click'));
        expect(handleClick.mock.calls.length).toEqual(0);
    });

    test('Does not call click-handler when disabled', () => {
        const handleClick = jest.fn();

        const button = mount(
            <Button.Primary
                onClick={ handleClick }
                disabled
            >
                PrimaryButton
            </Button.Primary>
        );

        button.find('button').getDOMNode().dispatchEvent(new MouseEvent('click'));
        expect(handleClick.mock.calls.length).toEqual(0);
    });

    test('Renders a link', () => {
        const href = 'https://www.google.com';
        const target = '_blank';
        const rel = 'nofollow';
    
        const button = mount(
            <Button.Primary
                href={ href }
                target={ target }
                rel={ rel }
            >
                PrimaryButton
            </Button.Primary>
        );
    
        const domNode = button.getDOMNode();
    
        expect(domNode.tagName).toBe('A');
        expect(domNode.getAttribute('href')).toBe(href);
        expect(domNode.getAttribute('target')).toBe(target);
        expect(domNode.getAttribute('rel')).toBe(rel);
    });
});
