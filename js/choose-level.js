function renderChooseLevelBlock(container) {
    const levelHeader = document.createElement('h1');
    levelHeader.textContent = 'Выбери сложность';
    levelHeader.classList.add('level_header');

    const levelNumber = document.createElement('div');
    levelNumber.classList.add('level_number');

    const levelNumberOne = document.createElement('h3');
    levelNumberOne.textContent = '1';
    levelNumberOne.classList.add('level_number-one');

    levelNumberOne.addEventListener('click', () => {

        window.application.level = 1;

    });

    const levelNumberTwo = document.createElement('h3');
    levelNumberTwo.textContent = '2';
    levelNumberTwo.classList.add('level_number-two');

    levelNumberTwo.addEventListener('click', () => {

        window.application.level = 2;

    });

    const levelNumberThree = document.createElement('h3');
    levelNumberThree.textContent = '3';
    levelNumberThree.classList.add('level_number-three');

    levelNumberThree.addEventListener('click', () => {

        window.application.level = 3;

    });

    const levelChooseButton = document.createElement('button');
    levelChooseButton.textContent = 'Старт';
    levelChooseButton.classList.add('level_choose-button');

    levelChooseButton.addEventListener('click', () => {
        if (window.application.level === 1) {
            window.application.renderScreen('easy');
        } else if (window.application.level === 2) {
            window.application.renderScreen('middle');
        } else if (window.application.level === 3) {
            window.application.renderScreen('hard');
        } else {
            alert('Пожалуйста, выберите уровень сложности');
        }
    });
        
    container.appendChild(levelHeader);
    container.appendChild(levelNumber);
    levelNumber.appendChild(levelNumberOne);
    levelNumber.appendChild(levelNumberTwo);
    levelNumber.appendChild(levelNumberThree);
    container.appendChild(levelChooseButton);
};

window.application.blocks['chooseLevel'] = renderChooseLevelBlock;





function renderChooseLevelScreen() {
    app = document.querySelector('.app');

    const level = document.createElement('div');
    level.classList.add('level');

    window.application.renderBlock('chooseLevel', level);

    app.appendChild(level);
}

window.application.screens['chooseLevel'] = renderChooseLevelScreen;

window.application.renderScreen('chooseLevel');