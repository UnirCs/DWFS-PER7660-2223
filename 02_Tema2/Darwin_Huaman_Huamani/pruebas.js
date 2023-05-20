const ImageHandler = require('./ImageHandler.js')


let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);

let outputPath = 'output/tucan_red.jpg';
let pixels = handler.getPixels();

for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[i].length; j++) {
        pixels[i][j][1] = 0;
        pixels[i][j][2] = 0;
    }
}
handler.savePixels(pixels, outputPath);

