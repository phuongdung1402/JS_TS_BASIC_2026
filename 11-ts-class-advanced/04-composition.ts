//Composition & inheritance ( has -a / is - a)
//IS - A : Là một . Đại diện cho inheritance (kế thừa) : class con là 1 loại của class cha -> kế thừa mọi thứ
//HAS - A : Composition = class có 1 hoặc sử dụng object khác -> chứa bên trong như công cụ


//IS - A ( kế thừa đặc tính và hành vi )
// class Animal {
//     eat() {
//         console.log('Eating');
//     }
// }

// class Dog extends Animal {}


// class Engine {
//     start() {
//         console.log('Start..');
        
//     }

//     stop() {
//         console.log('Stop.....');
        
//     }
// }

// class Car {
//     //car chứa động cơ -> dùng như công cụ bên trong class
//     private engine = new Engine();

//     drive() {
//         this.engine.start();
//         console.log('Driving...');
//     }
// }

// const car = new Car()
// car.drive()

// //QUY TẮC OOP : Ưu tiên dùng composition hơn inheritance , trừ khi quan hệ is-a thực sự rõ ràng
// //Vấn đề 1 : Đa kế thừa : con vừa giống A , vừa muốn giống B
// class FlyingAnimal extends Animal {
//     fly() {
//         console.log('flying...');
//     }
// }

// class SwimmingAnimal extends Animal {
//     swimming() {
//         console.log('swimming...');
        
//     }
// }

//1 class chỉ extends 1 class cha
// class Duck extends FlyingAnimal, SwimmingAnimal {}

//Vấn đề 2 : Tight coupling - bị lệ thuộc chặt vào cha , sửa cha , con chết theo
// class BaseTest2 {
//     setup() {
//         console.log('openingg browser...');
//     }

//     //ví dụ muốn thêm 1 tham số là env
//     //setup(env:string) -> tất cả class con override đều phải sửa theo
// }

// class LoginTest2 extends BaseTest2 {
//     setup() {
//         super.setup();
//         console.log("abc")
//     }
// }

//Vấn đề 3 : Override lỡ tay : cha gẫy
//class cha có 1 method gọi nhiều method con, class con override 1 method nhưng quên ko gọi super, làm đứt 

// abstract class BaseTest3 {
//     async run() : Promise<void> {
//         console.log(`Runing ${this.getTestName()}`);
//         this.setup();
//         await this.execute();
//         this.teardown();
        
//     }

//     setup() : void {
//         console.log('khoi tao browser');
//         console.log('khoi tao context');
//         console.log('auth token loaded');
        
        
        
//     }

//     teardown() : void {
//         console.log('browser dong');
        
//     }

//     abstract getTestName() : string
//     abstract execute() : Promise<void>
// }

// class LoginTest3 extends BaseTest3 {
//     getTestName(): string {
//         return "login test"
//     }

//     //override setup để thêm bước login trc
//     setup(): void {
//         //super.setup()
//         console.log('Pre login, set auth cookie');
        
//     }

//     async execute(): Promise<void> {
//         console.log('fill username');
//         //thực tế sẽ fail -> vì ko có browser để chạy bởi vì thiếu setup từ cha
        
//     }
// }

// async function runtest() {
//     const test = new LoginTest3();
//     await test.run()
// }

//Composition sẽ xử lí đc, vì ko có super, ko có override, ko có kế thừa. mỗi module độc lập rõ ràng

// interface Flyable {
//     fly() : void
// }

// interface Swimmable {
//     swim() : void
// }

// class Duck implements Flyable, Swimmable {
//     //bắt buộc phải tự viết code
//     fly(): void {
        
//     }
// }

//Giai quyết bằng composition
//Đa kế thừa : duck vừa chứa khả annwg biết bơi và bay
//tight coupling : sửa flyablitity -> chỉ ảnh hưởng đến fly -> mko ảnh huownghr đến duck hay flyAbility
//ko có override -> ko có lỡ tay phá code của cha
class FlyAbiliti {
    fly() {
        console.log('Flying...');
        
    }
}

class SwimAbility {
    swimming() {
        console.log('swimming...');
        
    }
}

class Duck {
    private flyAbility = new FlyAbiliti();
    private swim = new SwimAbility()

    fly() {
        this.flyAbility.fly()
    }
}

class Eagle {
    private fly = new FlyAbiliti()
}

//Extends() : cứng nhắc . thằng con phải kế thừa hết các thuộc và method của cha( kể cả những thứ ko cần) - 1 cha duy nhất - cha đổi : con sợ - khó test (phải mock cả cha)
//composition : chỉ chọn module nó cần - nhiều module 1 lúc - module đổi ko ảnh hưởng - dễ test (mock từng module)
//Khi nào dùng : 
//Kế thừa : IS - A rõ ràng ổn định , ko có nhu cầu đa kế thừa
//Composition : cần linh hoạt muốn tái dụng module độc lập
//->module các phần logic có khả năng tái sử dụng -> class và inject hay gọi composition từ đó

//