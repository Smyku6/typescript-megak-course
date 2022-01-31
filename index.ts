// interface Person {
//     name: string;
//     age: number;
//     isDeveloper: boolean;
//     // greet: () => void;
//     greet(): void;
//     achievements?: string[];
// }
//
// const personA: Person = {
//     name: 'Adam',
//     age: 30,
//     isDeveloper: false,
//     greet() {
//         console.log(`Hello ${this.name}`)
//     },
//     achievements: ['Król Youtube', 'Na rowerze bez trzymanki'],
// };
//
// const personB: Person = {
//     name: 'Janusz',
//     age: 43,
//     isDeveloper: true,
//     greet(): void {
//     },
// };
//
// function greet(person: Person) {
//     console.log(`Hello, ${person.name}`);
// }
//
// // greet(personA);
// // greet({name: 'Jajcarz', age: 100, isDeveloper: true,});
// //
// // const personC: Person = {
// //     age: 0, isDeveloper: false, name: ""
// //
// // }
//
// function dateOfBirth({age}: Person): number {
//     return (new Date().getFullYear()- age);
// }
//
// console.log(dateOfBirth(personA));
// console.log(dateOfBirth(personB));

// interface Person {
//     name: string;
//     age: number;
// }
//
// const ar: Person[] = [
//     {
//         name: 'Xyz',
//         age: 100,
//     },
//     {
//         name: 'Xyz',
//         age: 100,
//     }
// ]

// const json = '{"name":"Jan","dateOfBirth": 2000}';
// const person: Person = JSON.parse(json);
// console.log(person);


// CLASSES

interface Human {
    name: string;
    surname: string;
    age: number;
}

// class User implements HumanWithRole {
//     age: number;
//     name: string;
//     role: string;
//     surname: string;
// }

interface HumanWithRole extends Human {
    role: string;
}

interface HistoryData {
    history: HistoryEntry[];
    showHistory(): void;
}

interface HistoryEntry {
    createdAt: Date;
    event: string;
}

class User implements Human, HistoryData {
    age: number;
    name: string;
    surname: string;
    history: HistoryEntry[] = [];


    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    showHistory(): void {
        console.log(this.history);
    }
    addHistory(entry: HistoryEntry): void {
        this.history.push(entry)
    }


}

const person = new User('Adam', 'Smycz', 30);
person.showHistory();
person.addHistory({
    createdAt: new Date(),
    event: 'Zalogowano',
})
person.showHistory();
//
// class Person implements Human, HistoryData {
//     age: number;
//     history: string[];
//     name: string;
//     surname: string;
//
//     constructor(name: string, age: number, surname: string) {
//
//     }
//
//     showHistory(): void {
//     }
//
//
// }
//
// const janusz = new Person('Janusz', 77);
// console.log(janusz);


// interface MyInterface {
//     barfoo: string;
//
//     foobar(a: number, b: number): number;
// }
//
//
// class B implements MyInterface {
//     barfoo: string;
//
//     foobar(a: number, b: number): number {
//         return 0;
//     }
// }
//
// class A extends B {
//     barfoo: string;
// }




