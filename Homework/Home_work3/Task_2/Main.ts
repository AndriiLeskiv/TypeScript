type Book = {
    title: string;
    pageCount: number;
    genre: string;
};

const newBookAladdin: Book = { title: "Aladdin", pageCount: 250, genre: "Fantasy" };
const newBookPirate: Book = { title: "Pirates of the Caribbean", pageCount: 450, genre: "Adventures" };
const newBookHP: Book = { title: "Harry Potter", pageCount: 205, genre: "Fantasy" };

type Author = {
    name: string;
    age: number;
};

type BigBook = {
    title: string;
    pageCount: number;
    genre: string;
    authors: Author[];
};

const author1: Author = { name: 'Antoine Gallant', age: 64 };
const author2: Author = { name: 'Liz Braswell', age: 24 };
const author3: Author = { name: 'J. K. Rowling', age: 48 };

const newBook_Aladdin: BigBook = { title: "Aladdin", pageCount: 250, genre: "Fantasy", authors: [author1] };
const newBook_pirate: BigBook = { title: "Pirates of the Caribbean", pageCount: 450, genre: "Fantasy", authors: [author2] };
const newBook_HP: BigBook = { title: "Harry Potter", pageCount: 205, genre: "Fantasy", authors: [author3] };
////////////////////////////////////////////////////////////////////////////////////////////////////

type User = {
    name: string;
    username: string;
    password: string;
};
const usersArrayNew: User[] = [
    { name: 'Andrii', username: 'kiko', password: 'qwerty' },
    { name: 'Olga', username: 'Lola', password: '123456' },
    { name: 'Micha', username: 'Muha', password: 'adidas' },
    { name: 'Vasya', username: 'Biba', password: 'bibs0' },
    { name: 'Ivan', username: 'Van_s', password: 'vasb4' },
    { name: 'Micha', username: 'Mqww', password: 'v784' },
    { name: 'Andrew', username: 'andre', password: 'v784' },
    { name: 'Micha', username: 'Muha', password: '5a78a' },
    { name: 'Alex', username: 'Ax', password: '5a78a' },
    { name: 'Vitalik', username: 'Vitya', password: 'qwer_78$' },
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

type Course = {
    title: string;
    monthDuration: number;
};
const newCoursesAndDurationArray: Course[] = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 },
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
type Product = {
    title: string;
    price: number;
    image: string;
}

const newProductsType: Product[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg',
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg',
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74',
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png',
    },
];

for (let product of newProductsType) {
    document.write(`
         <div class="product-card">
                <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                <img src="${product.image}" alt="" class="product-image">
        </div>
  `);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//є масив
type UserType = {
    name: string;
    age: number;
    status: boolean;
};
let newUserType: UserType[] = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true },
];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
console.log('Користувачі зі статусом true');
for (let userStatus of newUserType){
    if (userStatus.status){
        console.log(userStatus);
    }
}
//  - користувачів зі статусом false
console.log('Користувачі зі статусом false');
for (let userStatus of newUserType){
    if (userStatus.status === false){
        console.log(userStatus);
    }
}
//  - користувачів які старші за 30 років
console.log('Користувачі які старші за 30 років');
for (let userAge of newUserType){
    if (userAge.age > 30){
        console.log(userAge);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
type newProductType = {
    id: number;
    title: string;
    age: number;
}
let oldProductsType: newProductType[] = [
    { id: 1, title: 'milk', age: 20 },
    { id: 2, title: 'meat', age: 22 },
    { id: 3, title: 'banana', age: 45 },
    { id: 4, title: 'water', age: 78 },
];

function getProducts(arrayProducts: newProductType[]):void{
    for (const arrayProduct of arrayProducts) {
        document.write(`
            <div>
                <h2>${arrayProduct.id} -  ${arrayProduct.title}</h2>
                <p>Product age - ${arrayProduct.age}</p>
            </div>
        `);
    }
}
getProducts(oldProductsType);

////////////////////////////////////////////////////////////////////////////////////////////////////

type Currency = {
    currency: string;
    value: number;
}
type CurrencyExchange = {
    currencyValues: Currency[];
    exchange: (sumUAH: number, exchangeCurrency: string) => number;
};
const createCurrencyExchange = (currencyValues: Currency[]): CurrencyExchange => {
    return {
        currencyValues,
        exchange(sumUAH: number, exchangeCurrency: string): number {
            const changeCurrency = this.currencyValues.find(
                (item) => item.currency === exchangeCurrency
            );

            if (changeCurrency) {
                return sumUAH / changeCurrency.value;
            } else {
                throw new Error(`Currency ${exchangeCurrency} not found.`);
            }
        },
    };
};

const currencyValues: Currency[] = [
    { currency: 'USD', value: 25 },
    { currency: 'EUR', value: 42 },
];

const currencyExchange = createCurrencyExchange(currencyValues);
console.log(currencyExchange.exchange(10000, 'USD'));
////////////////////////////////////////////////////////////////////////////////////////////////////

let cardSuits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
let values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

type Card = {
    cardSuit: string;
    value: string;
    color?: string;
}

let cards: Card[] = [];
for (const cSuit of cardSuits) {
    for (const value of values) {
        let card: Card = { cardSuit: cSuit, value: value };
        card.color = (cSuit === 'heart' || cSuit === 'diamond') ? 'red' : 'black';
        cards.push(card);
    }
}
console.log(cards);
console.log(cards.filter((oneCard: Card) => oneCard.value === 'ace' && oneCard.cardSuit === 'spade'));

//  - всі шістки
console.log(cards.filter((oneCard: Card) => oneCard.value === '6'));

//  - всі червоні карти
console.log(cards.filter((oneCard: Card) => oneCard.color === 'red'));

//  - всі буби
console.log(cards.filter((oneCard: Card) => oneCard.cardSuit === 'clubs'));

//  - всі трефи від 9 та більше
console.log(cards.filter((oneCard: Card) => oneCard.cardSuit === 'clubs' && (oneCard.value !== '6' && oneCard.value !== '7'
    && oneCard.value !== '8' && oneCard.value !== '9')));

////////////////////////////////////////////////////////////////////////////////////////////////////

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
interface CardsObject {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}

let cardsObject: CardsObject = cards.reduce((accum, card: Card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(cardsObject);

////////////////////////////////////////////////////////////////////////////////////////////////////

//взяти з arrays.js масив coursesArray
type CoursesArrayType = {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}
let coursesArrayType:CoursesArrayType[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass
console.log(coursesArrayType.filter((modules: CoursesArrayType) =>
    modules.modules.some(module => module === 'sass')
));
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log(coursesArrayType.filter((modules: CoursesArrayType) =>
    modules.modules.some(module => module === 'docker')
));
////////////////////////////////////////////////////////////////////////////////////////////////////