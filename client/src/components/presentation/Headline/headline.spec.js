import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, checkProps } from './../../../../Utils';
import Headline from './index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
};

describe('Headline Component', () => {


    describe('check proptypes', () => {

        it('should not throw warning', () => {

            const props = {
                header: 'Test headline',
                desc: 'Test desc',
                tempArr: [{
                    fName: 'Test fname',
                    lName: 'Test lname',
                    email: 'Test email',
                    age: 23,
                    onlineStatus: true
                }]
            };

            const propsError = checkProps(Headline, props); 

            expect(propsError).toBeUndefined();

        });

    });

    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test headline',
                desc: 'Test desc'
            };

            wrapper = setUp(props);
        });

        it('it should render without errors', () => {
            const component = findByAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('should render h1', () => {
            const component = findByAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });

        it('should render description', () => {
            const component = findByAttr(wrapper, 'description');
            expect(component.length).toBe(1);
        });

    });

    describe('Have No Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('should not render', () => {
            const component = findByAttr(wrapper, 'HeaderComponent');
            expect(component.length).toBe(0);
        });
    });

});