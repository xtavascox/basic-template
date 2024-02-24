/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter'],
            },
            colors: {
                'coral-red': {
                    '50': '#fef4f1',
                    '100': '#fee7e1',
                    '200': '#ffcfc7',
                    '300': '#feada4',
                    '400': '#fa7770',
                    '500': '#f34f4f',
                    '600': '#e0242e',
                    '700': '#be1929',
                    '800': '#9a192c',
                    '900': '#821c30',
                    '950': '#440918',
                },
                'silver': {
                    '50': '#f7f7f7',
                    '100': '#f0f0f0',
                    '200': '#e3e3e3',
                    '300': '#d1d1d1',
                    '400': '#c2c2c2',
                    '500': '#aaaaaa',
                    '600': '#969696',
                    '700': '#818181',
                    '800': '#6a6a6a',
                    '900': '#585858',
                    '950': '#333333',
                },
            },
        },
    },
    plugins: [],
}

