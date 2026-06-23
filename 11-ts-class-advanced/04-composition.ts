//Composition & inheritance ( has -a / is - a)
//IS - A : Là một . Đại diện cho inheritance (kế thừa) : class con là 1 loại của class cha -> kế thừa mọi thứ
//HAS - A : Composition = class có 1 hoặc sử dụng object khác -> chứa bên trong nó như công cụ


//Extend : IS - A ( kế thừa đặc tính và hành vi )
// class Animal {
//     eat() {
//         console.log('Eating');
//     }
// }

// class Dog extends Animal {}

//Composition : has- A (chứa đựng)
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

//QUY TẮC OOP : Ưu tiên dùng composition hơn inheritance , trừ khi quan hệ is-a thực sự rõ ràng
//Vấn đề 1 : Đa kế thừa : con vừa giống A , vừa muốn giống B
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
//chuỗi logic cha. Mà compile vẫn OK

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
//         //thực tế sẽ fail -> vì ko có browser (hay trình duyệt) để chạy bởi vì thiếu setup từ cha

//     }
// }

// async function runtest() {
//     const test = new LoginTest3();
//     await test.run()
// }

//Composition sẽ xử lí đc những case như trên, vì ko có super, ko có override, ko có kế thừa. mỗi module độc lập rõ ràng

//Mình có thể dùng interface đc không ? Có , nhưng interface chỉ định nghĩa function, ko có code bên trong
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

//Giai quyết bằng composition ( có thể giải quyết đc 3 vấn đề sau )
//Đa kế thừa : duck vừa chứa khả năng biết bơi và biết bay
//tight coupling : sửa flyablitity -> chỉ ảnh hưởng đến fly -> không ảnh hưởng đến duck hay flyAbility
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

//So sánh: 
//Extends() : cứng nhắc.Class con phải kế thừa hết các thuộc và method của cha( kể cả những thứ ko cần) - 1 cha duy nhất - cha đổi : con sợ - khó test (phải mock cả cha)
//Composition : linh hoạt.Chỉ chọn module nó cần - nhiều module 1 lúc - module đổi ko ảnh hưởng - dễ test (mock từng module)
//Khi nào dùng : 
//Kế thừa : IS - A rõ ràng ổn định , ko có nhu cầu đa kế thừa
//Composition : cần linh hoạt muốn tái dụng module độc lập
//->module các phần logic có khả năng tái sử dụng -> class và inject hay gọi composition từ đó

//Thay vì nhét mọi thứ vào 1 basepage rồi bắt mọi page con kế thừa, ta sẽ tách từng khả năng thành 1 helper riêng
//mỗi page object chứa (has - a) các helper nó cần


class NavigationHelper {
    constructor(private baseUrl: string) { }

    goTo(path: string) {
        console.log(`Dieu huong ${this.baseUrl} ${path}`);

    }
}

class ScreenShotHelper {
    capture(name: string) {
        console.log(`Chup man hinh ${name}.png}`)
    }
}

class LoginPage9 {
    private nav = new NavigationHelper("https://autoneko.com");
    private scr = new ScreenShotHelper()

    async login(username: string, password: string): Promise<void> {
        this.nav.goTo("/login")
        console.log(`Nhap username: ${username}`);
        console.log(`Nhap password: ${password}`);
        this.scr.capture("after-login")

    }
}

class ProductPage {
    private nav = new NavigationHelper("https://autoneko.com");
    async openProduct(id: number): Promise<void> {
        this.nav.goTo(`/product/${id}`)
        console.log(`Da mo san pham ${id}`);
    }

}

const loginpage9 = new LoginPage9()

//Dependency injection
//Tiêm phụ thuộc - thay vì class tự tạo thứ nó cần (dependency), nó nhận từ bên ngoài đưa vào
//DI có 3 yếu tố :
//Dependency : thứ class cần để hoạt động
//injector : ng tạo ra dependency để đưa cho class
//consumer: class nhận dependency và sử dụng

//Nhược điểm composition
//1 . ko test độc lập đc , vì loginpage9 tự new dependency bên trong
//2 . ko swap được - muốn đổi implementation phải sửa code -> mỗi lần đổi env/ loại navigation -> sửa code -> mỗi lần sửa phải test lại toàn bộ
//3 . tight coupling - mọi sự thay đổi của helper lan vào page -> dẫn tới mọi page phải sửa theo

//Cách nhận : chta thường nhận qua interface (abstraction), ko phải class cụ thể
//Viết lại vd trên
//B1 : Định nghĩa interface - đây là dependency
// interface INavigation {
//     goTo(path: string) : void
// }

// interface IScreenshot {
//     capture(name: string) : void
// }

//B2 : Implement interface - những thứ sẽ đc inject -> injector

// class RealNavigation implements INavigation {
//     constructor(private baseUrl: string, private browserType : string) {}

//     goTo(path: string) {
//         console.log(`Dieu huong ${this.baseUrl} ${path}`);

//     }
// }

// class RealScreenshot implements IScreenshot {
//     capture(name: string) {
//         console.log(`Chup man hinh ${name}.png`);

//     }
// }

//Testing : unittest - mocktesting ( FE BE )

// class MockNavigation implements INavigation {
//     goTo(path: string): void {
//         console.log('mock');
//     }
// }

// class MockScreenShot implements IScreenshot {
//     capture(name: string): void {
//         console.log(`Chup man hinh ${name}.png`);
//     }
// }

//B3 : Class nhận interface - đây là consumer
// class Loginpage10 {
//     //nhận interface - ko phải class cụ thể
//     //loginPage10 ko biết và ko cần biết nav, scr là REAL hay MOCK
//     constructor(private nav : INavigation, private scr: IScreenshot) {}

//     async login(username: string, password: string) : Promise<void> {
//         this.nav.goTo("/login")
//         console.log(`Nhap username: ${username}`);
//         console.log(`Nhap password: ${password}`);
//         this.scr.capture("after-login")

//     }
// }

//sử dụng
//const realLogin = new Loginpage10(new RealNavigation("http/...", "chrome"), new RealScreenshot());
// const mockLogin = new Loginpage10(new MockNavigation(), new MockScreenShot())
//Tại sao DI giải quyết 3 vấn đề
//Vấn đề 1 : ko test đc độc lập -> inject mock
//Vấn đề 2 : ko swap đc

// const stagingPage = new Loginpage10(new RealNavigation('https://stagging.com'), new RealScreenshot())

// const mobilePage = new Loginpage10(new MobilePage())

//Vấn đề 3 : tight coupling

//TRONG TS : Kiểu dữ liệu của 1 tham số có thể là interface, type alias, hoặc class
// interface ILogger {
//     log(msg: string) : void;
// }

// abstract class AbsLogger {
//     abstract log(msg: string) : void
// }

// class Logger {
//     log(msg: string) {
//         console.log('Default');
//     }
// }

// class ConsoleLogger implements ILogger {
//     log(msg: string): void {
//         console.log('Console logg');
//     }
// }

// class FileLogger implements ILogger {
//     log(msg: string): void {
//         console.log('file log');
//     }
// }

// class UserService {
//     constructor(private Logger: ILogger | AbsLogger | Logger) {}
// }

// new UserService(new ConsoleLogger())
// new UserService(new FileLogger())
//TS dùng kiểu cấu trúc, nó ko quan tâm logger đc khai báo là interface, abstract, hay class
//nó chỉ quan tâm obj truyền vào có method là log(msg: string) : void ko -> có hợp lệ
//Tính đa hình nền tảng của DI - Constructor có thể nhận bất kì obj nào thỏa mãn cái shape đấy
//Khi gọi tới thg class, phụ thuộc vào thg đc tiêm vào 
//gọi là abstract , hành vi quyết định lúc runtime


//Ví dụ interface + inheritance + composition + DI

//Interface - dependency
//Vdu : dùng API test
interface IHttpClient {
    get(path: string): Promise<string>
    post(path: string, body: string): Promise<string>
}

interface IValidator {
    checkStatus(response: string, expected: string): boolean;
    checkContains(response: string, keyword: string): boolean
}

interface IAuth {
    login(user: string): void;
    logout(): void;
    getAuthHeader(): string;
}

//Implementation - khởi tạo injector
class RealHttpClient implements IHttpClient {
    constructor(private baseUrl: string) {

    }

    async get(path: string): Promise<string> {
        console.log(`Get ${this.baseUrl} ${path}`);
        return `{"status": "ok"}`

    }

    async post(path: string, body: string): Promise<string> {
        console.log(`POST ${this.baseUrl} ${path}`);
        return `{"id":1, "created": true}`

    }
}

class RealValidator implements IValidator {
    checkStatus(response: string, expected: string): boolean {
        const ok = response.includes(`"status":"${expected}"`)
        return ok;
    }

    checkContains(response: string, keyword: string): boolean {
        const ok = response.includes(keyword)
        return ok;
    }
}

class RealAuth implements IAuth {
    private token: string | null = null

    login(user: string): void {
        this.token = `token-${user}-xxx`
    }

    logout() {
        this.token = null;
        console.log('logged out');
    }
    getAuthHeader(): string {
        return this.token ? `Bearer ${this.token}` : "Anonymus"
    }
}

//inheritance : abstract class
abstract class BaseApiTest {
    constructor(protected testName: string,
        protected http: IHttpClient,
        protected validator: IValidator,
        protected auth: IAuth
    ) { }

    //Concret method
    async run(): Promise<boolean> {
        console.log(`Runing ${this.testName}`);
        this.setup();
        const result = await this.execute()
        this.teardown;
        return result
    }

    protected teardown() {
        this.auth.logout();
        console.log(`${this.testName} finished`);

    }

    protected abstract setup(): void;
    protected abstract execute(): Promise<boolean>
}
//4.Concreet test 
class ProductApiTest extends BaseApiTest {

    constructor(http: IHttpClient, validator: IValidator, auth: IAuth) {
        super('Product API test', http, validator, auth)
    }
    protected setup(): void {
        this.auth.login("admin")
    }

    protected async execute(): Promise<boolean> {
        const response = await this.http.get('/product')
        return this.validator.checkStatus(response, 'ok') && this.validator.checkContains(response, "status")
    }
}

//Khởi tạo injector

async function runTest() {
    //khởi tạo injector
    const http = new RealHttpClient("https://api.neko.com")
    const validator = new RealValidator()
    const auth = new RealAuth()
    //tiêm vào consumer
    const productTest = new ProductApiTest(http, validator, auth)
    await productTest.run()
}

runTest()