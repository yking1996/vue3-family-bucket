export interface TopListItem {
	subscribers: any[];
	subscribed?: any;
	creator?: any;
	artists?: any;
	tracks?: any;
	updateFrequency: string;
	backgroundCoverId: number;
	backgroundCoverUrl?: any;
	titleImage: number;
	titleImageUrl?: any;
	englishTitle?: any;
	opRecommend: boolean;
	recommendInfo?: any;
	subscribedCount: number;
	cloudTrackCount: number;
	adType: number;
	trackNumberUpdateTime: number;
	userId: number;
	createTime: number;
	highQuality: boolean;
	specialType: number;
	anonimous: boolean;
	updateTime: number;
	coverImgId: number;
	newImported: boolean;
	trackCount: number;
	coverImgUrl: string;
	totalDuration: number;
	commentThreadId: string;
	trackUpdateTime: number;
	privacy: number;
	playCount: number;
	ordered: boolean;
	tags: any[];
	description: string;
	status: number;
	name: string;
	id: number;
	coverImgId_str: string;
	toplistType: string;
}

export interface ArtistTopList {
	coverUrl: string;
	name: string;
	upateFrequency: string;
	position: number;
	updateFrequency: string;
}

export interface AllTopListRes {
	code: number;
	list: TopListItem[];
	artistToplist: ArtistTopList;
}

