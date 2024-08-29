class Example extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("cat", "assets/cat.png");
    this.load.image("pendant1", "assets/necklace.png");
  }

  create() {
    const cat = this.add.image(500, 400, "cat"); // Add the image at position (400, 300)
    cat.setScale(0.9);
    const pendant = this.add.image(500, 400, "pendant1").setInteractive();
    this.input.setDraggable(pendant);
    this.makeDraggable(pendant);
  }
  
  makeDraggable(image) {
    this.input.setDraggable(image);

    image.on("dragstart", function (pointer) {
      this.setTint(0xff0000);
    });

    image.on("drag", function (pointer, dragX, dragY) {
      this.x = dragX;
      this.y = dragY;
    });

    image.on("dragend", function (pointer) {
      this.clearTint();
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: Example,
};

const game = new Phaser.Game(config);
