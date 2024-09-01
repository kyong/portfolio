import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'chicaro-manager',
		company: 'ChiCaRo inc.',
		description: 'Managing and developing new features for ChiCaRo.',
		contract: ContractType.Freelance,
		type: 'Development, Management',
		location: 'Home',
		period: { from: new Date(2023, 0, 12) },
		skills: getSkills('ts', 'js'),
		name: 'Manager',
		color: 'pink',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Managing and developing new features for ChiCaRo'
	},
	{
		slug: 'skydisc-web-developer',
		company: 'SKYDISC inc.',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Frontend Developer',
		location: 'Home',
		period: { from: new Date(2022, 0, 9), to: new Date(2023, 0, 9) },
		skills: getSkills('ts', 'js', 'sass', 'css', 'html', 'nuxt', 'reactjs'),
		name: 'Frontend Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2017, 0,2) },
		skills: getSkills( 'ts', 'sass', 'css', 'html', 'js', 'docker', 'aws', 'nuxt', 'reactjs'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'lecre-web-developer',
		company: 'Web Develop Company',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Fullstack Developer',
		location: 'Company',
		period: { from: new Date(2011, 0, 2), to: new Date(2017, 0,2) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Web Developer',
		color: 'white',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';
