// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

// array for primitive datatype

let s:string[] = ['a','a','a','a'];

interface HotKeyConfig{
    // it is optional property
    allowInInput?: boolean
}

// example for union type 
function printId(id: number | string) {
 console.log("Your ID is: " + id);
}

// type alias
type City = {
    name:string;
    state: string;
    country: string;
}

let city1:City = {
    name: 'vijayawada',
    state: 'Andhra Pradesh',
    country: 'India'
}

// extending a type
type County = City & {
    city:string
}
type division = City & {
   city:string
}
let county1:County = {
    name: 'Phelps County',
    city: 'Rolla',
    state: 'Missouri',
    country: 'USA'
}

// type assertions similar to casting other languages
const division1 = county1 as division;



// interface
interface University{
    name:string;
    established_year: string;
}
// extending an interface
interface ResearchUniversity extends University{
    research_area: string;
}
// adding new fields to an existing interface which is not possible in case of type
interface University{
    address: County
}

let unvrsty1:University = {
    name:'Missouri University of science and technology',
    established_year: '1970',
    address: county1
}

// constant object can be editable
const obj = {counter:0};
obj.counter = 0;

// but if declared as below it will be a const
const obj1 = {counter1:0} as const;
obj.counter = 1;
const arr1 = [1,2,3,4] as const;

// some discussion about type narrowing
//1. typeof guard
//2. Truthiness narrowing
//3. Equality narrowing
//4. in operator narrowing
//5. instanceof narrowing
//6. Assignment narrowing
//7. Control Flow analysis

//8. Type Predicates with Example
type Fish = {
    swim: 1
}
type Bird = {
   fly: 1
}
function isFish(pet: Fish | Bird): pet is Fish {
 return (pet as Fish).swim !== undefined;
}

//9. Discriminated Unions

/**
 * 10. never type 
 * The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement 
 * as example below
 */
interface Triangle {
 kind: "triangle";
 sideLength: number;
}
interface Circle {
 kind: "circle";
 radius: number;
}
interface Square {
 kind: "square";
 sideLength: number;
}
type Shape = Circle | Square;
// valid assignment for never
function getArea1(shape: Shape) {
 switch (shape.kind) {
 case "circle":
 return Math.PI * shape.radius ** 2;
 case "square":
 return shape.sideLength ** 2;
 default:
 const _exhaustiveCheck: never = shape;
 return _exhaustiveCheck;
 }
}
// invalid assignment for never
type Shape1 = Circle | Square | Triangle;
function getArea2(shape: Shape1) {
 switch (shape.kind) {
 case "circle":
 return Math.PI * shape.radius ** 2;
 case "square":
 return shape.sideLength ** 2;
 default:
 const _exhaustiveCheck: never = shape;
//Type 'Triangle' is not assignable to type 'never'.
 return _exhaustiveCheck;
 }
}

// functions

// Functions as classes
type DFunc = {
    descption: string;
    (someArg: number):boolean;  // function declaration
}

function doSomething(fn:DFunc) {
    console.log(fn.descption + "returned" + fn(5));
}
// Function as constructor
type SomeConstructor = {
    new (s:string): County;
}

class CountyConstructor{
    s:County;
    constructor(s:string){
        this.s = county1
    }
}

function fn(ctor: SomeConstructor){
    return new ctor("hello");
}
console.log(fn(CountyConstructor));
// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  
