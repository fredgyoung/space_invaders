const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

canvas.width = innerWidth; // window.innerWidth;
canvas.height = innerHeight; // window.innerHeight;

class Player {
    constructor() {
        this.velocity = {x: 0, y: 0};
        
        const image = new Image();
        image.src = './img/spaceship.png';

        image.onload = () => {
            const scale = 0.15;
            this.image = image;
            this.width = image.width * scale;
            this.height = image.height * scale;
            this.position = {
                x: (canvas.width - this.width) / 2, 
                y: canvas.height - this.height - 20
            };
        }
    }

    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
        if (this.image) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}

function animate() {
    requestAnimationFrame(animate);

    // Draw background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw player and enemies
    player.draw();
}

const player = new Player();
animate();




