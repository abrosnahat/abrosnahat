new fullpage('#fullpage', {
    autoScrolling: true,
    sectionsColor: ['#252525', '#0f111a', '#121314', '#fff'],
    scrollingSpeed: 900,
    scrollBar: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#myMenu',
    loopBottom: true
});

const down = document.querySelector('.down');

down.addEventListener('click', () => fullpage_api.moveSectionDown())
