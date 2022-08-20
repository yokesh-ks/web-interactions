import React from "react";
// import { storiesOf } from "@storybook/react";
import { Button } from "../common/Button";

// const stories = storiesOf("Button", module);

// stories.add("App", () => <Button />);

const Template = (args) => <Button {...args} />;

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

export const Red = Template.bind({});
Red.args = {
  label: "Press Me",
  size: "md",
};
