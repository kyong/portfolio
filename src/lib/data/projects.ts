import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'chicaro',
		color: '#FDC2C0',
		description:
			'ChiCaRoとは、子供と遠隔地にいる祖父母が一緒に遊ぶことができるロボットを提供するサービスです。子供が遊びたいときに、祖父母が遠隔地にいても、一緒に遊ぶことができます。私はこのプロジェクトでマネージャー兼エンジニアとして機能追加のマネジメントをしつつ、環境構築、フロー改善、コスト削減等を行ってます。',
		shortDescription:
			'ChiCaRoとは、子供と遠隔地にいる祖父母が一緒に遊ぶことができるロボットを提供するサービスです。子供が遊びたいときに、祖父母が遠隔地にいても、一緒に遊ぶことができます。私はこのプロジェクトでマネージャー兼エンジニアとして機能追加のマネジメントをしつつ、環境構築、フロー改善、コスト削減等を行ってます。',
		links: [{ to: 'https://www.chicaro.co.jp/', label: 'ChiCaRo' }],
		logo: Assets.VueJs,
		name: 'ChiCaRo',
		period: {
			from: new Date(2023, 12, 1)
		},
		skills: getSkills('vue', 'ts', 'sass', 'python', 'html', 'aws', 'docker'),
		type: 'Development, Management',
	},
	{
		slug: 'saiteki',
		color: '#4B90B1',
		description:
			'最適ワークスは工場のシフトをAIに作ってもらうサービスです。このサービスのフロントエンドの一部と特殊な管理画面担当しました。',
		shortDescription:
			'最適ワークスは工場のシフトをAIに作ってもらうサービスです。このサービスのフロントエンドの一部と特殊な管理画面担当しました。',
		links: [{ to: 'https://saiteki.works/', label: '最適ワークス' }],
		logo: Assets.VueJs,
		name: '最適ワークス',
		period: {
			from: new Date(2022, 9, 1),
			to: new Date(2023, 9, 1)
		},
		skills: getSkills('ts', 'vuejs','sass', 'python', 'html', 'docker', 'nuxt', 'reactjs'),
		type: 'SaaS',
		// screenshots: [
		// 	{
		// 		label: 'screen 1',
		// 		src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '2',
		// 		src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '3',
		// 		src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '4',
		// 		src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '5',
		// 		src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '6',
		// 		src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	}
		// ]
	}
];

export const title = 'Projects';
