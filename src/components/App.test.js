import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let app = shallow(<App />);

  it("should render a header", () => {
    // console.log(app.debug());
    expect(app.find("h2").text()).toEqual("Flashcard Pro");
  });

  it("should render stack list", () => {
    expect(app.find("Connect(StackList)").exists()).toBe(true);
  });

  it("should contain a link to create new stack", () => {
    expect(app.find("Link h4").text()).toEqual("Create a New Stack");
  });
});
