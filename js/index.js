function showList() {
    var list = document.getElementById("mobileNav");
    if (list.style.top == "-200px") {
        list.style.top = "50px";
    } else {
        list.style.top = "-200px";
    }
}