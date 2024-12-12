//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfRectangleTS(a:number, b:number):number{
    return a * b;
}
console.log(areaOfRectangleTS(4,5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircleTS(r:number):number{
    return 3.14 * (r * r);
}
console.log(areaOfCircleTS(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function areaOfCylinderTs(H:number, R:number):number{
    return 2 * 3.14 * R*(H + R);
}
console.log(areaOfCylinderTs(5, 7));

//- створити функцію яка приймає масив та виводить кожен його елемент
function printerArrayTs(array:(number | string)[]):void{
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
printerArrayTs(['test', 4, 12, 'tesdfdf', 14]);

//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writeParagraphTs(textParagraph:string):void {
    document.write(
        `<p>${textParagraph}</p>`
    )
}
writeParagraphTs('Створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент');

//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function writeUlTs(textUl:string):void {
    document.write(
        `<ul>
            <li>${textUl}</li>
            <li>${textUl}</li>
            <li>${textUl}</li> 
        </ul>`
    )
}
writeUlTs('Текст li');

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function createdUlTs(textUl:string, countLi:number):void {
    let ulContent = `<ul>`;
    for (let i = 0; i < countLi; i++) {
        ulContent += `<li>${textUl}</li>`;
    }
    ulContent += `</ul>`;
    document.write(ulContent);
}
createdUlTs('Текст li', 10);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// (ul li) та виводить його через document.write
function getArrayTs(array:(string|boolean|number)[]):void {
    let ulContent = `<ul>`;
    for (const arrayElement of array) {
        ulContent += `<li>${arrayElement}</li>`;
    }
    ulContent += `</ul>`;
    document.write(ulContent);
}
getArrayTs(['test', 4, 12, 'tesdfdf', 14, true, 1242, 'master', false]);

//- створити функцію яка приймає масив об'єктів з наступними полями id, name, age та виводить їх в документ.
// Для кожного об'єкту окремий блок.
interface ProductInt {
    id: number;
    title: string;
    age: number;
}
let productsIn: ProductInt[] = [
    { id: 1, title: 'milk', age: 20 },
    { id: 2, title: 'meat', age: 22 },
    { id: 3, title: 'banana', age: 45 },
    { id: 4, title: 'water', age: 78 },
];

function displayProducts(productsIn: ProductInt[]): void {
    const container = document.getElementById('product-container');

    if (container) {
        productsIn.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h2>${product.id} - ${product.title}</h2>
                <p>Product age - ${product.age}</p>
            `;
            container.appendChild(productDiv);
        });
    }
}
displayProducts(productsIn);

// - створити функцію яка повертає найменьше число з масиву
// function getMinNumber(arrayNumber){
//     return Math.min(...arrayNumber);
// }
function getMinNumberTs(arrayNumber: number[]):number{
    let min:number = arrayNumber[0];
    for (let i:number = 1; i < arrayNumber.length; i++) {
        if (arrayNumber[i] < min) {
            min = arrayNumber[i];
        }
    }
    return min;
}
console.log(getMinNumberTs([5, 2, 9, 1, -3, 10]));

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sumTs(arr:number[]):number{
    let sumArr:number = 0;
    for (const arrElement of arr) {
        sumArr += arrElement;
    }
    return sumArr;
}
console.log(sumTs([1,2,10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swapTs(arr:number[], index1:number, index2:number):number[]{
    let temp:number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}
console.log(swapTs([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
interface Currency{
    currency:string,
    value:number
}
function exchangeTs(sumUAH:number, currencyValues:Currency[], exchangeCurrency:string):number{
    let changeCurrency: Currency | undefined;
    for (const itemValues of currencyValues) {
        if (itemValues.currency === exchangeCurrency){
            changeCurrency = itemValues;
        }
    }
    if (changeCurrency) {
        return sumUAH / changeCurrency.value;
    } else {
        throw new Error(`Currency ${exchangeCurrency} not found.`);
    }
}

console.log(exchangeTs(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));