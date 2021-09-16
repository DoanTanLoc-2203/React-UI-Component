import React from "react";
import { Input } from ".";
export default {
  title: "Input",
  component: Input,
};

export const Size = () => (
  <div>
    <Input size="xs" placeholder="extra small size" />
    <Input size="sm" placeholder="extra small size" />
    <Input size="md" placeholder="extra small size" />
    <Input size="lg" />
    <Input size="xl" />
  </div>
);
