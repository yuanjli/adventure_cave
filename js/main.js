//main.js
// this is making adventure cave game happen.
//toturials:  
//https://www.youtube.com/watch?v=b6A4XHkTjs8




console.log('JavaScript for ac is loading!');

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'game', {
	init: init,
	preload: preload,
	create: create,
	update: update
});


// ========== variables ===========
var player, cursors;

var GAME_HEIGHT = 460;
var GAME_WIDTH = 960;

var pPosition;
var pVelocity;
var pAcceleration;


function init() {
	console.log('init');

}

function preload() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//preload the image files: 
	game.load.image('bg', '../assets/img/cave_bg.png');
	game.load.image('person', '../assets/img/down_char.png');

	//load audio files for later uses:
	game.load.audio('music', '../assets/audio/among-the-clouds.mp3');
	game.load.audio('die', '../assets/audio/die.wav');
	game.load.audio('hit', '../assets/audio/hit.wav');
	game.load.audio('point', '../assets/audio/point.wav');
	game.load.audio('swoosh', '../assets/audio/swoosh.wav');
	game.load.audio('wing', '../assets/audio/wing.wav');

}

function create(){

	// this sets up the background image and auto slides to the left:
	var background = game.add.tileSprite(0, 0, game.width, game.height, 'bg');
	background.autoScroll(-30, 0);

	// set up the music sound: 
	music = game.add.audio('music');
	music.play();

	//creates the person charactor in the window and added gravity
	person = game.add.sprite(260, 200, 'person');
	game.physics.arcade.enable(person);
	person.score = 0;
	person.body.collideWorldBounds = true;
	person.body.gravity.y=800;

	//needs to create pipes on the window

	// need those two lines to stop the browser functions interference with the game.
	cursors = game.input.keyboard.createCursorKeys();
	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.ENTER]);


	//Add Score and HP text to the screen: 
	//hpText = game.add.text(GAME_WIDTH - 150, 20, 'Life: ' + player.life.toString(), {fill: '#fff'});
	scoreText = game.add.text(GAME_WIDTH - 150, GAME_HEIGHT - 45, 'Score: ' + person.score.toString(), {fill: '#fff'});

}

function update(){
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
		// the person is going up :
		person.body.velocity.y = -200;
	}
	else if (pVelocity>0) {


	}
		// the person is going down




}