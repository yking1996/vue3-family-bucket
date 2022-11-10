export interface GoSearchParams {
    keywords: string //关键字
    limit?: number //返回数量，def=30
    offset?: number //偏移数量，用于分页 , 如:(页数 -1)*30, 其中30为limit的值, def=0
    type?: number //搜索类型；def=1,取值意义1:单曲,10:专辑,100:歌手,1000:歌单,1002:用户,1004:MV,1006:歌词,1009:电台,1014:视频,1018:综合,2000:声音(搜索声音返回字段格式会不一样)
}

export interface GetSearchSuggestParams {
    keywords: string //关键字
    type?: number //如果传 'mobile' 则返回移动端数据
}
