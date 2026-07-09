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
class TodoList {
    #tasks = [];
    id = 0

    addTask(title) {
        let id = this.id++
        let task = { id, title , done : false}
        this.#tasks.push(task)
        return this.#tasks
    }

    completeTask(id) {
        const completeTask = this.#tasks.find((task) => task.id === id)
        if(completeTask) {
            completeTask.done = true
        }
        return this.#tasks
    }

    removeTask(id) {
        return this.#tasks = this.#tasks.filter((task) => task.id !== id)
    }

    getPendingTasks() {
        return this.#tasks.filter((task) => task.done === false)
    }

    getCompletionRate() {
        if(this.#tasks.length === 0) return 0
        const doneTask = this.#tasks.filter((task) => task.done === true)
        return (doneTask.length / this.#tasks.length).toFixed(2)
    }
}

const list = new TodoList();
list.addTask("Viết test case").addTask("Review code").addTask("Deploy");
list.completeTask(1).completeTask(2);
console.log(list.getPendingTasks());     // [{id:3, title:"Deploy", done:false}]
console.log(list.getCompletionRate());   // 66.67