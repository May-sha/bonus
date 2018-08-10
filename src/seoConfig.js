var config = {
    default: {
        title: 'BonusCloud',
        keyword: 'Blockchain-driven edge computing and decentralized cloud service.',
        description: 'Blockchain-driven edge computing and decentralized cloud service.'
    },
    index: {
        index: {
            title: 'BonusCloud',
            keyword: 'Blockchain-driven edge computing and decentralized cloud service.',
            description: 'Blockchain-driven edge computing and decentralized cloud service.'
        }
    }
}



module.exports = function (v) {
    if(!v.length || !config[v[0]] || !config[v[0]][v[1]]) return config.default;
    return config[v[0]][v[1]];
}
