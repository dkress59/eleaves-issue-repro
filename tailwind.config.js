// eslint-disable-next-line @typescript-eslint/no-var-requires
//const defaultTheme = require('tailwindcss/defaultTheme')

const customSizes = {
	25: '6.25rem', // 100px
	50: '12.5rem', // 200px
	65: '16.25rem', // 260px
	90: '22.5rem', // 360px
	100: '25rem', // 400px
	105: '26.25rem', // 420px
	135: '33.75rem', // 540px
	160: '40rem', // 640px
	190: '47.5rem', // 760px
	290: '72.5rem', // 1160px
	512: '128rem', // 2048px
}

const customSpacing = {
	xs: '0.6125rem', // 10px (2.5)
	sm: '1.25rem', // 20px (5)
	md: '2.5rem', // 40px (10)
	lg: '3.75rem', // 60px (15)
	xl: '6.25rem', // 100px (25)
}

module.exports = {
	content: ['**/src/**/*.{html,scss,ts,tsx}'],
	theme: {
		colors: {
			black: '#434548',
			blue: '#246291', // e-rezept
			current: 'currentColor',
			grey: {
				light: '#E8E8E8',
				dark: '#53565A',
			},
			green: {
				DEFAULT: '#56844E', // e-rezept
				mint: '#A2C5AC',
				petrol: '#006B66',
			},
			purple: '#8B80F9',
			red: {
				DEFAULT: '#FC4C02',
				faint: '#F29A9A',
			},
			white: '#FFFFFF',
			transparent: 'transparent',
			yellow: {
				sand: '#F5ECCD',
			},
		},
		extend: {
			borderRadius: {
				DEFAULT: '25px',
			},
			borderWidth: {
				3: '3px',
				6: '6px',
			},
			boxShadow: {
				'DEFAULT': '15px -15px 25px #616368, -15px 15px 25px #47494D',
				'off': '0px 0px 25px #61636800, 0px 0px 25px #47494D00',
				'large': '-20px 20px 60px #46474B, 20px -20px 60px #626569',
				'large-off': '0px 0px 60px #46474B00, 0px 0px 60px #62656900',
			},
			fontSize: {
				xl: '1.3125rem',
			},
			height: {
				...customSizes,
			},
			letterSpacing: {
				wide: '0.02em',
			},
			lineHeight: {
				4.5: '1.2rem',
				11: '2.7rem',
			},
			maxHeight: {
				...customSizes,
			},
			minHeight: {
				...customSizes,
			},
			maxWidth: {
				...customSizes,
			},
			minWidth: {
				...customSizes,
			},
			spacing: customSpacing,
			width: {
				...customSizes,
			},
		},
		fontFamily: {
			sans: [
				'Moderat',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
			/* sans: ['Moderat', ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif], */
		},
		screens: {
			'xs': '360px', // => @media (min-width: 360px) { ... }

			'sm': '640px', // => @media (min-width: 640px) { ... }

			'md': '768px', // => @media (min-width: 768px) { ... }

			'lg': '1024px', // => @media (min-width: 1024px) { ... }

			'xl': '1280px', // => @media (min-width: 1280px) { ... }

			'2xl': '1536px', // => @media (min-width: 1536px) { ... }

			'3xl': '1920px', // => @media (min-width: 1920px) { ... }
		},
	},
}
