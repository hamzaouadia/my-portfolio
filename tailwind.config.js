
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./index.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                bebas: ['Bebas Neue', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            fontSize: {
                '6xl': '6rem',
                '15xl': '15rem',
                '40xl': '40rem',
                '60xl': '60rem',
            }

        },
    },
    plugins: [],
}