//Generic class : cho phép mình viết 1 class duy nhất nhưng hoạt động đc với bất kì kiểu dữ liệu nào
//Cú pháp :
//class ClassName<T>
//T = Type Parameter (placeholder)

//VD : Khi test API : có rất nhiều API ví dụ user, product, order
//Điểm chung là : sẽ có những method ví dụ như thêm , sửa , xóa , update (CRUD)
//T có thể là bất cứ thứ gì , có thể là string, number, boolean,... điều này linh hoạt, nhưng có 1 vấn đề : mình 
//ko thể dùng bất kì property nào của T , vì TS ko biết T là kiểu gì

//Generic constraints : giới hạn kiểu được phép
class Repository<T> {
    //mảng chứa T (có thể là user , product hoặc order)
    private items : T[] = []

    add(item : T) : void {
        this.items.push(item)
    }

    findById(id: number) : T | undefined {
        return this.items.find(item => item.id === id)
    }

    getAll() : T[] {
        //trả về 1 mảng , copy mảng gốc
        return [... this.items]
    }

    count() : number {
        return this.items.length
    }
}

interface User {
    id: number,
    name: string,
    email: string
}

interface Product {
    id:number,
    name: string,
    price: number
}

const userRepo = new Repository<User>
userRepo.add({id: 1, name: 'neko1', email:'neko1@gmail.com'})
userRepo.add({id: 2, name: 'neko2', email: 'neko2@gmail.com'})
console.log(userRepo.count());

const productRepo = new Repository<Product>

//Mình mong muốn : T ko phải là bất cứ thứ gì- T phải có ít nhất field  id:number
//T extends tới interface hoặc type yêu cầu

//định nghĩa constraint : những gì T bắt buộc phải có
interface Hasid {
    id: number;
}
interface Order extends Hasid {
    product : string,
    total: number
}
//T phải có ít nhất {id: number}
class CrudRepo<T extends Hasid> {
    private items : T[] = []

    add(item : T) : void {
        this.items.push(item)
    }

    findById(id: number) : T | undefined {
        return this.items.find((item) => item.id === id)
    }
}

const orderRepo = new CrudRepo<Order>();
orderRepo.add({id: 1, product: 'neko1', total: 1})

const found = orderRepo.findById(1)