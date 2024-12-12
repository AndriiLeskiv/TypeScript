//- Знайти та вивести довжину наступних стрінгових значень
//  'hello world', 'lorem ipsum', 'javascript is cool'
let strFixed:string[] = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let string of strFixed) {
    console.log(string.length);
}

//- Перевести до великого регістру наступні стрінгові значення
//  'hello world', 'lorem ipsum', 'javascript is cool'
for (let string of strFixed) {
    console.log(string.toUpperCase());
}

//- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strFixedUpper:string[] = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (let string of strFixedUpper) {
    console.log(string.toLowerCase());
}

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str:string = ' dirty string   '
console.log(str.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strNew:string = 'Ревуть воли як ясла повні';
function stringToarray(strNew:string):string[]{
    return strNew.split(' ');
}
console.log(stringToarray(strNew));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити всі об'єкти в масиві на стрінгові.
let arrMap:number[] = [10,8,-7,55,987,-1011,0,1050,0];
let arrMapString:string[] = arrMap.map((arrMapMew:number):string=>{
    return arrMapMew + '';
})
console.log(arrMapString);

//- створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
let nums:number[] = [11, 21, 3];
function sortNums(array:number[], direction:string):number[]{
    if (direction === 'ascending'){
        return array.sort((a:number, b:number):number=> a - b);
    }
    if (direction === 'descending'){
        return array.sort((a:number, b:number):number=> b - a);
    }
}
console.log(sortNums(nums,'ascending')); // [3,11,21]
console.log(sortNums(nums,'descending')); // [21,11,3]

//- є масив
interface Course {
    title: string;
    monthDuration: number;
}
let coursesAndDurationArrayTwo: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
let sortArray:Course[] = coursesAndDurationArrayTwo.sort( (monthDuration1:Course, monthDuration2:Course):number =>{
    return monthDuration2.monthDuration - monthDuration1.monthDuration;
})
console.log(sortArray);

//  -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
let filteredArray:Course[] =  coursesAndDurationArrayTwo.filter((value:Course):boolean => value.monthDuration > 5);
console.log(filteredArray);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapArray:{ id: number; title: string; monthDuration: number }[]  = coursesAndDurationArrayTwo.map(function (value:Course, index:number){
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log(mapArray);

// не знаю чи це окремо потрібно фільтрувати чи все до одночасно
let coursesAndDurationArrayNew:Course[] = coursesAndDurationArrayTwo
    .sort((monthDuration1:Course, monthDuration2:Course):number => monthDuration2.monthDuration - monthDuration1.monthDuration)
    .filter((value:Course):boolean => value.monthDuration > 5)
    .map(function (value:Course, index:number){
        return {
            id: index + 1,
            title: value.title,
            monthDuration: value.monthDuration
        }
    })
console.log(coursesAndDurationArrayNew);

// описати колоду карт (від 6 до туза без джокерів)
let cardSuits:string[] = ['spade', 'diamond', 'heart', 'clubs'];
let values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

interface Card {
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
//  - знайти піковий туз
console.log(cards.find((oneCard:Card) => oneCard.value === 'ace' && oneCard.cardSuit === 'spade'));
//  - всі шістки
console.log(cards.filter((oneCard:Card) => oneCard.value === '6'));
//  - всі червоні карти
console.log(cards.filter((oneCard:Card) => oneCard.color === 'red'));
//  - всі буби
console.log(cards.filter((oneCard:Card) => oneCard.cardSuit === 'clubs'));
//  - всі трефи від 9 та більше
console.log(cards.filter((oneCard:Card) => oneCard.cardSuit === 'clubs' && (oneCard.value !== '6' && oneCard.value !== '7'
    && oneCard.value !== '8' && oneCard.value !== '9')));

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
interface CardsObject {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}
let cardsObject:CardsObject = cards.reduce((accum, card:Card)=> {
    switch (card.cardSuit){
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
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(cardsObject);

//взяти з arrays.js масив coursesArray
interface CoursesArray{
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}
let coursesArray:CoursesArray[] = [
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
console.log(coursesArray.filter((modules:CoursesArray) => modules.modules.includes('sass')));
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log(coursesArray.filter((modules:CoursesArray) => modules.modules.includes('docker')));