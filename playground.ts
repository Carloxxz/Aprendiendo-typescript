let x: number
// x = "hola"

// let y = 1
// y = "hola2"

// let z
// z  = "hola3"
// z =  true

enum ContractStatus {
    Permant = 1, // 0 y puedes añadirle que empiece con otro valor, ahora es 1
    Temp, // 1 ahora es 2
    Apprentice // 2 ahora es 3
}

const employeeStatus: ContractStatus = ContractStatus.Temp
// console.log(employeeStatus) // 1
console.log(ContractStatus[employeeStatus]);

let randomValue: unknown = 10
randomValue = true
randomValue = 'Carlos'

    // Con any si funciona pero con unknow NO
    // randomValue()
    // randomValue.name
    // randomValue.getName()


    // estas dos lineas son iguales, fuerzan el tipo de variable "Aserción de tipos"
    ; (randomValue as string).toUpperCase();
(<string>randomValue).toUpperCase();

// restricción de tipos (typeof y Array.isArray)
if (typeof randomValue === 'string') {
    randomValue.toLocaleLowerCase()
}

// tipos de unión --> number | boolean mas de un tipo que puede tener
let multiType: number | string = 20
multiType = 'veinte'

// arriba funciona, aqui NO
let type: number = 20
type = 'number'

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y // funciona
    }

    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y)
    }

    throw new Error('You\'re mixing types!')
}

add(1, 2)  // 3
add('one', 'two') // "onetwo"
add(1, "two") // error

// Tipos de intersección

interface Employe {
    employeeID: number
    age: number
}

interface Manager {
    stockPlan: boolean
}

const employee: Employe & Manager = {
    employeeID: 123,
    age: 18,
    stockPlan: true
}

// Definición de literales

type answer = 'yes' | 'no' | 'maybe' | 'ok'
let result: answer = 'nel' //  error

// Matrices y tuplas

let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
let persona: [string, number] = ['carlos', 21] // no se pueden agregar mas elementos en ka tupla


// interfaz sirven para describir un objeto, asignar nombres a los tipos del objeto y parametrizarlos, 
// y componer tipos de objetos con nombre existentes en otros nuevos

interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employe: Employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'


// Ejemplo

interface IceCream {
    flavor: string;
    scoops: number;
}

function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));

// Extensión de una interfaz (? aignifica opcional)
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}

// Tipos indexables

interface IceCreamArray {
    [index: number]: string;
}

// la interfaz IceCreamArray declara una signatura de índice como number y devuelve un tipo string. Esta signatura de índice indica que la interfaz IceCreamArray está indexada con un número y devolverá una cadena.
let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);

// Interfaz en el uso de una API

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();

// Parametros obligatorios

function addNumbers(x: number, y: number): number {
    return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns an error

// Parametros opcionales
function addNumber(x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumber(1, 2); // Returns 3
addNumber(1);    // Returns 1


// Creación de clases

class Car {
    // Properties

    // Constructor

    // Accessors

    // Methods

}