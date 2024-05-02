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