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

var GAME_HEIGHT = 540;
var GAME_WIDTH = 960;

var pPosition;
var pVelocity;
var pAcceleration;


function init() {
	console.log('init');

}

function preload() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.load.image('bg', '../assets/img/cave_bg.png');
	game.load.image('person', '../assets/img/down_char.png');

}

function create(){
	var background = game.add.tileSprite(0, 0, game.width, game.height, 'bg');
	background.autoScroll(-30, 0);


	person = game.add.sprite(260, 200, 'person');
	game.physics.arcade.enable(person);
	person.body.collideWorldBounds = true;
	person.body.gravity.y=800;






}

function update(){
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
		// the person is going up :
		abc();
	}
	else if (pVelocity>0) {

	}
		// the person is going down




}