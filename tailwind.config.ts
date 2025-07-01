
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'minecraft': ['Press Start 2P', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Minecraft color palette
				minecraft: {
					grass: '#8BC34A',
					dirt: '#8D6E63',
					stone: '#9E9E9E',
					diamond: '#00BCD4',
					emerald: '#4CAF50',
					gold: '#FFC107',
					iron: '#607D8B',
					redstone: '#F44336',
					lapis: '#3F51B5',
					obsidian: '#212121',
					wood: '#795548',
					sand: '#FFCC02',
					water: '#2196F3',
					lava: '#FF5722'
				}
			},
			borderRadius: {
				lg: '0px',
				md: '0px',
				sm: '0px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'minecraft-bounce': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'minecraft-shake': {
					'0%, 100%': { transform: 'translateX(0px)' },
					'25%': { transform: 'translateX(-3px)' },
					'75%': { transform: 'translateX(3px)' }
				},
				'minecraft-glow': {
					'0%, 100%': { 
						filter: 'brightness(1) drop-shadow(0 0 5px rgba(76, 175, 80, 0.5))'
					},
					'50%': { 
						filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(76, 175, 80, 0.8))'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'minecraft-bounce': 'minecraft-bounce 1s infinite',
				'minecraft-shake': 'minecraft-shake 0.5s ease-in-out',
				'minecraft-glow': 'minecraft-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
