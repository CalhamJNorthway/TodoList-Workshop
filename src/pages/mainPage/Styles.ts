import { makeStyles, Theme, useTheme } from "@material-ui/core";

/**
 * makeStyles((theme: Theme) => ({
 *  ...styles
 * }));
 * 
 * is the same as
 * 
 * makeStyles((theme: Theme) => {
 *  return {
 *    ...styles
 *  }
 * });
 */

export const mainPageStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flex: 1,
  }
}));