// 
// The adventure cave game is based on recreating flappy bird.
// toturials:  
// https://www.youtube.com/watch?v=b6A4XHkTjs8
// https://phaser.io/news/2015/03/flappy-bird-tutorial

// ========== variables =======
// Always define global varriables before functions and calls;
var person, cursors;


console.log('main.js loaded, Game is starting! ');
// create the game start: 
var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'game', {
	init: init,
	preload: preload,
	create: create,
	update: update
});
<<<<<<< HEAD
//  ============================
=======

//  ==================================
>>>>>>> gh-pages
// Initialize the game;
function init() {
	console.log('init');
}

// Set the game Physics;
function preload() {
	// Initialize arcade physics:
	game.physics.startSystem(Phaser.Physics.ARCADE);

<<<<<<< HEAD
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
=======
	// Preload the image files: 
	game.load.image('bg', './assets/img/cave_bg.png');
	game.load.image('person', './assets/img/down_char.png');
	game.load.image('pipeUp', './assets/img/red_pipe.png');
	game.load.image('pipeDown', './assets/img/red_pipe_down.png');
	game.load.image('floor', './assets/img/floor_bg.png');

	// Load animations
	game.load.spritesheet('flap', './assets/img/flap_character.png', 70, 43);

	// Load audio files for later uses:
	game.load.audio('music', './assets/audio/among-the-clouds.mp3');
	game.load.audio('die', './assets/audio/die.wav');
	game.load.audio('hit', './assets/audio/hit.wav');
	game.load.audio('point', './assets/audio/point.wav');
	game.load.audio('swoosh', './assets/audio/swoosh.wav');
	game.load.audio('wing', './assets/audio/wing.wav');
>>>>>>> gh-pages
}

// Create the game elements;
function create(){
	// this sets up the background image and auto slides to the left:
	var background = game.add.tileSprite(0, 0, game.width, game.height, 'bg');
	background.autoScroll(-30, 0);
	// set up the music sound: 
	music = game.add.audio('music');
	music.play();
	swoosh = game.add.audio('swoosh');
	point = game.add.audio('point');
	wing = game.add.audio('wing');
	die = game.add.audio('die');
	hit = game.add.audio('hit');

	//creates the person charactor in the window 
	person = game.add.sprite(260, 200, 'flap'); 
	game.physics.arcade.enable(person);  //enable the person's physics. 
	person.score = 0;
	//person.body.collideWorldBounds = true;
<<<<<<< HEAD
	person.body.gravity.y = 900;    // adds gravity to the player person.
	person.animations.add('flap', [0, 1], 20, true); // adds the animation to the person
	
=======
	person.body.gravity.y = 900;
	person.animations.add('flap', [0, 1], 20, true);
	person.score = 0;
	person.topScore = localStorage.getItem('bestScore') == null ? 0 : localStorage.getItem('bestScore');
>>>>>>> gh-pages

	//======< to create pipes as obstacles =======>
	// create pipe in a group 
	pipes = game.add.group();
	pipes.enableBody = true;
	pipes.physicsBodyType = Phaser.Physics.ARCADE;
	// pipes.createMultiple(8, 'pipeUp');
	//pipes will be removed if they are nolonger visible. 
	pipes.setAll('outOfBoundsKill', true);
	pipes.setAll('checkWorldBounds', true);
	// Create the pipes in a loop: 
	game.time.events.loop(Phaser.Timer.SECOND * 2, spawnPipes);
	game.time.events.loop(Phaser.Timer.SECOND * 2.1, addScore);

	// need those two lines to stop the browser functions interference with the game.
	cursors = game.input.keyboard.createCursorKeys();
	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.ENTER]);

	//Add Score and HP text to the screen: 
<<<<<<< HEAD
=======
	//hpText = game.add.text(GAME_WIDTH - 130, 20, 'Life: ' + player.life.toString(), {fill: '#fff'});
	topScoreText = game.add.text(20, 20, 'Top Score: ' + person.topScore.toString(), {fill: '#fff'});
>>>>>>> gh-pages
	scoreText = game.add.text(GAME_WIDTH - 135, GAME_HEIGHT - 480, 'Score: ' + person.score.toString(), {fill: '#fff'});
}

// Updates the game logic;
function update(){
<<<<<<< HEAD
	person.play('flap');  //plays the animation on the person;
=======

	person.play('flap');
>>>>>>> gh-pages
	if (person.angle < 20) {
		person.angle += 1;    //create the down motion, which is rotate down. 
	}
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
		person.body.velocity.y = -230;    		// the person is going up;
		game.add.tween(person).to({angle: -20}, 100).start(); 
<<<<<<< HEAD
		person.anchor.setTo(-0.2, 0.5);   //person rotate upward;
		swoosh.play(); 
=======
		person.anchor.setTo(-0.2, 0.5); 
		swoosh.play();
		//person.play('flap');
>>>>>>> gh-pages
	}
	else {
		person.animations.stop();
	}
<<<<<<< HEAD
	// this function is the collision detection
	game.physics.arcade.overlap(person, pipes, hitPipe);
=======
	// Todo: if the person hits the floor, gameOver
	if (person.y < 0 || person.y > game.height) {
		hit.play();
		gameOver();
	} 
	// this function is the collision detection
	// console.log(game.physics.arcade.overlap(person, pipes, hitPipe));
	// console.log('==******************>', game.physics.arcade.overlap(person, pipes, hitPipe));
	game.physics.arcade.overlap(person, pipes, hitPipe);	
>>>>>>> gh-pages
}

// ===========<pipes> ===============
function spawnPipes(){
	console.log('pipes creating is called! ');
	//var pipe = pipes.getFirstExists(false);
	var ranNum = Math.floor((Math.random()*10)+1);
	if (ranNum < 3) {
		//create pipe regarding to the screen position x, and y;
		pipe = pipes.create(800, 425, 'pipeUp');
		pipeDown = pipes.create(800, 0, 'pipeDown');
		// both pipes are moving at the same speed;
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else if (ranNum < 5) {
		pipe = pipes.create(800, 375, 'pipeUp');
		pipeDown = pipes.create(800, -50, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else if (ranNum < 7) {
		pipe = pipes.create(800, 325, 'pipeUp');
		pipeDown = pipes.create(800, -100, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else if (ranNum < 9) {
		pipe = pipes.create(800, 275, 'pipeUp');
		pipeDown = pipes.create(800, -150, 'pipeDown');
		pipe.body.velocity.x = -130;
		pipeDown.body.velocity.x = -130;
	}else if (ranNum < 11) {
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


function addScore(){
	// console.log('================>', game.physics.arcade.overlap(person, pipes, hitPipe));
	if (person.y < 0 || person.y > game.height || game.physics.arcade.overlap(person, pipes, hitPipe)) {
		return person.score;
	} else {
		setTimeout(function() { person.score += 1 }, 3500);
	};
//	person.score += amount;
	scoreText.text = 'Score: ' + person.score.toString();
}


function hitPipe(){
	console.log('hit');
	hit.play();
	person.kill();
	gameOver();
}

function addScore(num){
	person.score += num;
	scoreText.text = 'Score: ' + person.score.toString();
}

function gameOver() {
	music.pause();
	localStorage.setItem('bestScore', Math.max(person.score, person.topScore));
	game.paused = true;
	if (person.score >= 100) {
		swal({
		title: 'You Win!',
		text: 'Thanks for playing!',
		type: 'warning', 
		showCancel: false,
		confirmButtonText: 'Awesome',
		closeOnConfirm: true
	}); }
	 else {
	swal({
		title: 'Great job!',
		text: 'Thanks for playing, you can do better!',
		type: 'warning', 
		showCancel: false,
		confirmButtonText: 'Cool',
		closeOnConfirm: true
	});
}
	//game.time.events.stop();
	//gameOverText = game.add.text(300, 200, 'Score: ' + player.score.toString(), {font: '45px oblique', fill: '#fff'});
}







