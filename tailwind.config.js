/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                poncho: {
                    cyan: '#0072BB',
                    success: '#2E7D33',
                    'success-dark': '#1B5E20',
                    'bg-light': '#F8F9FA',
                    'text-main': '#333333',
                    alert: '#EAF7FA',
                    footer: '#1A2B3C',
                },
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            keyframes: {
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateY(-50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                slideIn: 'slideIn 0.3s ease-out',
            },
        },
    },
    plugins: [],
}
