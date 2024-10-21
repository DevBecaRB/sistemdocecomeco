import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';

export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            branco: {
                100: "#fcfcfc",
                200: "#f9f9f9",
                300: "#f5f5f5",
                400: "#f2f2f2",
                500: "#efefef",
                600: "#bfbfbf",
                700: "#8f8f8f",
                800: "#606060",
                900: "#303030"
            },
            preto: {
                100: "#d4d5d5",
                200: "#a9abab",
                300: "#7f8081",
                400: "#545657",
                500: "#292c2d",
                600: "#212324",
                700: "#191a1b",
                800: "#101212",
                900: "#080909"
            },
            azulClaro: {
                100: "#dbf2f2",
                200: "#b8e5e5",
                300: "#94d7d9",
                400: "#71cacc",
                500: "#4dbdbf",
                600: "#3e9799",
                700: "#2e7173",
                800: "#1f4c4c",
                900: "#0f2626"
            }, // blue
            azulEscuro: {
                100: "#d4dde4",
                200: "#a8bbc9",
                300: "#7d98af",
                400: "#517694",
                500: "#265479",
                600: "#1e4361",
                700: "#173249",
                800: "#0f2230",
                900: "#081118"
            }, // blue dark
            amarelo: {
                100: "#fef4d5",
                200: "#fde9ab",
                300: "#fcde80",
                400: "#fbd356",
                500: "#fac82c",
                600: "#c8a023",
                700: "#96781a",
                800: "#645012",
                900: "#322809"
            }, // yellow
            laranja: {
                100: "#fce3d8",
                200: "#f8c7b1",
                300: "#f5ab89",
                400: "#f18f62",
                500: "#ee733b",
                600: "#be5c2f",
                700: "#8f4523",
                800: "#5f2e18",
                900: "#30170c"
            }, // orange
            cinza: {
                100: "#e3e3e3",
                200: "#c8c8c8",
                300: "#acacac",
                400: "#919191",
                500: "#757575",
                600: "#5e5e5e",
                700: "#464646",
                800: "#2f2f2f",
                900: "#171717"
            }, // cinza
            vermelho: {
                100: "#f9d4d2",
                200: "#f3a9a6",
                300: "#ec7e79",
                400: "#e6534d",
                500: "#e02820",
                600: "#b3201a",
                700: "#861813",
                800: "#5a100d",
                900: "#2d0806"
            }, //red
        }
    : {
        branco: {
            100: "#303030",
            200: "#606060",
            300: "#8f8f8f",
            400: "#bfbfbf",
            500: "#efefef",
            600: "#f2f2f2",
            700: "#f5f5f5",
            800: "#f9f9f9",
            900: "#fcfcfc"
        },
        preto: {
            100: "#080909",
            200: "#101212",
            300: "#191a1b",
            400: "#212324",
            500: "#292c2d",
            600: "#545657",
            700: "#7f8081",
            800: "#a9abab",
            900: "#d4d5d5"
        },
        azulClaro: {
            100: "#0f2626",
            200: "#1f4c4c",
            300: "#2e7173",
            400: "#3e9799",
            500: "#4dbdbf",
            600: "#71cacc",
            700: "#94d7d9",
            800: "#b8e5e5",
            900: "#dbf2f2"
        }, // blue
        azulEscuro: {
            100: "#081118",
            200: "#0f2230",
            300: "#173249",
            400: "#1e4361",
            500: "#265479",
            600: "#517694",
            700: "#7d98af",
            800: "#a8bbc9",
            900: "#d4dde4"
        }, // blue dark
        amarelo: {
            100: "#322809",
            200: "#645012",
            300: "#96781a",
            400: "#c8a023",
            500: "#fac82c",
            600: "#fbd356",
            700: "#fcde80",
            800: "#fde9ab",
            900: "#fef4d5"
        }, // yellow
        laranja: {
            100: "#30170c",
            200: "#5f2e18",
            300: "#8f4523",
            400: "#be5c2f",
            500: "#ee733b",
            600: "#f18f62",
            700: "#f5ab89",
            800: "#f8c7b1",
            900: "#fce3d8"
        }, // orange
        cinza: {
            100: "#171717",
            200: "#2f2f2f",
            300: "#464646",
            400: "#5e5e5e",
            500: "#757575",
            600: "#919191",
            700: "#acacac",
            800: "#c8c8c8",
            900: "#e3e3e3"
        }, // cinza
        vermelho: {
            100: "#2d0806",
            200: "#5a100d",
            300: "#861813",
            400: "#b3201a",
            500: "#e02820",
            600: "#e6534d",
            700: "#ec7e79",
            800: "#f3a9a6",
            900: "#f9d4d2"
        }, //red
    }),
});

export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return{
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.azulEscuro[500],
                        light: colors.azulClaro[500],
                    },
                    secundary: {
                        main: colors.amarelo[500],
                    },
                    laranja: {
                        main: colors.laranja[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    brackgroud: {
                        default: colors.azulEscuro[500],
                    }
                } : {
                    primary: {
                        main: colors.azulEscuro[500],
                        light: colors.azulClaro[500],
                    },
                    secundary: {
                        main: colors.amarelo[500],
                    },
                    laranja: {
                        main: colors.laranja[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    brackgroud: {
                        default: colors.branco[500],
                    },
                }
            ),
        },
        typography: {
            fontFamily:  ["Montserrar", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Montserrar", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Montserrar", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Montserrar", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Montserrar", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Montserrar", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Montserrar", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

//context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}