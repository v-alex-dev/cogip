/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        `./src/**/*.{js,ts,jsx,tsx,mdx}`,


    ],
    theme: {
        fontFamily: {
            'roboto': ['Roboto', "sans-serif"],
            'assistant': ['Assistant', 'sans-serif'],
            'inter': ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                'yellow': '#F9DE4E',
                'green-blue':'#6dafa7',
                'lavande': '#9698D6',
                'bg-dashboard': '#f5f5fb',
                'violet': '#4d4cac',
                'pink': '#ff808b'
            },
            backgroundImage: {
                'rect-17': "url('/src/assets/rect-17.svg')",
            }
        },
    },
    plugins: [],
}

