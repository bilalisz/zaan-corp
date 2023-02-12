import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  const { variant, text } = props;
  return (
    <Button variant={variant} {...props}>
      {text}
    </Button>
  );
};

CustomButton.defaultProps = {
  variant: "contained",
};

export default CustomButton;
