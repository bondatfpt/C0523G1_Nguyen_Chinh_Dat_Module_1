
// Khởi tạo 1 class StudentCodeGym có các thuộc tính như đề bài;
class StudentCodeGym {
    constructor(fullname, classroom, email, module, date) {
        this.fullname = fullname;
        this.classroom = classroom;
        this.email = email;
        this.module = module;
        this.date = date;
    }
}
// Hàm lưu thông tin sinh viên do người dùng nhập vào
function save() {
    let fullName = document.getElementById("fullName").value;
    let classRoom = document.getElementById("classroom").value;
    let email = document.getElementById("email").value;
    let module = document.getElementById("module").value;
    let date = document.getElementById("date").value;

// Nếu một trong các trường dữ liệu rỗng thì không thể lưu thông tin sinh viên;
    if (fullName === "") {
        document.getElementById("errorName").innerHTML = "Bạn chưa nhập họ và tên";
    } else {
        document.getElementById("errorName").innerHTML = "";
    }
    if (classRoom === "") {
        document.getElementById("errorClass").innerHTML = "Bạn chưa nhập lớp";
    } else {
        document.getElementById("errorClass").innerHTML = "";
    }
    if (email === "") {
        document.getElementById("errorEmail").innerHTML = "Bạn chưa nhập email";
    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }
    if (module === "") {
        document.getElementById("errorModule").innerHTML = "Bạn chưa nhập lớp";
    } else {
        document.getElementById("errorModule").innerHTML = "";
    }
    if (date === "") {
        document.getElementById("errorDate").innerHTML = "Bạn chưa nhập sinh nhật";
    } else {
        document.getElementById("errorDate").innerHTML = "";
    }
    // Nếu các trường dữ liệu được điền đầy đủ thì sẽ lưu các đối tượng sinh viên đó vào kho localStorage;
    if (fullName && classRoom && email && module && date) {
        let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        let studentChild = new StudentCodeGym(fullName, classRoom, email, module, date);
        students.push(studentChild);
        localStorage.setItem('students', JSON.stringify(students)); //  chuyển dữ liệu thành chuỗi, localStorage chỉ lưu chuỗi;
    }
    this.renderListStudents(); // Hàm hiển thị sinh viên khi được thêm mới;
}
// Hàm hiển thị sinh viên
function renderListStudents() {
    let students = [];  // khai báo 1 mảng rỗng
    // Lấy dữ liệu từ localStorage
    students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    // Tạo một table động;
    let tableStudent = `<tr>
            <th>Mã học viên</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Email</th>
            <th>Module</th>
            <th>Ngày sinh</th>
            <th>Hành động</th>
        </tr>`;
    // Duyệt qua từng phần tử của mảng students(mảng chứa các đối tượng sv do người dùng nhập trong localStorage)
    students.forEach((studentChild, index) => {
        let studentId = index;  // lấy id là index trong vòng lặp này nên sẽ các hàm xóa hay sửa cũng sẽ dùng biến này
        index++;
        // ứng với mỗi ô tiêu đề(th) sẽ là các ô data (td) được lấy dữ liệu từ các thuộc tính của class StudentCodeGym;
        tableStudent += `<tr>
            <td>${index}</td>
            <td>${studentChild.fullname}</td>
            <td>${studentChild.classroom}</td>
            <td>${studentChild.email}</td>
            <td>${studentChild.module}</td>
            <td>${studentChild.date}</td>
            <td> 
            <a href="#" onclick="editStudent(${studentId})">  Sửa  </a> | <a href="#" onclick="deleteStudent(${studentId})"> Xóa </a>
            </td>
        </tr>`;
    })
    localStorage.setItem('students', JSON.stringify(students)); // chuyển dữ liệu thánh string;
    document.getElementById('studentsList').innerHTML = tableStudent; // in ra màn hình các ô td;
}

// Hàm xóa sinh viên theo id
function deleteStudent(id) {
    // lấy dữ liệu sinh viên từ trong localStorage ra
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    // vì students là mảng nên dùng splice để xóa. Id chính là vị trí của đối tượng trong mảng;
    students.splice(id, 1); // xóa từ vị trí id, xóa 1 cái;
    localStorage.setItem('students', JSON.stringify(students)); // chuyển dữ liệu thành string;
    renderListStudents();  // gọi lại hàm hiển thị danh sách sinh viên;
}

// Hàm sửa thông tin sinh viên theo id
function editStudent(id) {
    let chooseEdit;
    // Lấy dữ liệu từ kho localStorage ra;
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

    // Dùng do while để người dùng chọn trường dữ liệu cần sửa thông qua câu lệnh switch case 6 trường hợp;
    do {
        chooseEdit = +prompt("Thông tin cần sửa: \n 1.Họ Và Tên \n 2.Lớp \n 3.Email \n 4.Module \n 5.Ngày sinh \n 6.Kết thúc")
        if (chooseEdit < 1 || isNaN(chooseEdit) || chooseEdit > 6) {
            alert("Không hợp lệ, mời nhập lại");
        }
    }
    while (chooseEdit < 1 || isNaN(chooseEdit) || chooseEdit > 6);
    switch (chooseEdit) {
        case 1:
            students[id].fullName = prompt("Sửa họ và tên");
            break;
        case 2:
            students[id].classRoom = prompt("Sửa lớp");
            break;
        case 3:
            students[id].email = prompt("Sửa email");
            break;
        case 4:
            students[id].module = prompt("Sửa module");
            break;
        case 5:
            students[id].date = prompt("Sửa ngày sinh");
            break;
        case 6:
            alert("Thoát sửa thông tin ?");
    }
    localStorage.setItem('students', JSON.stringify(students));  // chuyển dữ liệu thành string;
    renderListStudents();  // gọi lại hàm hiển thị danh sách sinh viên;
}



























