import {shallow} from "enzyme";
import React from "react";
import Headline from "../Headline";
import checkPropTypes from "check-prop-types";

describe('Headline Testing',() =>{
    test('Headline First Testing',() =>{
        const component = shallow(<Headline />);
        const expectedProps = {
            name: "Shadman",
            age: 100
        };
        const propsError = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
        expect(propsError).toBeUndefined();
    })
});
