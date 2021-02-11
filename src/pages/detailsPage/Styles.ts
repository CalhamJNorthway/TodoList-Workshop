import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";


export const makeDetailPageStyles = makeStyles(() => ({
    mainPaper: {
        display: "flex",
        minHeight: 500,
        minWidth: 800,
        padding: 20,
    },
}));

export const makeDetailFormStyles = makeStyles(() => ({
    header: {
        display: "flex",
        padding: 0,
    },
    headerLeft: {
        flex: 1,
        padding: 0,
        display: "flex",
        flexDirection: "row",
    },
    headerRight: {
        flex: 1,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
}));