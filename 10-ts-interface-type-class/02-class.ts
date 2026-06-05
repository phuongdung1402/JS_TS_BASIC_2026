
//CLASS trong TS
//Typescript có 1 quy tắc quan trọng : mỗi thuộc tính trong class phải có giá trị trc khi obj đc khởi tạo
//Có 3 cách để thõa mãn quy tắc này
//1. class field có giá trị mặc định -> ko cần constructor

// class LoginPage {
//     url : string = "/login";
//     txtUsername : string = "#username";
//     txtPassword : string = "#password";
// }

// const page = new LoginPage();
// console.log(page.url);
// console.log(page.txtPassword);

// //2.class field ko có giá trị -> bắt buộc phải gán trong constructor
// class HocVien {
//     hoTen: string;
//     tuoi: number;
//     email: string;

//     constructor(hoTen: string,  tuoi: number, email:string) {
//         this.hoTen = hoTen;
//         this.tuoi = tuoi;
//         this.email = email
//     }
// }
// const hv = new HocVien('neko', 20, 'neko@gmail.com')
// console.log(hv.hoTen);

// //3.kết hợp class field + constructor

// class Product {
//     //Gía trị cố định : ko cần constructor
//     category : string ="general";
//     tags: string[] = [];
//     rating: number = 0;

//     //thuộc tính động
//     name: string;
//     price: number;

//     constructor(name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const p = new Product("Macbook pro", 200000);
// console.log(p.category);
// console.log(p.tags);
// console.log(p.rating);


// //Optional property ?
// //cho phép khai báo "field này có hay ko đều OK , ko cần gán trong constructor "
// class UserProfile {
//     name: string;
//     email: string;
//     avatarUrl?: string;

//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email
//     }
// }

// const user2 = new UserProfile("neko", "neko@gmail.com")
// console.log(user2.name);
// console.log(user2.avatarUrl); //undefined

// class TestConfig {
//     //Bắt buộc test nào cũng cần
//     browser: string;
//     baseUrl: string;

//     //optional 
//     screenshot?: 'on' | 'off'; //uniontype
//     retryCount?:number;
//     tags?: string [];

//     constructor(browser: string, baseUrl: string) {
//         this.browser = browser;
//         this.baseUrl = baseUrl;
//     }

//     summary(): string {
//         const retry = this.retryCount ?? 0;
//         const scrn = this.screenshot ?? "off" 
//         const tagList = this.tags?.join(", ") ?? "all";
//         return `${this.browser} | ${this.baseUrl} | retry:  ${retry} | scrn : ${scrn} | tags: ${tagList}`
//     }
// }

// const config = new TestConfig("fixfox", "https://autoneko.com")
// console.log(config.summary());

// config.screenshot = 'on';
// config.retryCount = 3;
// config.tags = ["smoke", "regress"]
// console.log(config.summary());


// //readonly : gán 1 lần duy nhất (trong khai báo, hoặc trong constructor) sau đó ko cho sửa. 
// class AppConfig {
//     readonly appName : string = 'Neko app';
//     readonly version : string;

//     constructor(version : string ) {
//         this.version = version
//     }
// }

// const appC = new AppConfig("2.0");
//     console.log(appC.appName);
//     console.log(appC.version);

//Dấu ! : field này chắc chắn có giá trị trc khi tôi dùng nó, dù hiện tại chưa gán giá trị
// class UserOK {
//     name!: string;
// }

// const user2 = new UserOK();
// console.log(user2.name);

// user2.name = "Neko"
// console.log(user2.name.toUpperCase());

// class Database {
//     connection!: string;
//     connection2: string | null = null;
//     connection3?: string

//     async connect(url: string) {
//         this.connection3 = url
//     }

//     query(sql: string): string {
//         //return `${this.connection} ${sql}`

//         if(!this.connection3) {{
//             throw new Error("Chua co ket noi")
//         }}
//         return `${this.connection3} ${sql}`

//     }

//     isConnected(): boolean {
//         return this.connection2 !== null
//     }
// }

// async function runSQL {
//     const db = new Database();
//     console.log(db.isConnected());
//     await db.connect("mongo://localhost: 28101")

//     console.log(db.query("SELECT * FROM"))
// }

//Constructor()
//parameter properties = shorthand
//có thể khai báo+gán thuộc tính
// class HocVienDai {
//     hoTen: string;
//     tuoi: number

//     constructor(hoTen: string, tuoi: number) {
//         this.hoTen = hoTen;
//         this.tuoi = tuoi
//     }
// }

// //parameter properties
// class  HocVienNgan {
//     constructor(
//         public hoTen: string,
//         public tuoi:number,

//     ) {}
// }

// const hv1 = new HocVienDai("neko1", 23)
// const hv2 = new HocVienNgan('neko2', 23)

//Kết hợp parameter properties và class fields
// class LoginPage2 {
//     readonly url ="/login";
//     readonly btnSubmit = "btn";

//     constructor(
//         public timeout : number
//     ) {}
// }

//Default parameter : cho phép gán sẵn giá trị mặc định cho tham số , nếu new ko truyền, TS tự lấy giá trị mặc định
// class TestConfig2 {
//     //giá trị cố định mọi instance đều giống nhau
//     //ko thể thay đổi khi tạo object
//     readonly url = "/login"

//     //default parameter
//     //giá trị mặc định : có thể override khi tạo object
//     constructor(
//         public browser: string = 'chromium',
//         public headless: boolean = true,
//     ) {}

//     summary() {
//         return `${this.browser} | headless: ${this.headless}`
//     }
// }

// const tcg2 = new TestConfig2();
// tcg2.summary()

// const tcg3 = new TestConfig2("firefox");
// tcg3.summary()


//Access modifier :phân quyền truy cập
//-public : mặc định, ko giới hạn, đọc đc , sửa đc , gọi đc từ bất cứ chỗ nào: trong/ngoài class , hay từ class con

// class Animal {

//     constructor(public name: string, public sound : string) {
//     }

//     public speak(): string {
//         return `${this.name} keu: ${this.sound}`
//     }
// }

// const cat = new Animal("meo","meww meww")
// cat.speak();
// cat.name = "meo may";
// cat.speak();

// //-private : chỉ trong class, đánh dấu thuộc tính chỉ truy cập từ bên trong chính class đó, code bên ngoài và class con ko đụng
// //được. Đây là công cụ đóng gói dữ liệu nhạy cảm
// class BankAccount {

//     constructor(public ownwer : string, private balance: string, private pin : string) {}

//     deposit(amount: number) {
//         this.balance += amount
//         console.log(`${amount} => So du : ${this.balance}`);
//     }

//     getBalance(inputPin: string) : string {
//         if(inputPin !== this.pin) return `Sai PIN`;
//         return `So du : ${this.balance}`
//     }
// }

// const account = new BankAccount("neko", "2000000", "123456")
// account.getBalance('123456')
// console.log(account.balance);



//-protected : class + class con 
//nằm giữa public và private : thành viên đánh dấu protected : truy cập đc trong class và class con kế thừa, nhưng vẫn
//đóng kín với thế giới bên ngoài

// class BasePage {
//     constructor(
//         public url : string, 
//         private secret: string = 'xxx', 
//         protected baseUrl = "http: neko.com"
//     ) {}

//     protected getFullUrl () : string {
//         return `${this.baseUrl} ${this.url}`
//     }
// }

// class LoginPage3 extends BasePage {
//     constructor() {
//         super('/login')
//     }

//     goto() {
//         const fullUrl = this.getFullUrl();
//         console.log(`Truy cập đến trang web ${fullUrl}`);
//         console.log(`Base URL : ${this.baseUrl}`);
//     }
// }

// const loginPage3 = new LoginPage3();
// loginPage3.goto();
// console.log(loginPage3.url);
//console.log(loginPage3.secret);

// class User3 {
//     // _convention prefix
//     private _name: string;
//     private _age: number;

//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age
//     }

//     get name() : string { return this._name};

//     set name(value : string) {
//         if(value.trim() === "") {
//             throw new Error('Ten ko dc rong')
//         }
//         this._name = value
//     }
// }

// const user3 = new User3("neko", 25)
// console.log(user3.name);
// user3.name = "Mimi"
// console.log(user3.name);

//RETURN TYPE : kiểu trả về
//TS sẽ kiểm tra 

//Promise<T>
//Trả về object hoặc array

// class TestReport {
//     private results : {name: string; passed: boolean} [] = []

//     addResult(name: string, passed: boolean) : void {
//         this.results.push({name, passed})
//     }

//     getSummary() : [total: number, passed: number, failed:number] {
//         const passed = this.results.filter((r)=> r.passed).length;
//         return {
//             total: this.results.length,
//             passed,
//             failed: this.results.length - passed
//         }
//     }

//     getFailedTest () : string [] {
//         return this.results.filter((r)=> !r.passed).map((r)=> r.name)
//     }
// }

// const report = new TestReport()
// report.addResult("login test", true);
// report.addResult("search test", false);
// report.addResult("cart test", true)
// console.log(report.getSummary());
// console.log(report.getFailedTest());


//STATIC METHOD VÀ PROPERTIES
//bình thường mọi object (instance) có bản sao riêng của property và method

// class Counter {
//     //thuộc tính mà mỗi instance hay object đều có 1 bản
//     count: number = 0;

//     constructor(public name : string) 
//     {
//         Counter.totalCreated++
//     }

//     increment() : void {
//         this.count++
//     }

//     //static biến đếm chung cho tất cả thuộc về class
//     static totalCreated : number = 0;
//     static showTotal() : void {
//         console.log(`Tổng cộng đc tạo ${Counter.totalCreated}`);
//     }
// }

// const a = new Counter("Counter A");
// const b = new Counter("Counter B");
// const c = new Counter("Counter C");

// a.increment()
// a.increment()
// b.increment()
// b.increment()
// c.increment()

// console.log(a.count)
// console.log(b.count)
// console.log(c.count)

// console.log(Counter.totalCreated);
// Counter.showTotal()











