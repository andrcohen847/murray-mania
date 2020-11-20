import Phaser from "phaser";

export function preload() {
  this.load.image("sky", "assets/snow.png");
  this.load.image("ground", "assets/ice.png");
  this.load.image("groundhog", "assets/ghog.png");
  this.load.image("ghost", "assets/slimer.png");
  this.load.spritesheet("bill", "assets/Bill-Sprite.png", {
    frameWidth: 33,
    frameHeight: 48
  });
}

let player;
let groundhogs;
let ghosts;
let platforms;
let cursors;
let score = 0;
let gameOver = false;
let scoreText;

export function create() {
  //adds background sky image
  this.add.image(400, 300, "sky");

  //PLATFORMS

  platforms = this.physics.add.staticGroup();

  platforms
    .create(400, 568, "ground")
    .setScale(2)
    .refreshBody();

  platforms.create(600, 400, "ground");
  platforms.create(50, 250, "ground");
  platforms.create(750, 220, "ground");

  //PLAYER

  player = this.physics.add.sprite(100, 450, "bill");

  player.setBounce(0.2);

  player.setCollideWorldBounds(true);

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("bill", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "bill", frame: 4 }],
    frameRate: 20
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("bill", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });

  //INPUT EVENTS

  cursors = this.input.keyboard.createCursorKeys();

  //GROUNDHOGS

  groundhogs = this.physics.add.group({
    key: "groundhog",
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });

  groundhogs.children.iterate(function(child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });

  //GHOSTS

  //adding another group for the ghost bad guys
  ghosts = this.physics.add.group();

  //SCORE

  scoreText = this.add.text(16, 16, "score: 0", {
    fontSize: "32px",
    fill: "#000"
  });

  //COLLIDERS

  this.physics.add.collider(player, platforms);

  this.physics.add.collider(groundhogs, platforms);

  this.physics.add.collider(ghosts, platforms);

  //OVERLAPS

  this.physics.add.overlap(player, groundhogs, collectGroundhog, null, this);

  this.physics.add.collider(player, ghosts, hitGhost, null, this);
}

export function update() {
  //if gameOver, return to start.
  if (gameOver) {
    return;
  }

  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("turn");
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}

function collectGroundhog(player, groundhog) {
  groundhog.disableBody(true, true);
  score += 10;
  scoreText.setText("Score: " + score);

  if (groundhogs.countActive(true) === 0) {
    groundhogs.children.iterate(function(child) {
      child.enableBody(true, child.x, 0, true, true);
    });

    let x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);

    let ghost = ghosts.create(x, 16, "ghost");
    ghost.setBounce(1);
    ghost.setCollideWorldBounds(true);
    ghost.setVelocity(Phaser.Math.Between(-200, 200), 20);
    ghost.allowGravity = false;
  }
}

function hitGhost(player, ghost) {
  this.physics.pause();
  player.setTint(0xff0000);
  player.anims.play("turn");
  gameOver = true;
}
