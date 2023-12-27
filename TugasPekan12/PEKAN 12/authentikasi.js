

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert("Berhasil Login");
        window.location="index.html";
        return false;
    }
    else if (username == "" || password == ""){
        alert("Username atau Password tidak boleh kosong");
    }
    else {
        alert("Username atau Password Salah");
    }
}