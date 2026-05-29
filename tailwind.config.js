export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                ink: '#211A4D',
                paper: '#FFF9F2',
                saffron: '#FFC107',
                coral: '#FF5A3C',
                pink: '#BD2E8B',
                violet: '#5B2D91',
                blue: '#1D3FA3',
            },
            boxShadow: {
                glow: '0 20px 60px rgba(29, 63, 163, 0.14)',
            },
            backgroundImage: {
                'hero-radial': 'radial-gradient(circle at top left, rgba(255, 193, 7, 0.20), transparent 28%), radial-gradient(circle at 80% 0%, rgba(189, 46, 139, 0.16), transparent 24%), linear-gradient(180deg, rgba(255,249,242,0.98), rgba(255, 255, 255, 0.92))',
                palette: 'linear-gradient(90deg, #FFC107 0%, #FF5A3C 23%, #BD2E8B 49%, #5B2D91 75%, #1D3FA3 100%)',
            },
        },
    },
    plugins: [],
};
