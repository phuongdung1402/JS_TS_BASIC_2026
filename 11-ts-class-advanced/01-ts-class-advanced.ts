//TH1: class con ko có constructor : tự động dùng constructor của cha
// class AnimalBase {
//     constructor(public name: string, public age: number) {}

//     greet(): string {
//         return `${this.name}, ${this.age} tuoi`
//     }
// }

// class Dog extends AnimalBase {
//     bark() : string {
//         return `${this.name} : Gâu gâu`
//     }
// }

// const buddy = new Dog('Buddy', 3)
// console.log(buddy.greet());
// console.log(buddy.bark());

// //TH2 : class con có constructor riêng () thì phải gọi super

// class AnimalBase2 {
//     constructor(public name: string) {}
// }

// class Dog2 extends AnimalBase2{
//     constructor(name : string, 
//         //property riêng của dog2
//         public breed : string) {
//         super(name);
//         console.log(`Tạo ${this.breed} : ${this.name}`);
        
//     }
// }

// const dog2 = new Dog2("buddy", "golden")

// //TH đặc biệt : cha ko có constructor , nhưng con có constructor thì vẫn phải gọi super

// class Base {
//     sayHi() {
//         return `Hi from base`
//     }
// }
// class Child extends Base {
//     constructor() {
//         super();
//     }
// }

//override
// class Parent2 {
//     greet(): string {
//         return "Hello from parent"
//     }
// }

// class Child1 extends Parent2 {
//     gret(): string {
//         return "Hello from child 1"
//     }
// }

// class Child2 extends Parent2 {
//     override greet() : string {
//         return "Hello from child 1"
//     }
// }

//Method overloading trong class : cùng tên, khác tham số
//js ko có overloading , tính năng này chỉ có ở ts -> complie xong sẽ mất
//cú pháp viết nhiều hàm cùng tên khác tham số (ko có body )+ với 1 hàm thực

//add có thể sử dụng cộng number hoặc cộng string , hoặc cộng trong 1 mảng
// class Calculator{
//     //overload signature (khai báo ko có body)
//     add(a: number, b: number): number ;
//     add(a:string, b: string) : string;
//     add(a: number []) : number; 

//     //implementation thân hàm : xử lí tất cả các trường hợp
//     add(a: number | string | number [] , b?: number |string) : number | string {
//         //TH3 : mang
//         if(Array.isArray(a)) {
//             return a.reduce((sum, n)=> sum+n, 0)
//         }

//         //TH1 : 2 số
//         if(typeof a==="number" && typeof b==="number") {
//             return a+b;
//         }
//         //TH2 : 2 chuỗi
//         if(typeof a==='string' && typeof b==='string') {
//             return a + b
//         }
//         throw new Error("Invalid argument")
//     }

// }
// const calc = new Calculator();
// console.log(calc.add(1,2));
// console.log(calc.add("hello", "member"));
// console.log(calc.add([1,2,3,4,5]));


