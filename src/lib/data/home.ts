import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Katahira';

export const lastName = 'Kyoji';

export const description =' I am a software engineer who loves to create awesome applications for customers.';
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/kyong/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/%E6%81%AD%E6%AC%A1-%E7%89%87%E5%B9%B3-9a1051166/'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/kyoji.katahira'
	}
];

export const skills = getSkills('js', 'css', 'html', 'vuejs', 'sass', 'python', 'ts', 'docker', 'aws', 'nuxt', 'reactjs');
