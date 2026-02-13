/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gov-primary': '#0072BB',
                'gov-success': '#2E7D33',
                'gov-text': '#333333',
                'gov-text-secondary': '#666666',
                'gov-border': '#CCCCCC',
                'gov-bg': '#F8F9FA',
                'gov-callout': '#EAF7FA',
            },
            fontFamily: {
                'sans': ['Roboto', 'system-ui', 'sans-serif'],
            },
            minHeight: {
                'touch': '48px',
            },
            minWidth: {
                'touch': '48px',
            },
        },
    },
    plugins: [],
}
