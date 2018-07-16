

function templateHtml (roadmap) {
    let html = `<div class="roadmap-container" id="introduction">
        <div class="cloud-title">Roadmap</div>
        <div>
            <span class="roadmap-line"></span>
            <ul class="roadmap-list">
                ${
                    roadmap.map(function (item, index) {
                        return `<li class="roadmap-item roadmap-item-${index}">
                                <div class="item-content">
                                    <p class="roadmap-time">${item.time}</p>
                                    <p class="roadmap-content">
                                        ${item.events}
                                    </p>
                                </div>
                            </li>`;
                    }).join('')
                }
            </ul>
        </div>
    </div>`
    return html;
}

let data = [{
    time: '2018 Q3',
    from: '2018-07-01 00:00:00',
    to: '2018-10-01 00:00:00',
    events: 'BonusCloud created & Whitepaper 1.0 release in August, 2018'
}, {
    time: '2018 Q4',
    from: '2018-10-01 00:00:00',
    to: '2019-01-01 00:00:00',
    events: 'BonusCloud created & Whitepaper 1.0 release in August, 2018'
}, {
    time: '2019 Q1',
    from: '2019-01-01 00:00:00',
    to: '2019-04-01 00:00:00',
    events: 'BonusCloud created & Whitepaper 1.0 release in August, 2018'
}, {
    time: '2019 Q2',
    from: '2019-04-01 00:00:00',
    to: '2019-07-01 00:00:00',
    events: 'BonusCloud created & Whitepaper 1.0 release in August, 2018'
}, {
    time: '2019 Q3',
    from: '2019-07-01 00:00:00',
    to: '2019-10-01 00:00:00',
    events: 'BonusCloud created & Whitepaper 1.0 release in August, 2018'
}, {
    time: '2019 Q4',
    from: '2019-10-01 00:00:00',
    to: '2020-01-01 00:00:00',
    events: 'BonusCloud created & Whitepaper 1.0 release in August, 2018'
}];

export default () => {
    let html = templateHtml(data);

    return html;
}
