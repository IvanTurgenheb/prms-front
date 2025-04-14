import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const wrapper = style({
  width: "100%",
  height: "100dvh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  zIndex: 10000,
});

export const modalWindow = style({
  display: "flex",
  flexDirection: "column",

  width: "800px",
  height: "max-content",
  maxHeight: "500px",
  //   overflowY: "auto",
  opacity: 0.95,
  borderRadius: 14,
  padding: 20,
  boxShadow: vars.shadow.basic,
  color: vars.color.brightText,
  backgroundColor: vars.color.mainDarker,
});

export const header = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "40px",
});

export const title = style({
  fontSize: vars.fontSizing.T2,
  marginRight: "auto",
  marginBottom: vars.spacing.medium,
  color: vars.color.brightText,
});

export const closeButton = style({
  fontSize: vars.fontSizing.T2,
  cursor: "pointer",
  marginTop: "-20px",
  ":hover": {
    opacity: 0.8,
  },
});

export const body = style({
  maxHeight: "400px",
  overflowY: "scroll",
  width: "100%",
});
