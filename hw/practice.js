// class BankAccount {
//     #balance = 0;
//     #history = []

//     deposit(amount) {
//         if(amount < 0) {
//             return { success : false, message: 'Amount phải lớn hơn 0'}
//         } else {
//             this.#balance += amount
//             this.#history.push({type : 'deposit', amount: amount})
//             return { success: true, message: 'Nạp tiền thành công'}
//         }
//     }

//     withdraw(amount) {
//         if(amount < 0) {
//             return {success : false, message: 'Amount phải lớn hơn 0'}
//         } 
//         if(amount > this.#balance) {
//             return {success : false, message: 'Không đủ số dư để rút'}
//         }
//         this.#balance -= amount
//         this.#history.push({type: 'withdraw', amount: amount})
//         return {success: true, message: `Rút ${amount} từ balance`}
//     }


//     getBalance() {
//         return this.#balance
//     }
//     getHistory() {
//         const copyListHistory = [...this.#history] 
//         return copyListHistory
//     }
// }

// class SavingsAccount extends BankAccount {

//     constructor(interestRate) {
//         super()
//         this.interestRate = interestRate
//     }

//     applyInterest() {
//         const interest = this.getBalance() * this.interestRate;
//         return this.deposit(interest)
//     }
// }

// const save = new SavingsAccount(0.05)
// save.deposit(100)
// save.deposit(200)
// console.log(save.applyInterest())
// console.log(save.getBalance())

//-----------------------------------------------------------------------------------------------------------------------
// class TodoList {
//     #tasks = [];
//     id = 0

//     addTask(title) {
//         let id = ++this.id
//         let task = { id, title , done : false}
//         this.#tasks.push(task)
//         return this
//     }

//     completeTask(id) {
//         const completeTask = this.#tasks.find((task) => task.id === id)
//         if(completeTask) {
//             completeTask.done = true
//         }
//         return this
//     }

//     removeTask(id) {
//         this.#tasks = this.#tasks.filter((task) => task.id !== id)
//         return this
//     }

//     getPendingTasks() {
//         return this.#tasks.filter((task) => task.done === false)
//     }

//     getCompletionRate() {
//         if(this.#tasks.length === 0) return 0
//         const doneTask = this.#tasks.filter((task) => task.done === true)
//         return Number((doneTask.length / this.#tasks.length * 100).toFixed(2))
//     }
// }

// const list = new TodoList();
// list.addTask("Viết test case").addTask("Review code").addTask("Deploy");
// list.completeTask(1).completeTask(2);
// console.log(list.getPendingTasks());     // [{id:3, title:"Deploy", done:false}]
// console.log(list.getCompletionRate());   // 66.67

//-------------------------------------------------------------------------------------------------------------------------------------------
// class Shape {
//     constructor(name) {
//         this.name = name
//     }

//     getArea() {
//         return 0               // giá trị mặc định nếu con quên override, không cần field riêng
//     }

//     describe() {
//         return this.name + ' có diện tích ' + this.getArea()
//     }
// }


// class Circle extends Shape {
//     constructor(radium) {
//         super('Hình tròn')
//         this.radium = radium
//     }

//     getArea() {
//         return Number((Math.PI * this.radium  * this.radium).toFixed(2))
//     }
// }
// class Rectangle extends Shape {
//     constructor(width, height) {
//         super('Hình chữ nhật')
//         this.width = width
//         this.height = height
//     }

//     getArea(){
//         return this.width * this.height
//     }
// }

// const shapes = [new Circle(5), new Rectangle(4, 6)];
// shapes.forEach(s => console.log(s.describe()));

//----------------------------------------------------------------------------------------------------------------------------------------
// class Library {
//     #books = []

//     addBook({ isbn, title, copies }) {
//         if (isbn === '') { return { success: false, message: 'isbn ko được rỗng' } }
//         if (title === '') { return { success: false, message: 'title ko được rỗng' } }
//         if (copies <= 0) { return { success: false, message: 'copies phải lớn hơn 0' } }
//         const duplicateBook = this.#books.find((book) => book.isbn === isbn)
//         if (duplicateBook) {
//             return { success: false, message: 'Đã tồn tại isbn trong ds' }
//         } else {
//             this.#books.push({ isbn, title, copies, borrowedCount: 0 })
//             return { success: true, message: 'Thêm sách thành công' }
//         }
//     }

//     // Method "protected" (theo quy ước) để class con lấy 1 book cụ thể
//     findbook(isbn) {
//         return this.#books.find((book) => book.isbn === isbn)
//     }

//     borrowBook(isbn) {
//         const book = this.findbook(isbn)
//         if (!book) return { success: false, message: 'Không tìm thấy sách' }

//         if (book.borrowedCount < book.copies) { book.borrowedCount++; return { success: true, message: 'Borrow book thành công' } }
//         else { return { success: false, message: 'Hết sách' } }
//     }

//     returnBook(isbn) {
//         const book = this.findbook(isbn)
//         if (!book) {
//             return { success: false, message: 'Không tìm thấy sách' }
//         }
//         if (book.borrowedCount <= 0) {
//             return { success: false, message: 'Không có sách nào đang đc mượn' }
//         }
//         book.borrowedCount--
//         return {success: true, message: 'Trả sách thành công'}
//     }

//     getAvailableCopies(isbn) {
//         const book = this.findbook(isbn)
//         return book ? book.copies - book.borrowedCount : 0
//     }
// }

// class DigitalLibrary extends Library {
//     borrowBook(isbn) {
//         const book = this.findbook(isbn)
//         if (book) { return { success: true, message: 'Cho mượn thành công !' } } else {return {success: false, message: 'Không tồn tại sách'}}
//     }

//     getAvailableCopies(isbn) {
//         const avaibook = this.findbook(isbn)
//         if (avaibook) { return Infinity }
//         else { return { success: false, message: 'Sách ko tồn tại' } }
//     }
// }

// // ===== Dùng bản ĐÃ SỬA để test =====
// const lib = new Library();

// // --- Nhóm 1: addBook — test validate ---
// console.log("1. Thêm sách hợp lệ:", lib.addBook({ isbn: "978-1", title: "Clean Code", copies: 3 }));
// // Kỳ vọng: { success: true, message: "Thêm sách thành công" }

// console.log("2. Trùng isbn:", lib.addBook({ isbn: "978-1", title: "Bản khác", copies: 1 }));
// // Kỳ vọng: { success: false, message: "isbn đã tồn tại" }

// console.log("3. isbn rỗng:", lib.addBook({ isbn: "", title: "Sách X", copies: 2 }));
// // Kỳ vọng: { success: false, message: "isbn không được rỗng" }

// console.log("4. title rỗng:", lib.addBook({ isbn: "978-2", title: "", copies: 2 }));
// // Kỳ vọng: { success: false, message: "title không được rỗng" }

// console.log("5. copies = 0:", lib.addBook({ isbn: "978-3", title: "Sách Y", copies: 0 }));
// // Kỳ vọng: { success: false, message: "copies phải lớn hơn 0" }

// console.log("6. copies âm:", lib.addBook({ isbn: "978-4", title: "Sách Z", copies: -5 }));
// // Kỳ vọng: { success: false, message: "copies phải lớn hơn 0" }

// lib.addBook({ isbn: "978-5", title: "Refactoring", copies: 1 }); // dùng cho nhóm 2

// // --- Nhóm 2: borrowBook — test giới hạn số bản, hết sách, sách không tồn tại ---
// console.log("7. Mượn lần 1 (còn hàng):", lib.borrowBook("978-1")); 
// // Kỳ vọng: { success: true, ... } — borrowedCount: 0 -> 1 (copies=3)

// console.log("8. Mượn lần 2:", lib.borrowBook("978-1"));
// console.log("9. Mượn lần 3 (chạm giới hạn copies=3):", lib.borrowBook("978-1"));
// // Kỳ vọng: cả 2 dòng trên success: true, borrowedCount tăng dần 2 -> 3

// console.log("10. Mượn lần 4 (HẾT SÁCH, copies=3 đã full):", lib.borrowBook("978-1"));
// // Kỳ vọng: { success: false, message: "Hết sách" }  <- case quan trọng nhất để check logic if

// console.log("11. Mượn sách chỉ có 1 bản, mượn lần đầu:", lib.borrowBook("978-5"));
// console.log("12. Mượn tiếp sách chỉ có 1 bản (đã hết):", lib.borrowBook("978-5"));
// // Kỳ vọng dòng 12: { success: false, message: "Hết sách" }

// console.log("13. Mượn isbn KHÔNG TỒN TẠI:", lib.borrowBook("khong-ton-tai"));
// // Kỳ vọng: { success: false, message: "Không tìm thấy sách" }
// // -> Đây là case sẽ làm CODE CŨ (chưa sửa) crash với TypeError, vì brbook.borrowedCount đọc trên undefined

// // --- Nhóm 3: returnBook — test không cho âm ---
// console.log("14. Trả sách 978-1 (đang mượn 3):", lib.returnBook("978-1"));
// // Kỳ vọng: success true, borrowedCount 3 -> 2

// console.log("15. Trả sách CHƯA TỪNG MƯỢN (978-2 chưa add nên bỏ qua, thử 978-5 sau khi trả về 0):");
// lib.returnBook("978-5"); // borrowedCount: 1 -> 0
// console.log("    Trả tiếp lần nữa khi borrowedCount đã = 0:", lib.returnBook("978-5"));
// // Kỳ vọng: { success: false, message: "Không có sách nào đang được mượn" }
// // -> Đây CHÍNH XÁC là case lộ ra lỗi "if (x < 0) rồi mới trừ" ở bản gốc:
// //    bản gốc sẽ KHÔNG chặn được, để borrowedCount tụt xuống -1

// console.log("16. Trả isbn không tồn tại:", lib.returnBook("khong-ton-tai"));
// // Kỳ vọng: { success: false, message: "Không tìm thấy sách" }

// // --- Nhóm 4: getAvailableCopies ---
// console.log("17. Số bản còn lại của 978-1 (copies=3, borrowed=2):", lib.getAvailableCopies("978-1"));
// // Kỳ vọng: 1

// console.log("18. Số bản còn lại sách không tồn tại:", lib.getAvailableCopies("khong-ton-tai"));
// // Kỳ vọng: 0 (không phải crash hay undefined)


// // ===== Test DigitalLibrary =====
// const digitalLib = new DigitalLibrary();
// digitalLib.addBook({ isbn: "ebook-1", title: "JS Ebook", copies: 1 }); // copies ở đây không quan trọng vì override

// console.log("19. Mượn ebook lần 1:", digitalLib.borrowBook("ebook-1"));
// console.log("20. Mượn ebook lần 2 (vẫn phải được vì KHÔNG GIỚI HẠN):", digitalLib.borrowBook("ebook-1"));
// console.log("21. Mượn ebook lần 100:", digitalLib.borrowBook("ebook-1"));
// // Kỳ vọng: cả 3 dòng trên đều { success: true, ... } — khác hẳn Library thường, không bao giờ "hết sách"

// console.log("22. Mượn ebook không tồn tại:", digitalLib.borrowBook("ebook-khong-ton-tai"));
// // Kỳ vọng: { success: false, message: "Sách không tồn tại" }

// console.log("23. Số bản khả dụng ebook:", digitalLib.getAvailableCopies("ebook-1"));
// // Kỳ vọng: Infinity

// console.log("24. Số bản khả dụng ebook không tồn tại:", digitalLib.getAvailableCopies("ebook-khong-ton-tai"));
// // Kỳ vọng: 0