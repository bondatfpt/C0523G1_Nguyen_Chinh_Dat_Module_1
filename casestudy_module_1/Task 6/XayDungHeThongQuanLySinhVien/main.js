class StudentCodeGym {
    constructor(fullname, classroom, email, module, date) {
        this.fullname = fullname;
        this.classroom = classroom;
        this.email = email;
        this.module = module;
        this.date = date;
    }
}

function save() {
    let fullName = document.getElementById("fullName").value;
    let classRoom = document.getElementById("classroom").value;
    let email = document.getElementById("email").value;
    let module = document.getElementById("module").value;
    let date = document.getElementById("date").value;


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
    if (fullName && classRoom && email && module && date) {
        let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        let studentChild = new StudentCodeGym(fullName, classRoom, email, module, date);
        students.push(studentChild);
        localStorage.setItem('students', JSON.stringify(students));
    }
    this.renderListStudents();
}

function renderListStudents() {
    let students = [];
    students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    let tableStudent = `<tr>
            <th>Mã học viên</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Email</th>
            <th>Module</th>
            <th>Ngày sinh</th>
            <th>Hành động</th>
        </tr>`;
    students.forEach((studentChild, index) => {
        let studentId = index;
        index++;
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
    localStorage.setItem('students', JSON.stringify(students));
    document.getElementById('studentsList').innerHTML = tableStudent;
}

function deleteStudent(id) {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    students.splice(id, 1);
    localStorage.setItem('students', JSON.stringify(students));
    renderListStudents();
}

function editStudent(id) {
    let chooseEdit;
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
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
    localStorage.setItem('students', JSON.stringify(students));
    renderListStudents();
}



























