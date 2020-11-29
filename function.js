var space = "<br/>";
//
// // // ----------------------------------------------------------------------
// // // hien thi tren man hinh ten nguoi
// //
function Messengers(user,job) {
    document.write("ho ten " + user + "lam viec tai " + job);
 }
// // // ----------------------------------------------------------------------
// // // hien thi full name
function showFullName(firts,last) {
    var fullName = firts + "  " + last;
    return fullName;
}
fullName = showFullName("nguyen","van a" + "<br/>");
document.write(fullName);
// alert(fullName);
// // // ----------------------------------------------------------------------
// // // while
var i = 0;
var str = " ";
while (i<9){
    str += i.toString();
    i += 1;
    document.write(str + "<br/>");
 }
// // // ----------------------------------------------------------------------
// // // do while
var x = 40;
do{
    document.write("xin chao cac ban" + "<br/");
    x--;
    document.write(x + "<br/>");
}while (x>45) {
    let str = " ";
    str += x;
    // document.write(str + "<br/>")
    x++;
} document.write("loi roi" +space);
// //
// // // ----------------------------------------------------------------------
// // // try ---- catch
    try{
        document.write(" phep chia " +space)
        let x = 10/0;
        document.write(x);
    }catch (e) {
        document.write(e);
}
// //
// // // ----------------------------------------------------------------------
// //
// // // Array
const array = ["Html","CSS","BOOTRAP"];
array[4]="nodejs";
for (i in array){
    document.write(space +"phan tu thu "+ i+ " " +array[i] + space);
}
// // Array Method
//     /*
//     * concact() : nối các mảng với nhau
//     * indexOf() : trả về vị trí ban đầu
//     * lastindexOF() : trả về vị trí cuối
//     * join() : nối các phân tử thành 1 chuỗi duy nhât
//     * pop(): xóa phân từ cuối trong array và trả về phần tử đó
//     * shift() : xóa phần tử đầu và trả về phần từ đso
//     * push(): thêm phân từ vào cuối array và trả về chiều dài của array
//     * unshift() :thêm phân từ vào đầu array và trả về chiều dài của array
//     * slice(start,end) : tạo mảng mới từ start tới end trong arr đã chọn
//     * sort : sắp xếp mảng theo giá trị phần tử mảng (số lượng chũ trong mảng )
//     * valueOf() : trả về giá trị ban đầu của mảng
//     * splice(x,y,"A","B") : tại vị trí x xóa đi y phần tư và thêm vào "A","B"
//     *
//     *
//     */
//
//
// // hien ten va diem trung binh
// //
    var arr = Array(
            ["nguyen Van a",[2,3,4]],
            ["nguyen Van a",[4,3,4]],

            ["nguyen Van a",[3,3,4]]
    );
for (x in arr){
    const scope = arr[x][1];
    var temp = 0;
    for (y in scope ){
        temp += scope[y];
    }
    arr[x][1] = temp/scope.length;
    document.write("ho va ten " + arr[x] + " diem trung binh" +  scope + space );
 }
//
// // ----------------------------------------------------------------------
//
// // String
//
//     // // var str = new String("")
    var str = "HELLO \* WORL";          // hiển thị ký tự đặc biệt trong String thì dùng " \ "
    document.write("chu so 4 của chuoi String : " + str[4] + space);    // hiển thị chữ " O "

// // String method
// /*
// * charAt(n) : trả về phần từ n trong chuỗi
// * charCodeAt(n) : trả về unicode của phần tử n trong chuỗi
// * fromCharCode(n) : chuyển đổi mã unicode của n thành giá trị chuỗi
// * concat() : nối các chuỗi lại với nhau
// * seach() : trả về vị trí xuất hiện đầu tiên của 1 giá trị nào đó trong chuỗi
// * match () : tìm kiếm trả về giá trị nào đó được tìm trong chuỗi ( ktra giá trị đó có trong chuỗi ko ? )
// * slice(s,e) : trích xuất chuỗi từ vị trí thứ s tới vị trí thứ e ( hỗ trợ cả số âm )
// * substr(s,l) : tríc xuất chuỗi từ vị trí thứ s tới vị trí thứ s + length   ( lấy từ s ---> s+l-1)
// * split() : tách chuỗi thành chuỗi con tùy theo điều kiện của chuỗi   ( chyên String thành Array )
// * */
//
// // ----------------------------------------------------------------------
//
// // HTML wrapper method
// /*
// * strike() : văn bản bị gạch ngang
// * sub() : hiển thị văn bản nằm ở vị trí dưới cùng của dòng ( văn bản lệch lên
// * sup() : hiển thị văn bản nằm ở vị trí trên cùng của dòng
// * fontcolor(x) : chuyển vào màu x cho văn bản
// *
// * */
//
// // ----------------------------------------------------------------------
//
//
// /*
// * document.getElementById(x).value : lấy dữ liệu người dùng nhập vào với id là "x"
// * document.getElementById("result").innerHTML = fullName.splitName();  lấy nội dung của "fullName.splitName()" điền vào id : result
// *
// * */
//
//
// // ----------------------------------------------------------------------
// // Math Object
// /*
// * Math.max(x,y,z,...) : lấy giá trị lớn nhất trong String
// *
// * var arrnumber = [x,y,z]
// * document.write(" gia tri lonw nhat la " + Math.max.apply(Math,arrnumber));
// *
// * Math.min((x,y,z,...) : lấy giá trị nhỏ nhất trong String
// * Math.random() : lấy giá trị ngẫu nhiên ( 1> x > 0)
// * Math.abs(x) : lấy giá trị tuyệt đối của x
// * Math.pow(x,y) : x mũ y
// * Math.log(x) : trả về logarit của x
// * Math.sqrt(x) : trả về căn bậc 2 của x
// * floor(x) : làm tròn số nguyên gần x nhất
// * */
//
// // ----------------------------------------------------------------------
// // Boolean object    : đại diện chuỗi trả về true or false
// /*
// * Boolean(x) : x != 0 ----> true
// *              String ----> true
// *              NaN ----> false
// *              Null -----> false
// * */

// ----------------------------------------------------------------------

//     // JS DAtE
 var date = new Date();
document.write(date);
// getmonth : parseInt(date.getMonth() + 1)
var result = "<ul>";
result += "<li>" + " Nam : " + date.getFullYear() + space + "</li>" ;
result += "<li>" + "thang : " + parseInt(date.getMonth()+1) +space + "</li>"
result += "</ul>"
document.write(result);


// sử dụng hàm get - set
/*
* toDateString : chuyên về dễ nhìn : xx.yy.zz
* toLocaledate : chuyển về dạng :xx/yy/zz
* tolocaleString : xx/yy/zz aa:bb AM(PM)
* */

// // ----------------------------------------------------------------------
//RegExp Object : mô tả mẫu các chuỗi văn bản
// tìm kiếm tên or email hợp lệ hay ko

var str = "java thật la dễ ";
var patt = new RegExp("java");
document.write(str.match("java"));

// RegExp(x,y)  : x là chữ cần chuyền
//                   y = i : ko phân biệt chữ hoa or thường
//                   y = g : trả về các giá  trị phù hợp
//                   y = m : tìm kiếm trên tất cả các dòng

// RegExp Method

/*
* global :  y=g ---> true và nguoc lai
* ignoreCase : y = i ---> true và ngược lại
*lastIndex : y = g --> tìm ra số thứ tự chữ trong chuỗi
* multiline : y = m ---> true and ngược lại
* source : trả về giá trị đã gán
*
* exec(x) : kiểm tra x có trong mã nguồn ko ? nếu có trả về x, ko có trả về null
* test(x) : x có trong mã nguồn ---> true and nguoc lại
*
* */

// ----------------------------------------------------------------------

// Global Object
/*
* Infinity : âm vô cùng or dương vô cùng
* NaN : not a number
* undefined : chưa gán giá trị chuỗi
* encodeURIComponent : mã hóa các ký tự đặc biệt trong URI
* escape : Mã hóa ký tự đặc biệt có trong chuỗi
* unescape : Giải mã ký tự đặc biệt trong chuỗi
* eval(str) : thực hiện biểu thức or các câu lệnh chuyền vào chuỗi str
*
* */

// ----------------------------------------------------------------------


// Lâpj trình hướng đối ttượng

                                // Khai báo


/*
* function value(){         }        ---> khai báo thuộc tính value
** this.value = function(){           --> khai báo thuộc tính value

*

                                //public - private

/*
* public co thể dùng kế thùaP
* private không thể dùng ngoài kế thừa khi khác ackege
*
*
*
*
**-------------
* this.value = function(){           --> khai báo thuộc tính value
*       thís.msg = " thís is a test "        thuộc tính msg
*       thís.Msg = " javas";
*
*       this.getMsg = getMsg;                 phương thức
*
   this.valuechild = function(){             xây dựng kế thùa con
        value.call(this)
        }

*       function getMsg){                    xây dựng codecode
            returns.Msg
*                }      };
*
*var x = new Value();
* document.write(x.msg)         // in ra "thís is a test"
*document.write(x.getMsg)       // in ra javas
    x.setmsg("hello worl")
    document.write(x.msg)       // in ra hello worl

