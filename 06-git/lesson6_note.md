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
(Git đã được bật trong folder nhưng chưa tạo mốc lưu đầu tiên)

B3: Git add [ten folder]
( git add . : chọn tất cả các file đang thay đổi trong project)

B4: Tạo commit đầu tiên : git commit -m "nội dung mô tả commit"

B5: Đặt tên nhánh chính là main (vì github đặt tên nhánh chính là main)
git branch -M main

B6: Gắn folder này với remote repository trên git ( nối git ở local với remote repo để chia sẻ code)
git remote add origin .. đường link remote repository

B7: Push đẩy code
Lần đầu tiên chưa đẩy code : thiết lập upstream cho branch local hiện tại với remote
git push -u origin main
-u : upstream

--Cách đặt tên commit
-Khi project có nhiều commit , mình cần lịch sử để biết hôm đó sửa gì , ai sửa, sửa tính năng gì ?
-Công thức đặt tên : động từ + nội dung thay đổi 

vdu : 
add login test
fix login validate
update git lesson
remove unused locator

-Cách chuyên nghiệp khi quen hơn ta có thể dùng 
type : nội dung thay đổi
feature(chức năng mới)

vdu
docs : update git lesson
feat : add product search flow
test : add login test
fix: correct login selector


--check lịch sử log :
git log --oneline
HEAD -> main : là vị trí đang đứng

Có nhiều môi trường :
dev : main -> nhánh chính chạy ổn định, khi làm việc ngta sẽ tạo ra 1 nhánh khác để làm việc để ko ảnh hưởng tới nhánh chính đang sử dụng . Sau khi code ổn định ở nhánh phụ cta mới merge code vào nhánh chính để bổ sung thêm tính năng
uat : main

--Mình sẽ cần phải update code liên tục với nhánh main
git fetch ( lấy thông tin mới nhất xem có sự thay đổi nào : xem có ai đẩy code lên ko)
git status 
git pull (để kéo code mới nhất từ nhánh main về)

Main -> Tạo nhánh mới -> sửa code -> commit -> push nhánh -> merge vào main -> push main

vidu : main có 10 dòng
Bạn A : kéo code về -> tạo nhánh mới -> đẩy merge main -> main có 20 dòng
Bạn B : kéo code về (10 dòng) -> bạn B ngày n sau khi main có 20 dòng mới merge -> ok
trường hợp code bạn b sửa cùng 1 file vs bạn a ( sau khi update 20 dòng) -> xảy ra conflict -> resolve
trường hợp ko conflict thì merge ok -> pull main về để có code của b -> tạo nhánh mới code tiếp


--Branch 
-Cách đặt tên : ngắn gọn, ko dấu , ko có khoảng trắng
-Để xem branch hiện tại : git branch
-Đặt tên : docs/git-lesson ; feat/product-search ; fix / tests 
-Trước khi tạo nhánh mới , nên quay về mới
-Lý do : nhánh mới sẽ đc tạo ra trên nhánh hiện tại. 
=> Flow : quay về main -> pull code mới nhất -> tạo nhánh từ main
-Quay về main : git checkout main 
