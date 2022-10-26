export interface Subscriber {
	defaultAvatar: boolean;
	province: number;
	authStatus: number;
	followed: boolean;
	avatarUrl: string;
	accountStatus: number;
	gender: number;
	city: number;
	birthday: number;
	userId: number;
	userType: number;
	nickname: string;
	signature: string;
	description: string;
	detailDescription: string;
	avatarImgId: number;
	backgroundImgId: number;
	backgroundUrl: string;
	authority: number;
	mutual: boolean;
	expertTags?: any;
	experts?: any;
	djStatus: number;
	vipType: number;
	remarkName?: any;
	authenticationTypes: number;
	avatarDetail?: any;
	anchor: boolean;
	backgroundImgIdStr: string;
	avatarImgIdStr: string;
	avatarImgId_str: string;
}

export interface AvatarDetail {
	userType: number;
	identityLevel: number;
	identityIconUrl: string;
}

export interface Creator {
	defaultAvatar: boolean;
	province: number;
	authStatus: number;
	followed: boolean;
	avatarUrl: string;
	accountStatus: number;
	gender: number;
	city: number;
	birthday: number;
	userId: number;
	userType: number;
	nickname: string;
	signature: string;
	description: string;
	detailDescription: string;
	avatarImgId: number;
	backgroundImgId: number;
	backgroundUrl: string;
	authority: number;
	mutual: boolean;
	expertTags?: any;
	experts?: any;
	djStatus: number;
	vipType: number;
	remarkName?: any;
	authenticationTypes: number;
	avatarDetail: AvatarDetail;
	anchor: boolean;
	backgroundImgIdStr: string;
	avatarImgIdStr: string;
	avatarImgId_str: string;
}

export interface Ar {
	id: number;
	name: string;
	tns: any[];
	alias: any[];
}

export interface Al {
	id: number;
	name: string;
	picUrl: string;
	tns: any[];
	pic_str: string;
	pic: number;
}

export interface H {
	br: number;
	fid: number;
	size: number;
	vd: number;
}

export interface M {
	br: number;
	fid: number;
	size: number;
	vd: number;
}

export interface L {
	br: number;
	fid: number;
	size: number;
	vd: number;
}

export interface Sq {
	br: number;
	fid: number;
	size: number;
	vd: number;
}

export interface Tracks {
	name: string;
	id: number;
	pst: number;
	t: number;
	ar: Ar[];
	alia?: any[];
	pop: number;
	st: number;
	rt?: any;
	fee: number;
	v: number;
	crbt?: any;
	cf: string;
	al: Al;
	dt: number;
	h: H;
	m: M;
	l: L;
	sq: Sq;
	hr?: any;
	a?: any;
	cd: string;
	no: number;
	rtUrl?: any;
	ftype: number;
	rtUrls: any[];
	djId: number;
	copyright: number;
	s_id: number;
	mark: number;
	originCoverType: number;
	originSongSimpleData?: any;
	tagPicList?: any;
	resourceState: boolean;
	version: number;
	songJumpInfo?: any;
	entertainmentTags?: any;
	single: number;
	noCopyrightRcmd?: any;
	mst: number;
	cp: number;
	mv: number;
	rtype: number;
	rurl?: any;
	publishTime: number;
}

export interface TrackIds {
	id: number;
	v: number;
	t: number;
	at: number;
	alg?: any;
	uid: number;
	rcmdReason: string;
	sc?: any;
	lr: number;
	ratio: number;
}

export interface PlaylistDetail {
	id: number;
	name: string;
	coverImgId: number;
	coverImgUrl: string;
	coverImgId_str: string;
	adType: number;
	userId: number;
	createTime: number;
	status: number;
	opRecommend: boolean;
	highQuality: boolean;
	newImported: boolean;
	updateTime: number;
	trackCount: number;
	specialType: number;
	privacy: number;
	trackUpdateTime: number;
	commentThreadId: string;
	playCount: number;
	trackNumberUpdateTime: number;
	subscribedCount: number;
	cloudTrackCount: number;
	ordered: boolean;
	description: string;
	tags: any[];
	updateFrequency?: any;
	backgroundCoverId: number;
	backgroundCoverUrl?: any;
	titleImage: number;
	titleImageUrl?: any;
	englishTitle?: any;
	officialPlaylistType?: any;
	copied: boolean;
	subscribers: Subscriber[];
	subscribed: boolean;
	creator: Creator;
	tracks: Tracks[];
	videoIds?: any;
	videos?: any;
	trackIds: TrackIds[];
	bannedTrackIds?: any;
	shareCount: number;
	commentCount: number;
	remixVideo?: any;
	sharedUsers?: any;
	historySharedUsers?: any;
	gradeStatus: string;
	score?: any;
	algTags?: any;
	toplistType: string;
}

export interface FreeTrialPrivilege {
	resConsumable: boolean;
	userConsumable: boolean;
	listenType?: any;
}

export interface ChargeInfoList {
	rate: number;
	chargeUrl?: any;
	chargeMessage?: any;
	chargeType: number;
}

export interface PlaylistDetailResPrivilege {
	id: number;
	fee: number;
	payed: number;
	realPayed: number;
	st: number;
	pl: number;
	dl: number;
	sp: number;
	cp: number;
	subp: number;
	cs: boolean;
	maxbr: number;
	fl: number;
	pc?: any;
	toast: boolean;
	flag: number;
	paidBigBang: boolean;
	preSell: boolean;
	playMaxbr: number;
	downloadMaxbr: number;
	maxBrLevel: string;
	playMaxBrLevel: string;
	downloadMaxBrLevel: string;
	plLevel: string;
	dlLevel: string;
	flLevel: string;
	rscl?: any;
	freeTrialPrivilege: FreeTrialPrivilege;
	chargeInfoList: ChargeInfoList[];
}

export interface PlaylistDetailRes {
	code: number;
	relatedVideos?: any;
	playlist: PlaylistDetail;
	urls?: any;
	privileges: PlaylistDetailResPrivilege[];
	sharedPrivilege?: any;
	resEntrance?: any;
}
export interface SimpleDetailToInit { 
    tracks: Tracks[], 
    updateTime: number,
    coverImgUrl: string
}