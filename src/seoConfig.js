var config = {
    default: {
        title: 'BonusCloud',
        keyword: '云主机,云服务器,云计算,BGP多线带宽,弹性计算',
        description: '公有云主机平台，是中国第一家将自有业务完全迁移到云上的百亿级电商。 在BGP多线带宽,弹性计算,数据库,服务器，积累了重要的经验，助力开发者/创业者服务连接云计算未来'
    },
    index: {
        index: {
            title: 'BonusCloud',
            keyword: '云主机,云服务器,云计算,BGP多线带宽,弹性计算',
            description: '为万千用户提供云主机、云存储、云数据库等产品及标准化解决方案。7*24小时专家服务，故障100倍赔偿，7天无理由退款'
        }
    }
}



module.exports = function (v) {
    if(!v.length || !config[v[0]] || !config[v[0]][v[1]]) return config.default;
    return config[v[0]][v[1]];
}