class Book {
    constructor(public title: string, public pageCount: number, public genre: string) {}
}
let newBookAladdin= new Book("Aladdin", 250, "Fantasy");
let newBookPirate= new Book("Pirates of the Caribbean", 450, "Adventures");
let newBookHP= new Book("Harry Potter", 205, "Fantasy");

class Author {
    constructor(public name: string, public age: number,) {}
}

class bigBook {
    constructor(public title: string, public pageCount: number, public genre: string, public authors: Author[]) {}
}
let author1 = new Author('Antoine Gallant', 64);
let author2 = new Author('Liz Braswell', 24);
let author3 = new Author('J. K. Rowling', 48);

let newBook_Aladdin = new bigBook("Aladdin", 250, "Fantasy", [author1]);
let newBook_pirate = new bigBook("Pirates of the Caribbean", 450, "Fantasy", [author2]);
let newBook_HP = new bigBook("Harry Potter", 205, "Fantasy", [author3]);

////////////////////////////////////////////////////////////////////////////////////////////////////

class User {
    constructor(public name: string, public username: string, public password: string) {}
}
let usersArrayNew: User[] = [
    new User('Andrii', 'kiko', 'qwerty'),
    new User('Olga', 'Lola', '123456'),
    new User('Micha', 'Muha', 'adidas'),
    new User('Vasya', 'Biba', 'bibs0'),
    new User('Ivan', 'Van_s', 'vasb4'),
    new User('Micha', 'Mqww', 'v784'),
    new User('Andrew', 'andre', 'v784'),
    new User('Micha', 'Muha', '5a78a'),
    new User('Alex', 'Ax', '5a78a'),
    new User('Vitalik', 'Vitya', 'qwer_78$')
];
console.log(usersArrayNew[0]["password"]);
console.log(usersArrayNew[1]["password"]);
console.log(usersArrayNew[2]["password"]);
console.log(usersArrayNew[3]["password"]);
console.log(usersArrayNew[4]["password"]);
console.log(usersArrayNew[5]["password"]);
console.log(usersArrayNew[6]["password"]);
console.log(usersArrayNew[7]["password"]);
console.log(usersArrayNew[8]["password"]);
console.log(usersArrayNew[9]["password"]);
////////////////////////////////////////////////////////////////////////////////////////////////////

class Course {
    constructor(public title: string, public monthDuration: number) {}
}
let newCoursesAndDurationArray: Course[] = [
    new Course('JavaScript Complex', 5),
    new Course('Java Complex', 6),
    new Course('Python Complex', 6),
    new Course('QA Complex', 4),
    new Course('FullStack', 7),
    new Course('Frontend', 4),
];
if(newCoursesAndDurationArray[0].monthDuration > 5){
    console.log(newCoursesAndDurationArray[0].title + ' Супер');
}
if(newCoursesAndDurationArray[1].monthDuration > 5){
    console.log(newCoursesAndDurationArray[1].title + ' Супер');
}
if(newCoursesAndDurationArray[2].monthDuration > 5){
    console.log(newCoursesAndDurationArray[2].title + ' Супер');
}
if(newCoursesAndDurationArray[3].monthDuration > 5){
    console.log(newCoursesAndDurationArray[3].title + ' Супер');
}
if(newCoursesAndDurationArray[4].monthDuration > 5){
    console.log(newCoursesAndDurationArray[4].title + ' Супер');
}
if(newCoursesAndDurationArray[5].monthDuration > 5){
    console.log(newCoursesAndDurationArray[5].title + ' Супер');
}
////////////////////////////////////////////////////////////////////////////////////////////////////

class Product {
    constructor(public title: string, public price: number, public image: string) {}
}
let newProducts: Product[]= [
    new Product('milk', 22, 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'),
    new Product('juice', 27, 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'),
    new Product('tomato', 47, 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'),
    new Product('tea', 15, 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'),
];
for (let product of newProducts) {
    document.write(`
         <div class="product-card">
                <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                <img src="${product.image}" alt="" class="product-image">
        </div>
  `);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//є масив
class newUser {
    constructor(public name: string, public age: number, public status: boolean) {}
}
let newUsers: newUser[] = [
    new newUser('vasya', 31, false),
    new newUser('petya', 30, true),
    new newUser('kolya', 29, true),
    new newUser('olya', 28, false),
    new newUser('max', 30, true),
    new newUser('anya', 31, false),
    new newUser('oleg', 28, false),
    new newUser('andrey', 29, true),
    new newUser('masha', 30, true),
    new newUser('olya', 31, false),
    new newUser('max', 31, true),
];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
console.log('Користувачі зі статусом true');
for (let userStatus of newUsers){
    if (userStatus.status){
        console.log(userStatus);
    }
}
//  - користувачів зі статусом false
console.log('Користувачі зі статусом false');
for (let userStatus of newUsers){
    if (userStatus.status === false){
        console.log(userStatus);
    }
}
//  - користувачів які старші за 30 років
console.log('Користувачі які старші за 30 років');
for (let userAge of newUsers){
    if (userAge.age > 30){
        console.log(userAge);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
class newProduct {
    constructor(public id: number, public title: string, public age: number) {}
}
let oldProducts: newProduct[] = [
    new newProduct(1, 'milk', 20),
    new newProduct(2, 'meat', 22),
    new newProduct(3, 'banana', 45),
    new newProduct(4, 'water', 78),
];

function getProducts(arrayProducts: newProduct[]):void{
    for (const arrayProduct of arrayProducts) {
        document.write(`
            <div>
                <h2>${arrayProduct.id} -  ${arrayProduct.title}</h2>
                <p>Product age - ${arrayProduct.age}</p>
            </div>
        `);
    }
}
getProducts(oldProducts);

////////////////////////////////////////////////////////////////////////////////////////////////////

class Currency{
    constructor( public currency: string, public value: number) {}
}
class CurrencyExchange {
    constructor(public currencyValues: Currency[]) {}

    exchange(sumUAH: number, exchangeCurrency: string): number {
        let changeCurrency: Currency | undefined;
        for (const itemValues of this.currencyValues) {
            if (itemValues.currency === exchangeCurrency) {
                changeCurrency = itemValues;
            }
        }

        if (changeCurrency) {
            return sumUAH / changeCurrency.value;
        } else {
            throw new Error(`Currency ${exchangeCurrency} not found.`);
        }
    }
}

const currencyValues = [
    new Currency('USD', 25),
    new Currency('EUR', 42)
];

const currencyExchange = new CurrencyExchange(currencyValues);

console.log(currencyExchange.exchange(10000, 'USD'));

////////////////////////////////////////////////////////////////////////////////////////////////////

class Card {
    constructor(public cardSuit: string, public value: string, public color?: string) {}
}

class Deck {
    cards: Card[] = [];

    constructor(cardSuits: string[], values: string[]) {
        this.initializeDeck(cardSuits, values);
    }

    private initializeDeck(cardSuits: string[], values: string[]): void {
        for (const cSuit of cardSuits) {
            for (const value of values) {
                let card: Card = new Card(cSuit, value);
                card.color = (cSuit === 'heart' || cSuit === 'diamond') ? 'red' : 'black';
                this.cards.push(card);
            }
        }
    }

    findAceOfSpades(): Card[] {
        return this.cards.filter(card => card.value === 'ace' && card.cardSuit === 'spade');
    }

    findAllSixes(): Card[] {
        return this.cards.filter(card => card.value === '6');
    }

    findRedCards(): Card[] {
        return this.cards.filter(card => card.color === 'red');
    }

    findClubs(): Card[] {
        return this.cards.filter(card => card.cardSuit === 'clubs');
    }

    findHigherClubs(): Card[] {
        return this.cards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7'
            && card.value !== '8' && card.value !== '9');
    }
}
const newCardSuits = ['heart', 'diamond', 'spade', 'club'];
const newValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deck = new Deck(newCardSuits, newValues);

console.log(deck.findAceOfSpades());
console.log(deck.findAllSixes());
console.log(deck.findRedCards());
console.log(deck.findClubs());
console.log(deck.findHigherClubs());
////////////////////////////////////////////////////////////////////////////////////////////////////

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
class CardsObject {
    constructor(public newSpades: string[], public newDiamonds: string[], public newHearts: string[], public newClubs: string[]) {}
}
let NewCards: Card[] = [
    new Card('spade', 'ace'),
    new Card('heart', '7'),
    new Card('diamond', 'queen'),
    new Card('clubs', '10'),
    new Card('spade', 'king')
];

let newCardsObject: CardsObject = NewCards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card.value);
            break;
        case 'diamond':
            accum.diamonds.push(card.value);
            break;
        case 'heart':
            accum.hearts.push(card.value);
            break;
        case 'clubs':
            accum.clubs.push(card.value);
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(newCardsObject);


////////////////////////////////////////////////////////////////////////////////////////////////////

//взяти з arrays.js масив coursesArray
class CoursesArray{
    constructor( public title: string, public monthDuration: number, public hourDuration: number, public modules: string[]) {}
}
let newCoursesArray: CoursesArray[] = [
    new CoursesArray('JavaScript Complex', 5, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']),
    new CoursesArray('Java Complex', 6, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']),
    new CoursesArray('Python Complex', 6, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']),
    new CoursesArray('QA Complex', 4, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']),
    new CoursesArray('FullStack', 7, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']),
    new CoursesArray('Frontend', 4, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'])
];

// --написати пошук всіх об'єктів, в яких в modules є sass
console.log(newCoursesArray.filter((modules:CoursesArray) => modules.modules.includes('sass')));
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log(newCoursesArray.filter((modules:CoursesArray) => modules.modules.includes('docker')));
////////////////////////////////////////////////////////////////////////////////////////////////////