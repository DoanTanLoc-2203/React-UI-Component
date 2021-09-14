/** @format */

import React from "react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
};

/* Size button */
export const Size = () => (
  <div>
    <Button size="xs">Button</Button>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
    <Button size="xl">Button</Button>
  </div>
);

/* Color */
export const Color = () => (
  <div>
    <Button size="lg" bgColor="default">
      Button
    </Button>
    <Button size="lg" bgColor="primary">
      Button
    </Button>
    <Button size="lg" bgColor="success">
      Button
    </Button>
    <Button size="lg" bgColor="info">
      Button
    </Button>
    <Button size="lg" bgColor="warning">
      Button
    </Button>
    <Button size="lg" bgColor="danger">
      Button
    </Button>
  </div>
);

/* Variant */
export const Variant = () => (
  <div>
    <Button size="lg" bgColor="primary" variant="solid">
      Button
    </Button>
    <Button size="lg" bgColor="primary" variant="outline">
      Button
    </Button>
    <Button size="lg" bgColor="primary" variant="ghost">
      Button
    </Button>
    <Button size="lg" bgColor="primary" variant="link">
      Button
    </Button>
  </div>
);

export const OnClick = () => {
  return (
    <div>
      <Button
        size="lg"
        bgColor="primary"
        variant="solid"
        onClick={() => {
          alert("Your just clicked!");
        }}>
        Button
      </Button>
    </div>
  );
};
