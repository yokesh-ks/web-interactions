import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../common/Button";

const stories = storiesOf("Button", module);

stories.add("App", () => <Button />);
