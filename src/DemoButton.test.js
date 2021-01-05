import DemoButton from "./DemoButton";
import {shallow} from "enzyme";

test('Testing Mock Function', () =>{
    let mockFunction = jest.fn();
    let wrapper = shallow(<DemoButton demoFunc={mockFunction}/>);
    (new Array(10).fill(0)).forEach(x => {
        wrapper.simulate('click');
    });
    const counter = mockFunction.mock.calls.length;
    expect(counter).toBe(10);
});

