import {shallow} from "enzyme";
import React from "react";
import App from "../App";

describe("First Test Header",() =>{
    let component;
    beforeEach(() =>{
        component = shallow(<App/>);
    })

    test('First Real Test',() =>{
        const wrapper = component.find(`[data-test="AppHeader"]`);
        expect(wrapper.length).toBe(1);
    })

    test('Second Real Test',() =>{
        const wrapper = component.find(`[data-test="AppParagraph"]`);
        expect(wrapper.length).toBe(1);
    })
});

describe("Second Test Header",() =>{
    let component;
    beforeEach(() =>{
        component = shallow(<App/>);
    })

    test('First Real Test',() =>{
        const wrapper = component.find(`[data-test="AppHeader"]`);
        expect(wrapper.length).toBe(1);
    })

    test('Second Real Test',() =>{
        const wrapper = component.find(`[data-test="AppParagraph"]`);
        expect(wrapper.length).toBe(1);
    })
});