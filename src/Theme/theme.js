import { createMuiTheme } from "@material-ui/core"
import { darkPurple, lightPurple, red } from "./colors";

export default createMuiTheme({
    palette: {
        primary: {
            main: darkPurple
        },
        secondary: {
            main: lightPurple
        },
        error: {
            main: red
        }
    }
});