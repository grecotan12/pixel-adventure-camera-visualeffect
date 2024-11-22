const gameState = {
    tiles: [],
    healthCount: 5,
    score: 0,
    isHurt: false,
    titleLetters: [],
    characters: {
        1: 'charOneIdle',
        2: 'charTwoIdle',
        3: 'charThreeIdle',
        4: 'charFourIdle'
    },
};

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 768,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1500 },
            enableBody: true,
        }
    },
    scene: [StartGame, LevelOne]
}

const game = new Phaser.Game(config);