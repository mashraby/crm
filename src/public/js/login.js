const login = document.querySelector(".login_form")
const login_btn = document.querySelector(".login_btn")
const tost3 = document.querySelector(".my_tosts_3")
const close_tost_3 = document.querySelector(".tost_closes_3")
const loginName = document.querySelector(".loginName")
const loginPassword = document.querySelector(".loginPassword")

login.addEventListener("submit", (e) => {
    e.preventDefault()
    fetch("http://localhost:9000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: loginName.value,
            password: loginPassword.value
        })
    }).then(res => {
        console.log(res);

        if (res.status == 401) {
            tost3.style.display = "block"
            setTimeout(() => {
                tost3.style.display = "none"
            }, 3000);
        } else {
            window.location.reload()
        }
    })
})


close_tost_3.addEventListener("click", () => {
    tost3.style.display = "none"
})