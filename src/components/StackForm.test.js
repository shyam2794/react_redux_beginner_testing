import React from "react";
import { shallow } from "enzyme";
import { StackForm } from "./StackForm";

describe("StackForm", () => {
  let stackform = shallow(<StackForm />);

  it("should render a link to home", () => {
    // console.log(stackform.debug());
    expect(stackform.find("Link h4").text()).toEqual("Home");
  });

  it("should render a title", () => {
    expect(
      stackform
        .find("h4")
        .at(1)
        .text()
    ).toEqual("Create a New Stack");
  });

  it("should render a form", () => {
    expect(stackform.find("Form").exists()).toBe(true);
  });

  it("should render a Add card button", () => {
    expect(
      stackform
        .find("Button")
        .at(0)
        .props().children
    ).toEqual("Add Card");
  });

  it("should render Save and Add the Stack button", () => {
    expect(
      stackform
        .find("Button")
        .at(1)
        .props().children
    ).toEqual("Save and Add the Stack");
  });

  describe("Update the title", () => {
    let title = "My new stack";

    beforeEach(() => {
      stackform
        .find("FormControl")
        .at(0)
        .simulate("change", {
          target: {
            value: title
          }
        });
    });

    it("should update the title in state", () => {
      //console.log(stackform.state());
      expect(stackform.state().title).toEqual(title);
    });
  });

  describe("Add a new card", () => {
    beforeEach(() => {
      stackform
        .find("Button")
        .at(0)
        .simulate("click");
    });

    afterEach(() => {
      stackform.setState({ cards: [] });
    });

    it("should add a card in the cards array in state", () => {
      expect(stackform.state().cards.length).toEqual(1);
    });

    it("should render a Form Group", () => {
      //console.log(stackform.debug());
      expect(
        stackform
          .find("FormGroup")
          .at(1)
          .exists()
      ).toBe(true);
    });

    it("should render a prompt", () => {
      //console.log(stackform.debug());
      expect(
        stackform
          .find("ControlLabel")
          .at(1)
          .props().children
      ).toEqual("Prompt:");
    });

    it("should render a Answer", () => {
      //console.log(stackform.debug());
      expect(
        stackform
          .find("ControlLabel")
          .at(2)
          .props().children
      ).toEqual("Answer:");
    });

    describe("when adding a prompt", () => {
      beforeEach(() => {
        stackform
          .find("FormControl")
          .at(1)
          .simulate("change", { target: { value: "prompt1" } });
      });

      it("should add the prompt in the cards array at cards.prompt", () => {
        //console.log(stackform.state());
        expect(stackform.state().cards[0].prompt).toEqual("prompt1");
      });

      describe("when adding answer", () => {
        beforeEach(() => {
          stackform
            .find("FormControl")
            .at(2)
            .simulate("change", { target: { value: "Answer1" } });
        });

        it("should add the answer in the cards array at cards.prompt", () => {
          //console.log(stackform.state());
          expect(stackform.state().cards[0].answer).toEqual("Answer1");
        });
      });
    });
  });
});
