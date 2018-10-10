import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
import { card } from "../data/fixtures";

let props = { card };

describe("card", () => {
  let card = shallow(<Card {...props} />);

  it("should render the prompt", () => {
    //console.log(card.debug());
    expect(
      card
        .find("h4")
        .at(0)
        .text()
    ).toEqual(props.card.prompt);
  });

  it("should render the prompt", () => {
    //console.log(card.debug());
    expect(
      card
        .find("h4")
        .at(1)
        .props().className
    ).toEqual("text-hidden");
  });

  describe("should reveal the answer", () => {
    beforeEach(() => {
      card
        .find("div")
        .at(0)
        .simulate("click");
    });

    it("should change the state reveal to true", () => {
      console.log(card.debug());
      expect(card.state().reveal).toBe(true);
    });

    it("should attach the class text-revealed", () => {
      expect(
        card
          .find("h4")
          .at(1)
          .props().className
      ).toEqual("text-revealed");
    });
  });
});
