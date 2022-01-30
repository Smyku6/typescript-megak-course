// const bool: boolean = false;
//
// const liczba: number = 123;
// const liczbab: Number = 123;
//
// const napis: string = 'Abcdef';
//
// const kolor: 'Biały' | 'Żółty' | 'Zielony' = 'Biały';
//
// const tablica: Array<string | number > = ['abc', 'def', 'aaa', 2 , 3];
//
// const tablica2: number[] = [2 , 3];
//
// const tablica3: (string | number)[] = ['abc', 'def', 'aaa', 2 , 3];
//
// enum UserRole {
//     Admin,
//     User,
//     BannedUser,
// }
//
// const bartekUserRole = UserRole.Admin;
//
// const jajco: number | null =null;
//
//
// const json: string = '123';
// const data = JSON.parse(json) as number;
//
// console.log(data, typeof data);

import {lineBreakG} from "acorn";

interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
    // greet: () => void;
    greet(): void;
}

const personA: Person = {
    name: 'Adam',
    age: 30,
    isDeveloper: false,
    greet() {
        console.log(`Hello ${this.name}`)
    }
};

const personB: Person = {
    name: 'Janusz',
    age: 43,
    isDeveloper: true,
    greet(): void {
    },
};

function greet(person: Person) {
    console.log(`Hello, ${person.name}`);
}

// greet(personA);
// greet({name: 'Jajcarz', age: 100, isDeveloper: true,});
//
// const personC: Person = {
//     age: 0, isDeveloper: false, name: ""
//
// }

function dateOfBirth(person: Person): number {
    return (new Date().getFullYear()-person.age);
}

console.log(dateOfBirth(personA));
console.log(dateOfBirth(personB));
