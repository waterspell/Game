window.application = {
    level: 0,
    blocks: {},
    screens: {},

    renderScreen: function(screenName) {
        if (window.application.screens[screenName]) {
            document.querySelector('.app').innerHTML = '';
            window.application.screens[screenName]();
        } else {
            console.warn(`Экрана "${screenName}" не существует!`);
        }
    },

    renderBlock: function(blockName, container) {
        if (window.application.blocks[blockName]) {
            window.application.blocks[blockName](container);
        }  else {
            console.warn(`Блока "${blockName}" не существует!`);
        }
    },
};