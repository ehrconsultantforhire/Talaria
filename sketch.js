var l3,lbo1,lbo2,lbu,ll,lp,lr,ls;
let i = 0;
var collist = [];


var gp;

function preload() {
    l3 = loadImage('A/3a.png');
    lbo1 = loadImage('A/3bottom1.png');
    lbo2 = loadImage('A/3bottom2.png');
    lbu = loadImage('A/3bucklees.png');
    ll = loadImage('A/3laces.png');
    lp = loadImage('A/3padding.png');
    lr = loadImage('A/3ared.png');
    ls = loadImage('A/3side.png');
}

function setup() {
    frameRate(1);
    createCanvas(1500, 1500);
    //noLoop();
}
var r,g,b;
var collist = [];
function raimg(img,f){
    if(f==0)
    {
    image(img, 0, 0, img.width, img.height);
    r = int(Math.random() * (255));
    g = int(Math.random() * (255));
    b =int(Math.random() * (255));
    collist.push([r,g,b]);
    img.loadPixels();
        for (var y = 0; y < img.height; y++) {
            for (var x = 0; x < img.width; x++) {
              var index = (x + y * img.width)*4;
              img.pixels[index+0] = r;
              img.pixels[index+1] = g;
              img.pixels[index+2] = b;
        }
      }
      img.updatePixels();
    }
    else if (f==1)
    {
        image(img, 0, 0, img.width, img.height);
        r = (3*r)/4;
        g = (3*g)/4;
        b =(3*b)/4;
        img.loadPixels();
        collist.push([r,g,b]);
            for (var y = 0; y < img.height; y++) {
                for (var x = 0; x < img.width; x++) {
                  var index = (x + y * img.width)*4;
                  img.pixels[index+0] = r;
                  img.pixels[index+1] = g;
                  img.pixels[index+2] = b;
                  //img.pixels[index+3] = 100;
            }
          }
          img.updatePixels();
    }

}
function draw() {
    randomSeed(frameCount);
    console.log(frameCount);
    collist = [];
     r = int(Math.random() * (255));
     g = int(Math.random() * (255));
     b =int(Math.random() * (255));
    background(r,g,b);
    collist.push([r,g,b]);
    
    image(l3,0,0,l3.width,l3.height);
    raimg(lbo1,0);
    raimg(lbo2,1);
    raimg(lbu,0);
    raimg(ll,0);
    raimg(lp,0);
    raimg(lr,0);
    raimg(ls,0);
    var rgblist = [];
    for(i=0;i<collist.length;i++)
    {
        rgblist.push(str(str(collist[i][0])+" "+ str(collist[i][1])+" "+str(collist[i][2])));
    }
    var name = str("bg-"+rgblist[0]+" "+"bottom-"+rgblist[1]+" "+"bottomengraving-"+rgblist[2]+" "+"buckles-"+rgblist[3]+" "+"laces-"+rgblist[4]+" "+"padding-"+rgblist[5]+" "+"red-"+rgblist[6]+" "+"side-"+rgblist[7]);
    console.log(name);
    saveCanvas(name, 'png');
}
