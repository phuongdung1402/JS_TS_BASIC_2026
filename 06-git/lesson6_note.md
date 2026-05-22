GIT : giúp mình lưu nhiều phiên bản của project theo thời gian
Git sẽ lưu lịch sử project của chúng ta theo 1 cách sạch hơn

Ưu điểm : 
ko sợ hỏng code vì có lịch sử để quay lại, 
có thể học đc cách chia nhỏ công việc thành từng bước,
đưa code lên github để lưu trữ và chia sẻ, 
quen flow của team : thuật ngữ branch, pull request, review , merge

Mỗi lần commit (lưu lịch sử) -> git lưu lại cái gì :
-file nào thay đổi
-nội dung thay đổi
-ai commit
-thời điểm commit
-commit message
-commit trc đó là commit nào

Luồng lịch sử : A-B-C-D
A: Tạo project
B: Thêm login
C: Sửa validate

Các khu vực quan trong mà mình cần lưu ý:
working directory : folder project trên máy
(git add )

staging area : vùng chuẩn bị commit -> nơi bạn chọn file nào sẽ commit tiếp theo
(git commit)

local repository: folder .git trên máy (nơi lưu lịch commit local)
(git push)

remote repository: github / gitlab / bitbucket -> nơi lưu bản online

//B1 : Truy cập và cài đặt git scm (https://git-scm.com/install/windows)
//Check xem đã cài đặt thành công chưa ? bằng cách mở terminal : git --version
//Truy cập github . Tạo tài khoản -> Click new : tạo repository


Mở terminal : setup tên tài khoản và email của github
git config --global user.name "dungbtp"
git config --global user.email "phdung1402@gmail.com"
(kiểm tra lại)
git config --global --list

//B2 : Vào github -> Tạo new repository

Các bước đẩy code lên repository
B1: Khởi tạo git trong folder hiện tại : git init
(Làm lần đầu tiên và duy nhất -> sau lệnh này git sẽ tạo ra 1 folder ẩn tên là .git. Là nơi lưu lịch sử thay đổi của project
bình thường mình ko cần mở hoặc sửa trực tiếp folder này)
Initialized -> khởi tạo xong
empty Git repository -> lịch sử đang rỗng vì chúng ta chưa commit lên .

B2: Kiểm tra trạng thái file : git status