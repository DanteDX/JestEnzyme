import { Async } from "./Async";
jest.mock("./RealAsync");

test('mocking test',async () =>{
    expect(await Async()).toBe('piyal');
})
