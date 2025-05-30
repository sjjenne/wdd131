let select = document.querySelector("select");
let logo = document.querySelector("img");

select.addEventListener("change", changeTheme);


function changeTheme() {
    let current = select.value;
    console.log(current);
    if (current == "dark") {
        document.body.className = "dark";
        logo.setAttribute("src", "byui-logo_white.png")
        logo.setAttribute("alt", "BYU-Idaho logo")
    }
    else {
        document.body.classList.remove("dark");
        logo.setAttribute("src", "byui-logo_blue.webp")
        logo.setAttribute("alt", "BYU-Idaho logo")
    }
}

