import {shallow} from "enzyme";
import CC from "./CC";

describe('Testing Methods of CC class component', () =>{
    let wrapper;
    let newInstance;
    beforeEach(() =>{
        wrapper = shallow(<CC />);
        newInstance = wrapper.instance(false);
    })
    test('Testing NewState Method', () =>{
        newInstance.NewState();
        expect(newInstance.state.check).toBe(true);
    });

    test('Testing Another Method', () =>{
        expect(newInstance.Another(3)).toEqual(4);
    })
})