

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
                                            ${item.time}，${item.events}
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
    time: 'Q2 2018',
    // from: '2018-07-01 00:00:00',
    // to: '2018-10-01 00:00:00',
    events: 'the BonusCloud Kick-off'
}, {
    time: 'Q3 2018',
    // from: '2018-10-01 00:00:00',
    // to: '2019-01-01 00:00:00',
    events: 'White Paper and BonusNet Beta'
}, {
    time: 'Q4 2018',
    // from: '2019-01-01 00:00:00',
    // to: '2019-04-01 00:00:00',
    events: 'BonusChain Kick-off'
}, {
    time: 'Q1 2019',
    // from: '2019-04-01 00:00:00',
    // to: '2019-07-01 00:00:00',
    events: 'BonusComputing Kick-off'
}, {
    time: 'Q1 2019',
    // from: '2019-07-01 00:00:00',
    // to: '2019-10-01 00:00:00',
    events: 'BonusChain Beta'
}, {
    time: 'Q2 2019',
    // from: '2019-10-01 00:00:00',
    // to: '2020-01-01 00:00:00',
    events: 'BonusNet 1.0 and BonusChain 1.0'
}, {
    time: 'Q3 2019',
    // from: '2019-10-01 00:00:00',
    // to: '2020-01-01 00:00:00',
    events: 'BonusStorage Kick-off'
}, {
    time: 'Q3 2019',
    // from: '2019-10-01 00:00:00',
    // to: '2020-01-01 00:00:00',
    events: 'BonusComputing Beta'
}, {
    time: 'Q4 2019',
    // from: '2019-10-01 00:00:00',
    // to: '2020-01-01 00:00:00',
    events: 'Full Function platform Kick-off'
}, {
    time: 'Q4 2019',
    // from: '2019-10-01 00:00:00',
    // to: '2020-01-01 00:00:00',
    events: 'BonusComputing 1.0 and BonusStorage Beta'
}, {
    time: 'Q1 2020',
    // from: '2019-10-01 00:00:00',
    // to: '2020-01-01 00:00:00',
    events: 'SDE，SDK and BonusStorage 1.0'
}];

export default () => {
    let html = templateHtml(data);

    return html;
}
