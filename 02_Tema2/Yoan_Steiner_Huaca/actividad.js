const ImageHandler = require('./ImageHandler.js')


//let path = '02_Tema2/Yoan_Steiner_Huaca/input/cat.jpg';
let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);


/**
 * Ejemplo de construccion de una imagen
 */
function ejemplo() {

    let outputPath = 'output/ejemplo2.jpg';
    let pixeles = [];
    let filas = 2;
    let columnas = 2;
    for (let i = 0; i < filas; i++) {
        let nuevaFila = [];
        console.log("Fila: " + i);
        for (let j = 0; j < columnas; j++) {
            console.log("Columna:" + j)
            let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
            if ((i + j) % 2 === 0) { // Si la suma de la fila y la columna es par....
                pixel = [255, 255, 255];
            }
            console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j)
            nuevaFila.push(pixel);
        }
        console.log(nuevaFila)
        pixeles.push(nuevaFila);
    }
    console.log(pixeles);
    handler.savePixels(pixeles, outputPath, filas, columnas);
}

/**
 * Esta función debe transformar una imagen en escala de rojos.
 *
 * Una forma de conseguirlo es simplemente poner los canales G y B a 0 para cada pixel.
 */
function redConverter() {
    let outputPath = 'output/tucan_red.jpg';
    let pixels = handler.getPixels();

    pixels=modificadorRGBImagenes(pixels,1);

     handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 * 
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
    let outputPath = 'output/tucan_green.jpg';
    let pixels = handler.getPixels();

    pixels=modificadorRGBImagenes(pixels,2);

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
    let outputPath = 'output/tucan_blue.jpg';
    let pixels = handler.getPixels();

    pixels=modificadorRGBImagenes(pixels,3);

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en escala de grises.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * asignarle a cada canal de RGB esa media.
 *
 * Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y por lo tanto
 * lo debemos transformar en el pixel [140, 140, 140].
 */
function greyConverter() {
    let outputPath = 'output/tucan_grey.jpg';
    let pixels = handler.getPixels();

    pixels=modificadorRGBImagenes(pixels,4);

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
    let outputPath = 'output/tucan_black_and_white.jpg';
    let pixels = handler.getPixels();

    pixels=modificadorRGBImagenes(pixels,5);

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
    let outputPath = 'output/tucan_scale_down.jpg';
    let pixels = handler.getPixels();

    pixels=modificadorRGBImagenes(pixels,6);
    let nuevaImagen=pixels;

    handler.savePixels(nuevaImagen, outputPath, handler.getShape()[0] / 2, handler.getShape()[1] / 2);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
    let outputPath = 'output/tucan_dimed.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
    let outputPath = 'output/tucan_inverse.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo

    handler.savePixels(pixels, outputPath);
}

/**
 * merge - Junta dos imagenes con cierto factor de fusion
 * Se entrega implementado, para tomar como ejemplo
 * @param alphaFirst
 * @param alphaSecond
 */
function merge(alphaFirst, alphaSecond) {
    let catHandler = new ImageHandler('input/cat.jpg');
    let dogHandler = new ImageHandler('input/dog.jpg');
    let outputPath = 'output/merged.jpg';

    let catPixels = catHandler.getPixels();
    let dogPixels = dogHandler.getPixels();

    let pixels = [];


    for (let indiceFila = 0; indiceFila < catPixels.length; indiceFila++) {
        let fila = [];
        for (let indiceColumna = 0; indiceColumna < catPixels[indiceFila].length; indiceColumna++) {
            let pixelPerro = dogPixels[indiceFila][indiceColumna];
            let pixelGato = catPixels[indiceFila][indiceColumna];
            let nuevoPixel = [  pixelPerro[0] * alphaFirst + pixelGato[0] * alphaSecond,
                                pixelPerro[1] * alphaFirst + pixelGato[1] * alphaSecond,
                                pixelPerro[2] * alphaFirst + pixelGato[2] * alphaSecond]
            fila.push(nuevoPixel);
        }
        pixels.push(fila);
    }

    dogHandler.savePixels(pixels, outputPath);
}


/**
 * Programa de prueba
 * NO DEBES MODIFICAR ESTAS LÍNEAS DE CÓDIGO
 *
 * Ejecuta el archivo actividad.js tal como se indica en el archivo Readme.md
 * En la carpeta output/ apareceran los resultados para cada uno de los casos
 *
 *     Ejecutar ejemplo: 0
 *     Conversor a rojos: 1
 *     Conversor a verdes: 2
 *     Conversor a azules: 3
 *     Conversor a grises: 4
 *     Conversor blanco y negro: 5
 *     Redimensionar: 6
 *     Reducir brillo: 7
 *     Negativo: 8
 *     Fusion de imagenes: 9
 */
let optionN = 1;

switch (optionN) {
    case 1: redConverter(); break;
    case 2: greenConverter(); break;
    case 3: blueConverter(); break;
    case 4: greyConverter(); break;
    case 5: blackAndWhiteConverter(); break;
    case 6: scaleDown(); break;
    case 7: dimBrightness(2); break;
    case 8: invertColors(); break;
    case 9: merge(0.3, 0.7); break;
    default: ejemplo();
}


/* Código propio YSH 04/04/2023 */

function  modificadorRGBImagenes(pixelsRGB,opcion){
    
    let newResult=[];

    pixelsRGB.forEach( (subpixels,indexPixels) => {   

        subpixels.forEach((element,indexSubpixel)=>{ 

            if (opcion===6 ) {
            
                    if (indexPixels%2 + indexSubpixel%2 ===0 ) 
                    newResult.push(pixelsRGB[indexPixels][indexSubpixel]); 
            }
            else {   
                    pixelsRGB[indexPixels][indexSubpixel][0]=valoresModificar(opcion,'R', pixelsRGB[indexPixels][indexSubpixel]);
                    pixelsRGB[indexPixels][indexSubpixel][1]=valoresModificar(opcion,'G', pixelsRGB[indexPixels][indexSubpixel]);
                    pixelsRGB[indexPixels][indexSubpixel][2]=valoresModificar(opcion,'B', pixelsRGB[indexPixels][indexSubpixel]);
                 
            } 

        });
       
     });

     return resultPixelsRGB;
}

function valoresModificar(opcion,posicion,valoresInicialesRGB){
    switch (opcion) {
        case 1: posicion==='R'? valoresInicialesRGB[0]: 0 ; break;
        case 2: posicion==='G'? valoresInicialesRGB[1]: 0 ; break;
        case 3: posicion==='B'? valoresInicialesRGB[2]: 0 ; break;
        case 4: media(valoresInicialesRGB); break;
        case 5: media(valoresInicialesRGB) < 128 ? 0 : 255; break;
        /*case 6: scaleDown(); break;*/
        /*case 7: dimBrightness(2); break;
        case 8: invertColors(); break;
        case 9: merge(0.3, 0.7); break;
        default: ejemplo();*/
    }
    return result;
}

function media (valoresRGB){
    let media= ( valoresRGB[0]+
                 valoresRGB[1]+
                 valoresRGB[2] 
                ) /3;
    return media;
}