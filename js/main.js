//main.js
// this is making adventure cave game happen.
//toturials:  
//https://www.youtube.com/watch?v=b6A4XHkTjs8

// ========== variables ===========
// Always define global varriables before functions and calls;
var person, cursors;


console.log('Game is starting! ');
// create the game start: 
var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'game', {
	init: init,
	preload: preload,
	create: create,
	update: update
});





//  =======    = = ===================
// Initialize the game;
function init() {
	console.log('init');
}
// Set the game Physics;
function preload() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//preload the image files: 
	game.load.image('bg', '../assets/img/cave_bg.png');
	game.load.image('person', '../assets/img/down_char.png');
	game.load.image('pipeUp', '../assets/img/red_pipe.png');
	game.load.image('pipeDown', '../assets/img/red_pipe_down.png');
	game.load.image('floor', '../assets/img/floor_bg.png');

	//load animations
	game.load.spritesheet('flap', '../assets/img/flap_character.png', 70, 43);

	//load audio files for later uses:
	game.load.audio('music', '../assets/audio/among-the-clouds.mp3');
	game.load.audio('die', '../assets/audio/die.wav');
	game.load.audio('hit', '../assets/audio/hit.wav');
	game.load.audio('point', '../assets/audio/point.wav');
	game.load.audio('swoosh', '../assets/audio/swoosh.wav');
	game.load.audio('wing', '../assets/audio/wing.wav');
}

// create the game elements;
function create(){
	// this sets up the background image and auto slides to the left:
	var background = game.add.tileSprite(0, 0, game.width, game.height, 'bg');
	background.autoScroll(-30, 0);
	// var floor = game.add.tileSprite(0, 0, GAME_WIDTH, GAME_HEIGHT, 'floor');
	// floor.autoScroll(-30, 0);

	// set up the music sound: 
	music = game.add.audio('music');
	music.play();
	swoosh = game.add.audio('swoosh');

	//creates the person charactor in the window and added gravity
	person = game.add.sprite(260, 200, 'flap');
	game.physics.arcade.enable(person);
	person.score = 0;
	//person.body.collideWorldBounds = true;
	person.body.gravity.y=800;
	person.animations.add('flap', [0, 1], 10, true);
	person.play('flap');
	

	//create flap 
	// flap = game.add.sprite(70, 43, 'flap');
	// flap.setAll('outOfBoundsKill', true);
	// flap.setAll('checkWorldBounds',true);


	//======< to create pipes as obstacles =======>
	// create pipe in a group 
	pipes = game.add.group();
	//create pipe regarding to the screen position x, and y
	pipes.enableBody = true;
	//add to the pipes created
	//game.physics.arcade.enable(pipe);
	// pipes.enableBody = true;
	pipes.physicsBodyType = Phaser.Physics.ARCADE;
	pipes.createMultiple(8, 'pipeUp');
	//pipes will be removed if they are nolonger visible. 
	pipes.setAll('outOfBoundsKill', true);
	pipes.setAll('checkWorldBounds', true);


	// randyX = randy(900, 1200);
	// pipes[i] = game.add.sprite(randyX, randy(300, 500), 'pipe');
	// pipeDown[i] = game.add.sprite(randyX, randy(-75,0), 'pipeDown');


	// Create the pipes in a loop: 
	game.time.events.loop(Phaser.Timer.SECOND * 2, spawnPipes);

	// need those two lines to stop the browser functions interference with the game.
	cursors = game.input.keyboard.createCursorKeys();
	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.ENTER]);

	//Add Score and HP text to the screen: 
	//hpText = game.add.text(GAME_WIDTH - 130, 20, 'Life: ' + player.life.toString(), {fill: '#fff'});
	scoreText = game.add.text(GAME_WIDTH - 135, GAME_HEIGHT - 480, 'Score: ' + person.score.toString(), {fill: '#fff'});

}

// updates the game logic;
function update(){
	if (person.angle < 20) {
		person.angle += 1;
	}
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
		// the person is going up :
		person.body.velocity.y = -230;
		game.add.tween(person).to({angle: -20}, 100).start(); 
		person.anchor.setTo(-0.2, 0.5); 
		swoosh.play();
		//person.play('flap');

	}
	else {
		person.animations.stop();
	}
	// else if (pVelocity>0) {
	// }
		// the person is going down
	// this function is the collision detection
	game.physics.arcade.overlap(person, pipes);

	
}

// ===========<pipes> ===============
function spawnPipes(){
	console.log('pipes creating is called! ');
	//var pipe = pipes.getFirstExists(false);
	//pipe.body.velocity.x = -250;
	if (Math.floor((Math.random()*10)+1) < 3) {
		pipe = pipes.create(800, 425, 'pipeUp');
		pipeDown = pipes.create(800, 0, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else if (Math.floor((Math.random()*10)+1) < 5) {
		pipe = pipes.create(800, 375, 'pipeUp');
		pipeDown = pipes.create(800, -50, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else if (Math.floor((Math.random()*10)+1) < 7) {
		pipe = pipes.create(800, 325, 'pipeUp');
		pipeDown = pipes.create(800, -100, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else if (Math.floor((Math.random()*10)+1) < 9) {
		pipe = pipes.create(800, 275, 'pipeUp');
		pipeDown = pipes.create(800, -150, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else if (Math.floor((Math.random()*10)+1) < 11) {
		pipe = pipes.create(800, 225, 'pipeUp');
		pipeDown = pipes.create(800, -200, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else {
		pipe = pipes.create(800, 175, 'pipeUp');
		pipeDown = pipes.create(800, -250, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}
}










