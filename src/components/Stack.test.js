import React from "react";
import { shallow } from "enzyme";
import { Stack } from "./Stack";
import { stack } from "../data/fixtures";

let props = { stack };

describe("stack", () => {
  let stack = shallow(<Stack {...props} />);

  it("should render a link to home", () => {
    //console.log(stack.debug());
    expect(stack.find("Link h4").text()).toEqual("Home");
  });

  it("should render a title", () => {
    expect(stack.find("h3").text()).toEqual(props.stack.title);
  });

  it("should render a card component", () => {
    expect(stack.find("Card").exists()).toBe(true);
  });

  it("should render a single card", () => {
    expect(stack.find("Card").length).toEqual(props.stack.cards.length);
  });
});
