//2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus.
//2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą.
//2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
//2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.


class Rectangle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    } n


    getWidth() {
        return this.width
    };
    setWidth(newWidth) {
        this.width = newWidth
    }

    getHeight() {
        return this.height
    };
    setHeight(newHeight) {
        this.height = newHeight
    }

    getColor() {
        return this.color
    };
    setColor(newColor) {
        this.color = newColor
    };
    area() {
        return this.width * this.height
    }
    perimeter() {
        return this.width * 2 + this.height * 2
    }
};


let shape1 = new Rectangle(10, 20, 0);
console.log(shape1);
console.log(shape1.area());
console.log(shape1.perimeter());



//3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus.
//3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y)
//3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    coordinates() {
        return `${this.x};${this.y}`
    }
    
        
        static distance(a, b){
            const atstumas=a.x-b.x;
            const atstumas2=a.y-b.y;
       
        return Math.hypot(atstumas, atstumas2)
    }
}
let figura = new Point(2, 5);
console.log(figura);
console.log(figura.coordinates())
console.log(Point.distance(new Point(0,0), figura));



//4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus.
//4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
//4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
//4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.

class Rectangle_3D {
    constructor(width, height, depth) {
        this.width = width
        this.height = height
        this.depth = depth
    }
    volume() {
        return 2*(this.width*this.height + this.width*this.depth+ this.depth*this.height)
    }
    surfaceArea() {
        return 4*(this.width+this.height+this.depth)
    }
}
let staciakampisGret= new Rectangle_3D(5, 2, 6);
console.log(staciakampisGret)
console.log(staciakampisGret.volume())
console.log(staciakampisGret.surfaceArea())