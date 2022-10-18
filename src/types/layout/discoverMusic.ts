const topMenuGroup = [
    {
        name: '个性推荐',
        url: '/personalRec'
    }, {
        name: '排行榜',
        url: '/songCharts'
    }
]
export {
    topMenuGroup
}

export interface Banner {
	imageUrl: string;
	targetId: number;
	adid?: any;
	targetType: number;
	titleColor: string;
	typeTitle: string;
	url: string;
	exclusive: boolean;
	monitorImpress?: any;
	monitorClick?: any;
	monitorType?: any;
	monitorImpressList?: any;
	monitorClickList?: any;
	monitorBlackList?: any;
	extMonitor?: any;
	extMonitorInfo?: any;
	adSource?: any;
	adLocation?: any;
	adDispatchJson?: any;
	encodeId: string;
	program?: any;
	event?: any;
	video?: any;
	song?: any;
	scm: string;
	bannerBizType: string;
}

export interface BannerRes {
	banners: Banner[];
	code: number;
}

export interface PersonalizedResListItem {
	id: number;
	type: number;
	name: string;
	copywriter: string;
	picUrl: string;
	canDislike: boolean;
	trackNumberUpdateTime: number;
	playCount: number;
	trackCount: number;
	highQuality: boolean;
	alg: string;
}

export interface PersonalizedRes {
	hasTaste: boolean;
	code: number;
	category: number;
	result: PersonalizedResListItem[];
}

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

