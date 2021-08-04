import React from "react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools';


const breakpoints = createBreakpoints({
    sm: "0px",
    md: "426px",
    lg: "769px",
    xl: "1200px"
});

const theme = extendTheme({
    breakpoints
});

export default theme;
