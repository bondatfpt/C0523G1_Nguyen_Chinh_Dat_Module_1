let a = prompt("Ai đó")
if (a == "Admin") {
    let b = prompt("Nhập mật khẩu");
    if (b == "TheMaster") {
        alert("wellcome");
    } else if (b == null) {
        alert("Canceled");
    } else {
        alert("Wrong pass")
    }
} else if (a == null) {
    alert("Canceled")
}
else {
    alert("T dont know you")
}
