const groupTeacherActive = document.querySelector(".Groups1")
groupTeacherActive.classList.add("active")

const upload_homework = document.querySelector(".upload_homework_form")
const tost2 = document.querySelector(".my_tosts_2")
const close_tost_2 = document.querySelector(".tost_closes_2")


upload_homework.addEventListener("submit", (e) => {
    tost2.style.display = "block"

    setTimeout(() => {
        window.location.reload()
    }, 3000);
})

close_tost_2.addEventListener("click", () => {
    tost2.style.display = "none"
})