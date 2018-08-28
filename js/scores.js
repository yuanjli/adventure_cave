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