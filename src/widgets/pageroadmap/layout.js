

function templateHtml (roadmap) {
    let html = `<div class="roadmap-part-wrapper content-part-wrapper">
        <div class="roadmap-title-wrapper content-title-wrapper">
            <h3>ROADMAP</h3> 
            <span class="title-line"></span>
        </div>
        <div class="roadmap-content-container">
            <img class="bg-image" src="/maincloud/img/pageroadmap/bg.png" />
            <div class="roadmap-content">
                <span class="roadmap-line"></span>
                <ul class="roadmap-list">
                    ${
                        roadmap.map(function (item, index) {
                            return `<li class="roadmap-item roadmap-item-${index}">
                                    <div class="item-content">
                                        <p class="roadmap-introduction">
                                            ${item.events}
                                        </p>
                                    </div>
                                </li>`;
                        }).join('')
                    }
                </ul>
            </div>
        </div>
    </div>`
    return html;
}


let data = [{
    // time: '2018 Q3',
    // from: '2018-07-01 00:00:00',
    // to: '2018-10-01 00:00:00',
    events: 'May, 2018, the BonusCloud project started.'
}, {
    time: '2018 Q4',
    from: '2018-10-01 00:00:00',
    to: '2019-01-01 00:00:00',
    events: 'July, 2018, private equity funding completed.'
}, {
    time: '2019 Q1',
    from: '2019-01-01 00:00:00',
    to: '2019-04-01 00:00:00',
    events: 'August, 2018, white paper release, token listing.'
}, {
    time: '2019 Q2',
    from: '2019-04-01 00:00:00',
    to: '2019-07-01 00:00:00',
    events: 'Q3, 2018, BonusNetwork prototype release, token reward for invited participants.'
}, {
    time: '2019 Q3',
    from: '2019-07-01 00:00:00',
    to: '2019-10-01 00:00:00',
    events: 'Q4, 2018, testnet release.'
}, {
    time: '2019 Q4',
    from: '2019-10-01 00:00:00',
    to: '2020-01-01 00:00:00',
    events: 'Q1, 2019, BonusNetwork release.'
}, {
    time: '2019 Q4',
    from: '2019-10-01 00:00:00',
    to: '2020-01-01 00:00:00',
    events: 'Q2 2019，mainnet prototype release, BonusStorage prototype release.'
}, {
    time: '2019 Q4',
    from: '2019-10-01 00:00:00',
    to: '2020-01-01 00:00:00',
    events: 'Q3, 2019, mainnet release.'
}, {
    time: '2019 Q4',
    from: '2019-10-01 00:00:00',
    to: '2020-01-01 00:00:00',
    events: 'Q4, 2019, BonusStorage release.'
}, {
    time: '2019 Q4',
    from: '2019-10-01 00:00:00',
    to: '2020-01-01 00:00:00',
    events: 'Q1, 2020, SDK and development toolset release.'
}];

export default () => {
    let html = templateHtml(data);

    return html;
}
