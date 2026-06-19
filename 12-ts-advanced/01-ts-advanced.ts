//typescript type system : typeof, keyof, as & Generic
//Literal type : kiểu giá trị cụ thể
//Trong TS : String là tập hợp rất nhiều chuỗi kí tự khác nhau
//(literal type): là 1 tập hợp chỉ chứa duy nhất 1 chuỗi ( đc viết trong literal type)


let myString : string;
myString = "dev"
myString = "prod"

//literal type(khắt khe hơn)
let myEnv : "dev"
myEnv = "dev"
myEnv = "prod"
//Biến mà chỉ lưu đc 1 giá trị thì khác gì hằng số const()

//Sức mạnh nằm ở union types
//code cực kì an toàn, ko bh sợ gõ sai chính tả (dev hay devvv) hay truyền nhầm giá trị lạ vào hệ thống

type TrafficLight = "red" | "yellow" | "green"
function checkLight(color: TrafficLight) {
    if(color ==='red') {
        console.log('Dung lai');
    }
}

checkLight('')

//Type assertion (as)
//Trong TS as gọi là type assertion
//Lưu ý : as chỉ thay đổi cách nhìn của TS ko thay đổi dữ liệu thật khi chạy Value Space (thực tế) : dữ liệu y nguyên, số 5 vẫn là số 5

//Type space (bản vẽ) : bạn dùng as để gán 1 nhãn mới cho biến đó, vdu bảo TS là dừng coi nó là số mà coi là chuỗi đi.

const soNam : number = 5
//dùng as để nói vs TS : hãy coi 1 biến dưới đây là string
const soNamNew = soNam as unknown as string
console.log(typeof soNamNew);
console.log(soNamNew.toUpperCase());

//TH sử dụng
//TH1 : Nhận diện dữ liệu từ hộp đen
interface UserData {
    id: number;
    email: string
}
const apiResponse : any = await fetchUserData()
//ko biết đc kiểu dữ liệu đầu ra là gì -> coi là any
//ép TS biết kiểu dữ liệu để chúng ta có thể có gợi ý khi code

const user = apiResponse as UserData
user.id

//Có sự khác nhau giữa : type và as type . 
//2 thứ khác nhau về mặt cú pháp
//: type -> const tenBien : UserData = apiResponse -> type chỉ dùng khi khai báo biến (có tên biến)
//: as type -> dùng đc ở bất kì nơi nào có giá trị (ko cần tên)



