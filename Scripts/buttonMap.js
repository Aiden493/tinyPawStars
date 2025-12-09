document.addEventListener('DOMContentLoaded', () => {
    // mapping of button id -> screen id to show
    const showMap = {
        'aboutus': 'about-us',
        'contact': 'contact-info',
        'Pay': 'Payment',
        'puppypics': 'pic',
        'updates': 'up',
        'mom and dad': 'momanddad'
    };

    // list of all screen ids we toggle between (main + others)
    const screens = ['main-screen', ...Object.values(showMap)];

    const getEl = id => document.getElementById(id);

    function showScreen(id) {
        screens.forEach(s => getEl(s)?.classList.add('hidden'));
        getEl(id)?.classList.remove('hidden');
    }

    // wire up buttons that open other screens
    Object.entries(showMap).forEach(([btnId, screenId]) => {
        const btn = getEl(btnId);
        if (!btn) return console.warn(`button not found: ${btnId}`);
        btn.addEventListener('click', () => showScreen(screenId));
    });

    // wire up back buttons to return to main screen
    const backButtons = ['back-btn', 'back-btn2', 'back-btn3', 'back_btn4', 'back_btn5', 'back_btn6'];
    backButtons.forEach(id => {
        const btn = getEl(id);
        if (!btn) return;
        btn.addEventListener('click', () => showScreen('main-screen'));
    });
});

