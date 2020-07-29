import theme from "@chakra-ui/core/dist/theme"

let mono = {
    ...theme,
    breakpoints: ["30em", "48em", "62em", "80em"],
    fonts: {
        heading: '"Avenir Next", sans-serif',
        body: "system-ui, sans-serif",
        mono: "Menlo, monospace",
    },

    colors: {
        ...theme.colors,
        green: "#48BB78",
        bacc: "#333333",
        soft: "#3b3b3b",
        text: "#eeeeee",
        gray: "gray",
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
    },
};
export default mono