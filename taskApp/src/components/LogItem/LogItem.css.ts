import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const logItemWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",

  marginBottom: vars.spacing.big2,
  width: "100%",
  borderBottom: `1px solid ${vars.color.brightText}`,
  ":hover": {
    backgroundColor: vars.color.mainFadedBright,
    borderRadius: 10,
  },
});

export const message = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: vars.color.brightText,
  fontWeight: "bold",
  fontSize: vars.fontSizing.T4,
  marginBottom: vars.spacing.small,
});

export const author = style({
  display: "flex",
  alignItems: "center",
  columnGap: 10,
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
  fontWeight: "bold",
  marginBottom: vars.spacing.medium,
});

export const date = style({
  fontSize: vars.fontSizing.T4,
  fontWeight: "bold",
  marginBottom: vars.spacing.medium,
});
