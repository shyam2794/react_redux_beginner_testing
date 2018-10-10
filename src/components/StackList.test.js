import React from "react";
import { shallow } from "enzyme";
import { StackList } from "./StackList";
import { stacks } from "../data/fixtures";

let props = { stacks };

describe("StackList", () => {
  let stacklist = shallow(<StackList {...props} />);

  it("should render a link with stack title", () => {
    //console.log(stacklist.debug());
    expect(
      stacklist
        .find("Link h4")
        .at(0)
        .text()
    ).toEqual(props.stacks[0].title);
  });

  it("should render list of links", () => {
    expect(stacklist.find("Link").length).toEqual(props.stacks.length);
  });
});
