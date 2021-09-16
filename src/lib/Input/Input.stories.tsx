import React from "react";
import { Input } from ".";
export default {
  title: "Input",
  component: Input,
};

export const Size = () => (
  <div
    style={{
      height: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
    <Input size="xs" placeholder="extra small size" />
    <Input size="sm" placeholder="small size" />
    <Input size="md" placeholder="medium size" />
    <Input size="lg" placeholder="large size" />
    <Input size="xl" placeholder="extra large size" />
  </div>
);

export const BackgroundColor = () => (
  <div
    style={{
      height: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
    <Input size="md" placeholder="text..." bgColor="default" />
    <Input size="md" placeholder="text..." bgColor="primary" />
    <Input size="md" placeholder="text..." bgColor="info" />
    <Input size="md" placeholder="text..." bgColor="success" />
    <Input size="md" placeholder="text.." bgColor="warning" />
    <Input size="md" placeholder="text..." bgColor="danger" />
  </div>
);

export const Variant = () => (
  <div
    style={{
      height: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
    <Input size="md" placeholder="large size" variant="outline" />
    <Input size="md" placeholder="large size" variant="filled" />
    <Input size="md" placeholder="large size" variant="unstyled" />
    <Input size="md" placeholder="large size" variant="flushed" />
  </div>
);

export const OnChange = () => (
  <div>
    <Input
      size="md"
      placeholder="text"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
      }}
    />
  </div>
);
