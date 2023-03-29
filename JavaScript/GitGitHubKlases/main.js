// let asmenys =[
//     {
//     vardas: "Ausra",
//     pavarde: "Orsevskiene",
//     amzius: 27
// },
// {
//     vardas: "Ona",
//     pavarde: "Onyte",
//     amzius: 25
// },
// {
//     vardas: "Kaunas",
//     pavarde: "Kauninis",
//     amzius: 35
// }
// ]

// class Asmuo{
//     constructor (vardas, pavarde, amzius){
//         this.vardas=vardas;
//         this.pavarde=pavarde;
//         this.amzius=amzius;
//     }
//     sako(){
//         return "labas";
//     }
//     pasisveikinti (vardas){
//         return `${this.vardas} pasisveikina su ${vardas} `
//     }
// }
// let asmenys1=[
//     new Asmuo ("Ausra", "Orsevskiene", 27),
// new Asmuo ("Ona", "Onyte", 25)
// ]

// console.log('class', asmenys1)

// class SuperAsmuo extends Asmuo{
//     constructor (supergalia){
//         super()
//         this.supergalia=supergalia;

//     }
// }

// let zmogusVoras=new SuperAsmuo ('Peter', 'Parker', 15, 'Voro savybes')


// class Kate{
//     sako(){
// return "miau"
//     }
// }

// let kate1=new Kate()


// function car (make, model, year){
//     return {
//         brand:make,
//         model:model,
//         year:year,
//     }
// }




class Car {
    #make; #model; #year; #color; #basePrice; #engineType; #photo
    constructor({ make, model, year, basePrice, engineType, photo }) {

        this.#make = make;
        this.#model = model;
        this.#year = year;
        this.#color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; // rgb 0-255*3
        this.#basePrice = basePrice;
        this.#engineType = engineType
        this.#photo = photo
    };

    getMake() {
        return this.#make
    }
    setMake(newMake) {
        this.#make = newMake
    }


    getModel() {
        return this.#model
    }
    setModel(newModel) {
        this.#model = newModel
    }


    getYear() {
        return this.#year
    }
    setYear(newYear) {
        this.#year = newYear
    }



    getColor() {
        return this.#color
    }
    setColor(newColor) {
        this.#color = newColor
    }

    getEngineType() {
        return this.#engineType
    }

    setEngineType(newEngineType) {
        this.#engineType = newEngineType
    }
    getBasePrice() {
        return this.#basePrice;
    }
    getPrice() {
        switch (this.#engineType) {
            case 'gas':
                return this.#basePrice + 500
            case 'petrol':
                return this.#basePrice + 600
            case 'electric':
                return this.#basePrice + 2500
            default:
                return this.#basePrice
        }
    }
    getPhoto() {
        return this.#photo
    }

    setPhoto(newPhoto) {
        this.#photo = newPhoto
    }

    turnEngineOn() {
        return "Vroom"
    }
    getCarAge() {
        return new Date().getFullYear() - this.#year
    }
}

const cars = [
    ({
        make: "VolksWagen",
        model: "Passat",
        year: 2005,
        basePrice: 500,
        engineType: 'gas',
        photo: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200'
    }),
    ({
        make: "Audi",
        model: "TT",
        year: 2010,
        basePrice: 1200,
        engineType: 'petrol',
        photo: 'https://media.wired.co.uk/photos/63b8c50e7d4b632fbb395e37/16:9/w_2400,h_1350,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg'
    }),
    ({
        make: "BMW",
        model: "6",
        year: 2015,
        basePrice: 3400,
        engineType: 'electric',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhERHfLPJivEihBofpV7srogqfhq2SFMFgWA&usqp=CAU'
    }),
    ({
        make: "Fiat",
        model: "Punto",
        year: 2001,
        basePrice: 400,
        engineType: 'petrol',
        photo: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/range-rover-2022-001-tracking-front.jpg'
    })
]
const carsObject = cars.map(car => new Car(car)); //padarom, kad const cars objektu pavadinimai butu new car
console.log(carsObject);
// console.log(carsObject[0].#make);  //neleis, nes tai yra #privati informacija

console.log(carsObject[0].getMake()); //pasiekti galima tik per get privatu koda.

carsObject.forEach(car => {
    document.querySelector('#allCars').innerHTML += `
    <div class="car">

   <h1>${car.getMake()} ${car.getModel()} </h1>
   <img src=" ${car.getPhoto()}"alt="${car.getMake()} ${car.getModel()} photo">
    <div class="carSpecs">
        <div>
            <p>YoM: ${car.getYear()}</p>
            <p>Engine: ${car.getEngineType()}</p>
            <p>Color: <span style="background-color: ${car.getColor()}"></span></p>
        </div>
    <div>
     <p>Price:   ${car.getPrice()} &euro;</p>
     </div>
     </div>
     </div>
    `});

    document.querySelector('#newCars>form').addEventListener('submit', e => {
        e.preventDefault();
        console.log(e);
        let car ={
            make:e.target.elements.make.value,
            model:e.target.elements.model.value,
            year:e.target.elements.year.valueAsNumber,
            basePrice:e.target.elements.basePrice.valueAsNumber,
            engineType:e.target.elements.engineType.value,
            photo:e.target.elements.photo.value
        };
        console.log(car);
        let coolCar=new Car(car);
        console.log(coolCar)
    
        document.querySelector('#allCars').innerHTML += `
        <div class="car">
    
       <h1>${coolCar.getMake()} ${coolCar.getModel()} </h1>
       <img src=" ${coolCar.getPhoto()}"alt="${coolCar.getMake()} ${coolCar.getModel()} photo">
        <div class="carSpecs">
            <div>
                <p>YoM: ${coolCar.getYear()}</p>
                <p>Engine: ${coolCar.getEngineType()}</p>
                <p>Color: <span style="background-color: ${coolCar.getColor()}"></span></p>
            </div>
        <div>
         <p>Price:   ${coolCar.getPrice()} &euro;</p>
         </div>
         </div>
         </div>`
    });

