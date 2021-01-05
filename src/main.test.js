import {shallow} from "enzyme";
import App from "./App";
import Sample from "./Sample";
import store from "./store";

describe('Testing Connected components',() =>{
    test('Testing App Component',() =>{
        const wrapper = shallow(<App />);
        expect(wrapper.length).toBe(1);
    })

    test("Testing Sample Component",() =>{
        const wrapper = shallow(<Sample store={store} />).childAt(0).dive();
        // console.log(wrapper.debug());
        const g = wrapper.find(".sample");
        expect(g.length).toBe(1);
    })
})

