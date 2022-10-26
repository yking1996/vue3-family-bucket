export interface GetSongUrlOldParams {
	id: number | string, //音乐id 可多个如id=405998841,33894312
	br?: number //码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
}

export interface GetSongUrlParams {
	id: number | string, //音乐id 可多个如id=405998841,33894312
	level: string //standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损, hires=>Hi-Res
}

export interface GetSongDetailParams {
	ids: number | string //音乐 id, 如 ids=347230 或 ids=347230,347231
}

export interface CurrentSong {
    id: number,
    url: string,
    al: Al,
    ar: Ar[],
    name: string,
    dt: number
}

/**
 * 歌曲Url-start
 */
export interface FreeTrialPrivilege {
	resConsumable: boolean;
	userConsumable: boolean;
	listenType?: any;
}

export interface FreeTimeTrialPrivilege {
	resConsumable: boolean;
	userConsumable: boolean;
	type: number;
	remainTime: number;
}

export interface SongUrlData {
	id: number;
	url: string;
	br: number;
	size: number;
	md5: string;
	code: number;
	expi: number;
	type: string;
	gain: number;
	fee: number;
	uf?: any;
	payed: number;
	flag: number;
	canExtend: boolean;
	freeTrialInfo?: any;
	level: string;
	encodeType: string;
	freeTrialPrivilege: FreeTrialPrivilege;
	freeTimeTrialPrivilege: FreeTimeTrialPrivilege;
	urlSource: number;
	rightSource: number;
	podcastCtrp?: any;
	effectTypes?: any;
	time: number;
}

export interface GetSongUrlRes {
	data: SongUrlData[];
	code: number;
}
/**
 * 歌曲Url-end
 */

/**
 * 歌曲详情接口-start
 */
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
	sr: number;
}

export interface M {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

export interface L {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

export interface Sq {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

export interface Hr {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

export interface SongDetail {
	name: string;  //歌曲标题
	id: number;    //歌曲ID
	pst: number;   //功能未知
	t: number;     //enum 0: 一般类型; 1: 通过云盘上传的音乐，网易云不存在公开对应;  2: 通过云盘上传的音乐，网易云存在公开对应
	ar: Ar[];      // 歌手列表
	alia?: any[];  // 别名列表，第一个别名会被显示作副标题
	pop: number;   //小数，常取[0.0, 100.0]中离散的几个数值, 表示歌曲热度
	st: number;    //功能未知
	rt: string;    //None、空白字串、或者类似`600902000007902089`的字符串，功能未知
	fee: number;   //enum, 0: 免费或无版权 1: VIP 歌曲 4: 购买专辑 8: 非会员可免费播放低音质，会员可播放高音质及下载 fee 为 1 或 8 的歌曲均可单独购买 2 元单曲
	v: number;     //常为[1, ?]任意数字, 代表歌曲当前信息版本
	crbt?: any;    //None或字符串表示的十六进制，功能未知
	cf: string;    //空白字串或者None，功能未知
	al: Al;        //专辑，如果是DJ节目(dj_type != 0)或者无专辑信息(single == 1)，则专辑id为0
	dt: number;    //歌曲时长
	h: H;          //高质量文件信息
	m: M;          //中质量文件信息
	l: L;          //低质量文件信息
	sq: Sq;        //无损质量文件信息
	hr: Hr;        //未知
	a?: any;	   //常为None, 功能未知
	cd: string;    //None或如"04", "1/2", "3", "null"的字符串，表示歌曲属于专辑中第几张CD，对应音频文件的Tag
	no: number;    //表示歌曲属于CD中第几曲，0表示没有这个字段，对应音频文件的Tag
	rtUrl?: any;   //常为None, 功能未知
	ftype: number; //未知
	rtUrls: any[]; //常为空列表, 功能未知
	djId: number;  //0: 不是DJ节目 其他：是DJ节目，表示DJ ID
	copyright: number; //0, 1, 2: 功能未知
	s_id: number;  //对于t == 2的歌曲，表示匹配到的公开版本歌曲ID
	mark: number;  //功能未知
	originCoverType: number; //enum 0: 未知 1: 原曲 2: 翻唱
	originSongSimpleData?: any;  //对于翻唱曲，可选提供原曲简单格式的信息
	tagPicList?: any;  //未知
	resourceState: boolean; //未知
	version: number;    //常为[1, ?]任意数字, 代表歌曲当前信息版本
	songJumpInfo?: any; //未知
	entertainmentTags?: any; //未知
	awardTags?: any;  //未知
	single: number;   //enum, 0: 有专辑信息或者是DJ节目 1: 未知专辑
	noCopyrightRcmd?: any; //None表示可以播，非空表示无版权
	rtype: number;    //常为0，功能未知
	rurl?: any;       //常为None，功能未知
	mst: number;      //偶尔为0, 常为9，功能未知
	cp: number;       //功能未知
	mv: number;       //非零表示有MV ID
	publishTime: number; //毫秒为单位的Unix时间戳
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

export interface Privilege {
	id: number;
	fee: number;
	payed: number;
	st: number;
	pl: number;
	dl: number;
	sp: number;
	cp: number;
	subp: number;
	cs: boolean;
	maxbr: number;
	fl: number;
	toast: boolean;
	flag: number;
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

export interface GetSongDetailRes {
	songs: SongDetail[];
	privileges: Privilege[];
	code: number;
}

/**
 * 歌曲详情接口-end
 */