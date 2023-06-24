import { createTheme, responsiveFontSizes } from "@mui/material";
import { red } from "@mui/material/colors";

let theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Indie Flower", cursive',
            '"Public Sans", sans-serif',
        ].join(','),
    },
});

theme = responsiveFontSizes(theme);

export default theme;