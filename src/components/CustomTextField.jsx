import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomIcon from "./CustomIcon";

const NewTextField = (props) => {
  const {
    id,
    name,
    value,
    onChange,
    labelText,
    size,
    fullWidth,
    borderRadius,
    sx,
    styleCnt,
    type,
  } = props;

  const classes = useStyle();

  return (
    <Box className={classes.container} style={styleCnt}>
      <TextField
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        size={size}
        fullWidth={fullWidth}
        type="text"
        sx={{
          ...sx,

          "& .MuiOutlinedInput-root": {
            borderRadius,
          },
        }}
        {...props}
      />
    </Box>
  );
};
NewTextField.defaultProps = {
  id: "text-field",
  onChange: () => {},
  size: "small",
  fullWidth: true,
  borderRadius: 1,
  type: "text",
};

export default NewTextField;
const useStyle = makeStyles({
  container: {
    width: "100%",
    margin: 5,
    position: "relative !important",
  },
  icon: {
    position: "absolute",
    top: "50%",
    right: "3%",
    transform: "translateY(-0%) ",
  },
});
