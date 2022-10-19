// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: '電影網站',
		category: 'Web Application',
		img: require('@/assets/images/p3.jpg'),
	},
	{
		id: 2,
		title: '高創環能網站',
		category: 'Web Application',
		img: require('@/assets/images/p2.png'),
	},
	{
		id: 3,
		title: 'AZURE心理治療機器人',
		category: 'Mobile Application',
		img: require('@/assets/images/p1.png'),
	},
	{
		id: 4,
		title: '俄羅斯方塊連線對戰',
		category: 'UI/UX Design',
		img: require('@/assets/images/p4.jpg'),
	},
	{
		id: 5,
		title: '閃球大作戰',
		category: 'Mobile Application',
		img: require('@/assets/images/p5.jpg'),
	},
	{
		id: 6,
		title: 'POS點餐系統',
		category: 'Mobile Application',
		img: require('@/assets/images/p6.jpg'),
	},
];

export default projects;
