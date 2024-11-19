import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '4rem',
				md: '4rem',
				lg: '4rem',
				xl: '0',
				'2xl': '0'
			}
		},
		fontFamily: {
			sans: ['Inter', 'system-ui', 'sans-serif'],
			serif: ['Fraunces', 'system-ui', 'serif']
		},
		extend: {
			boxShadow: {
				'navbar-inset': 'inset 0px 0px 8px rgba(255, 255, 255, 0.45)'
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
