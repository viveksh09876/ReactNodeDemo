import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr } from './../../../../Utils';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
};


describe('Header Component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('it should render without errors', () => {
        
        const wrapper = findByAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render logo without errors', () => {
        
        const wrapper = findByAttr(component, 'logoWrap');
        expect(wrapper.length).toBe(1);
    });
})

