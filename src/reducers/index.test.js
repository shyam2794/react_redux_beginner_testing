import rootReducer from "./index";
import * as actions from "../actions";
import { stack, stacks } from "../data/fixtures";

describe("root Reducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: [] });
  });

  it("should set the stack in the reducer", () => {
    expect(rootReducer({}, { type: actions.SET_STACK, stack })).toEqual({
      stack,
      stacks: []
    });
  });

  it("should load stacks in the reducer", () => {
    expect(rootReducer({}, { type: actions.LOAD_STACKS, stacks })).toEqual({
      stack: {},
      stacks
    });
  });

  it("should add a stack in the list", () => {
    expect(rootReducer({}, { type: actions.ADD_STACK, stack })).toEqual({
      stack: {},
      stacks: [stack]
    });
  });
});
