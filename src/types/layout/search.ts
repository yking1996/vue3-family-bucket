export interface SearchHotDetail {
	searchWord: string;
	score: number;
	content: string;
	source: number;
	iconType: number;
	iconUrl: string;
	url: string;
	alg: string;
}

export interface GetSearchHotDetailRes {
	code: number;
	data: SearchHotDetail[];
	message: string;
}

export interface HotInfo {
	first: string;
	second: number;
	third?: any;
	iconType: number;
}

export interface GetSearchHot {
	hots: HotInfo[];
}

export interface GetSearchHotRes {
	code: number;
	result: GetSearchHot;
}