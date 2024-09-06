/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5b56eb',
                "primary-accent": '#601993',
                background: "#0f1011",
                secondary: '#161718',
                accent: '#1d1e1f',
                muted: '#959ca7'
            },
            boxShadow: {
                card: '0 0 10px rgba(113,113,133,0.5)',
                "card-inset": "inset 0 0 10px rgba(113,113,133,0.5)"
            },
            keyframes: {
                slide: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            },
            animation: {
                'slide-logo': 'slide 35s linear infinite'
            },
            backgroundImage: {
                invite: "url('./assets/background3.png')",
                message: "url('./assets/background2.png')",
                summary: "url('./assets/background1.png')"
            }
        },
    },
    plugins: [],
}