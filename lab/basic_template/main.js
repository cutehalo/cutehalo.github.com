// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() {  
	    // Change the background color of the game
	    this.game.stage.backgroundColor = '#71c5cf';

	    // Load the bird sprite
	    this.game.load.image('bird', 'assets/bird.png'); 
	    this.game.load.image('pipe', 'assets/pipe.png');  
	},

	create: function() {  
	    // Display the bird on the screen
	    this.bird = this.game.add.sprite(100, 245, 'bird');

	    // Add gravity to the bird to make it fall
	    this.bird.body.gravity.y = 1000;  
	    this.pipes = game.add.group();  
		this.pipes.createMultiple(20, 'pipe');  
	    // Call the 'jump' function when the spacekey is hit
	    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    space_key.onDown.add(this.jump, this);     
	    this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);  
	},

	update: function() {  
	    // If the bird is out of the world (too high or too low), call the 'restart_game' function
	    if (this.bird.inWorld == false)
	        this.restart_game();
	},

	jump: function() {  
	    // Add a vertical velocity to the bird
	    this.bird.body.velocity.y = -350;
	},

	// Restart the game
	restart_game: function() {  
	    // Start the 'main' state, which restarts the game
	    this.game.state.start('main');
	    this.game.time.events.remove(this.timer);  
	},
	add_one_pipe: function(x, y) {  
	    // Get the first dead pipe of our group
	    var pipe = this.pipes.getFirstDead();

	    // Set the new position of the pipe
	    pipe.reset(x, y);

	    // Add velocity to the pipe to make it move left
	    pipe.body.velocity.x = -300; 

	    // Kill the pipe when it's no longer visible 
	    pipe.outOfBoundsKill = true;
	},
	add_row_of_pipes: function() {  
	    var hole = Math.floor(Math.random()*5)+1;

	    for (var i = 0; i < 8; i++)
	        if (i != hole && i != hole +1) 
	            this.add_one_pipe(400, i*60+10);   
	},
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.start('main'); 