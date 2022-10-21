export interface GetSongUrlOldParams {
    id: number, //音乐id
    br?: number //码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
}

export interface GetSongUrlParams {
    id: number, //音乐id
    level: string //standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损, hires=>Hi-Res
}
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