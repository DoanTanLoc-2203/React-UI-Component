import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { mount, shallow } from "enzyme";
import React from "react";
import { Input } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Default Input", () => {
  it("Default text", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.text()).toEqual("");
  });
  it("Default props", () => {
    const wrapper = mount(<Input />);
    expect(wrapper.prop("size")).toBe("md");
    expect(wrapper.prop("bgColor")).toBe("default");
    expect(wrapper.prop("variant")).toBe("outline");
    expect(wrapper.prop("placeholder")).toBe("");
  });
});

describe("Input size", () => {
  const size = ["xs", "sm", "md", "lg", "xl"];
  const sizepx = ["10px", "15px", "20px", "25px", "30px", "35px"];
  for (let i = 0; i < size.length; i++) {
    it("size = " + size[i] + " => fontsize = " + sizepx[i] + "px", () => {
      const wrapper = mount(<Input size={size[i]} />);
      expect(
        getComputedStyle(wrapper.getDOMNode()).getPropertyValue("font-size"),
      ).toBe(sizepx[i]);
    });
  }
});

describe("Input Change", () => {
  it("Test change event", () => {
    const onSearchMock = jest.fn();
    const input = mount(<Input onChange={onSearchMock} />);
    input.simulate("change");
    expect(onSearchMock).toBeCalled();
  });
});
