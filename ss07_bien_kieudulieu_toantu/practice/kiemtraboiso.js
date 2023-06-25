function clickme() {
    let b = prompt("Nhập vào 1 số")
    let c = prompt("Nhập vào 1 số")
    let d = parseInt(b)
    let e = parseInt(c)
    if (d % e == 0) {
        alert("ok");
    } else {
            alert("no")
    }

}