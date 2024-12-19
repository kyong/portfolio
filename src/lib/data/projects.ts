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
			from: new Date(2021, 9, 1),
			to: new Date(2022, 9, 1)
		},
		skills: getSkills('ts', 'vuejs','sass', 'python', 'html', 'docker', 'nuxt', 'reactjs'),
		type: 'SaaS',
	},
	{
		slug: 'orosy',
		color: '#00267f',
		description:
			'orosyは、事業向け卸し入れ通販サイトです。こちらのサイトの立ち上げを全て担当しました。',
		shortDescription:
			'orosyは、事業向け卸し入れ通販サイトです。こちらのサイトの立ち上げを全て担当しました。',
		links: [{ to: 'https://retailer.orosy.com/', label: 'orosy' }],
		logo: Assets.VueJs,
		name: 'orosy',
		period: {
			from: new Date(2020, 9, 1),
			to: new Date(2021, 9, 1)
		},
		skills: getSkills('ts', 'vuejs','sass', 'html', 'docker', 'nuxt', 'serverless'),
		type: 'SaaS',
	},
	{
		slug: 'ambassador',
		color: '#7D0E27',
		description:
			'BtoC会員サイトの保守、追加開発を行いました。このサイトは非常に複雑で、SNSから投稿を収集し、解析等を行うサイトでした。',
		shortDescription:
			'BtoC会員サイトの保守、追加開発を行いました。',
		links: [{ to: '', label: '' }],
		logo: Assets.VueJs,
		name: 'アンバサダーシステム',
		period: {
			from: new Date(2019, 9, 1),
			to: new Date(2019, 12, 1)
		},
		skills: getSkills('ts', 'reactjs','sass', 'html', 'nuxt', 'serverless'),
		type: 'SaaS',
	},
	{
		slug: 'catapult',
		color: '#DF1C50',
		description:
			'ECサイトの構築、保守、開発。通常のECサイトの構築を行いました。',
		shortDescription:
			'ECサイトの構築、保守、開発。通常のECサイトの構築を行いました。英語、中国語に対応し、社内のOAuthシステムを構築し認証サイトを別に立てました。',
		links: [{ to: 'https://amn-catapult.com/', label: 'CATAPULT' }],
		logo: Assets.VueJs,
		name: 'CATAPULT',
		period: {
			from: new Date(2018, 9, 1),
			to: new Date(2019, 9, 1)
		},
		skills: getSkills('ts', 'vuejs','sass', 'html', 'laravel'),
		type: 'EC',
	},
	{
		slug: '--3',
		color: '#00267f',
		description:
			'情報アプリを開発',
		shortDescription:
			'Android、iOSに対応した情報アプリを開発しました。',
		links: [{ to: '', label: '' }],
		logo: Assets.Angular,
		name: '情報アプリを開発',
		period: {
			from: new Date(2017, 12, 1),
			to: new Date(2018, 1, 1)
		},
		skills: getSkills('ts', 'ionic','sass', 'angular'),
		type: 'Android, iOS app',
	},
	{
		slug: '--4',
		color: '#00267f',
		description:
			'写真販売サイトの企画・構築',
		shortDescription:
			'写真販売サイトの企画・構築',
		links: [{ to: 'https://minsya.com/', label: 'みんなの写真屋さん' }],
		logo: Assets.AWS,
		name: 'みんなの写真屋さん',
		period: {
			from: new Date(2016, 8, 1),
			to: new Date(2017, 2, 1)
		},
		skills: getSkills('js', 'php'),
		type: 'EC',
	},
	{
		slug: '--5',
		color: '#00267f',
		description:
			'年賀状サービスの構築',
		shortDescription:
			'年賀状サービスの構築',
		links: [{ to: '', label: '年賀状サービスの構築' }],
		logo: Assets.JavaScript,
		name: '年賀状サービスの構築',
		period: {
			from: new Date(2016, 8, 1),
			to: new Date(2016, 12, 1)
		},
		skills: getSkills('js', 'php'),
		type: 'SaaS',
	},
	{
		slug: '--6',
		color: '#00267f',
		description:
			'結婚写真販売サービスの運営・機能追加',
		shortDescription:
			'結婚写真販売サービスの運営・機能追加',
		links: [{ to: '', label: '結婚写真販売サービス' }],
		logo: Assets.JavaScript,
		name: '結婚写真販売サービス',
		period: {
			from: new Date(2014, 12, 1),
			to: new Date(2016, 12, 1)
		},
		skills: getSkills('js', 'php'),
		type: 'EC',
	},
	{
		slug: '--7',
		color: '#00267f',
		description:
			'情報発信アプリ作成',
		shortDescription:
			'情報発信アプリ作成',
		links: [{ to: '', label: '情報発信アプリ' }],
		logo: Assets.Android,
		name: '情報発信アプリ',
		period: {
			from: new Date(2012, 5, 1),
			to: new Date(2014, 7, 1)
		},
		skills: getSkills('java'),
		type: 'Android app',
	},
	{
		slug: '--8',
		color: '#00267f',
		description:
			'アンドロイダーとは、Androidアプリを紹介する情報サイトです。このサイトを開発・運営、Wordpressからの移行を行いました。',
		shortDescription:
			'アンドロイダーとは、Androidアプリを紹介する情報サイトです。',
		links: [{ to: 'https://androider.jp/', label: 'アンドロイダー' }],
		logo: Assets.Android,
		name: 'アンドロイダー',
		period: {
			from: new Date(2011, 2, 1),
			to: new Date(2012, 10, 1)
		},
		skills: getSkills('js', 'php'),
		type: 'Blog',
	},
];

export const title = 'Projects';
