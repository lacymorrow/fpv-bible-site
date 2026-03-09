// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'FPV Bible',
			description: 'A comprehensive, open-source guide to building and flying FPV drones.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lacymorrow/fpv-bible-site' }],
			editLink: {
				baseUrl: 'https://github.com/lacymorrow/fpv-bible-site/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/anatomy' },
					],
				},
				{
					label: 'Frame',
					items: [
						{ slug: 'frame/overview' },
						{ slug: 'frame/miniquad' },
						{ slug: 'frame/micro' },
					],
				},
				{
					label: 'Power',
					items: [
						{ slug: 'power/overview' },
						{ slug: 'power/serial-vs-parallel' },
						{ slug: 'power/pdb' },
						{ slug: 'power/regulators' },
						{ slug: 'power/battery' },
						{ slug: 'power/charging' },
						{ slug: 'power/leds' },
					],
				},
				{
					label: 'Control',
					items: [
						{ slug: 'control/overview' },
						{ slug: 'control/radio-transmitter' },
						{ slug: 'control/protocols' },
						{ slug: 'control/telemetry' },
						{ slug: 'control/receiver' },
						{ slug: 'control/failsafe' },
					],
				},
				{
					label: 'Drive',
					items: [
						{ slug: 'drive/overview' },
						{ slug: 'drive/escs' },
						{ slug: 'drive/pwm-signal' },
						{ slug: 'drive/ppm-signal' },
						{ slug: 'drive/motors' },
						{ slug: 'drive/brushed-vs-brushless' },
						{ slug: 'drive/propellers' },
					],
				},
				{
					label: 'FPV',
					items: [
						{ slug: 'fpv/overview' },
						{ slug: 'fpv/etiquette' },
						{ slug: 'fpv/camera' },
						{ slug: 'fpv/vtx' },
						{ slug: 'fpv/vrx' },
						{ slug: 'fpv/goggles' },
						{ slug: 'fpv/osd' },
						{ slug: 'fpv/antenna' },
					],
				},
				{
					label: 'Building a Quad',
					items: [
						{ slug: 'building/overview' },
						{ slug: 'building/sanding-carbon-fiber' },
						{ slug: 'building/battery-strap' },
						{ slug: 'building/power-distribution' },
						{ slug: 'building/speed-controllers' },
						{ slug: 'building/motors' },
						{ slug: 'building/flight-controller' },
						{ slug: 'building/receiver' },
						{ slug: 'building/vtx' },
						{ slug: 'building/camera' },
					],
				},
				{
					label: 'Flight School',
					items: [
						{ slug: 'flight-school/overview' },
						{ slug: 'flight-school/mode-comparison' },
						{ slug: 'flight-school/simulators' },
						{ slug: 'flight-school/flight-101' },
					],
				},
				{
					label: 'Recording',
					items: [
						{ slug: 'recording/overview' },
						{ slug: 'recording/dvr' },
						{ slug: 'recording/hd-recording' },
					],
				},
				{
					label: 'Tools & Accessories',
					items: [
						{ slug: 'tools/overview' },
						{ slug: 'tools/accessories' },
					],
				},
				{
					label: 'Tips & Troubleshooting',
					items: [
						{ slug: 'tips/general' },
						{ slug: 'tips/troubleshooting' },
					],
				},
				{
					label: 'Community',
					items: [
						{ slug: 'community/get-involved' },
					],
				},
			],
		}),
	],
});
