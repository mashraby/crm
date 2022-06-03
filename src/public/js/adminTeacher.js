const modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function() {
    document.documentElement.classList.toggle('light');
    modeSwitch.classList.toggle('active');
});

const currentLocation = location.href
const sidebarItem = document.querySelector(".sidebar").querySelectorAll("a")
const sidebarItemLength = sidebarItem.length
console.log(currentLocation);

for (let i = 0; i < sidebarItemLength; i++) {
    if(sidebarItem[i].href == currentLocation) {
        sidebarItem[i].className = "active"
        console.log(sidebarItem[i].href);
    }
}

document.querySelector(".adding_teacher").addEventListener("click", () => {

    fetch('http://localhost:9000/admin/teacherpost', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: exampleDataList11.value,
            salary: exampleDataList12.value,
            password: exampleDataList15.value,
            courseId: exampleDataList13.value
        })
    })

    window.location.reload()
})

let putTeacherId
const putTeacherDataName = document.querySelector("#exampleDataList111")
const putTeacherDataSalary = document.querySelector("#exampleDataList121")
const putTeacherDataPassword = document.querySelector("#exampleDataList151")
const putTeacherDataCourseId = document.querySelector("#exampleDataList131")

document.querySelector(".table-body-teachers").addEventListener("click", async(e) => {
    if (e.target.matches(".delete_btn_teacher")) {
        fetch(`http://localhost:9000/admin/teacherdelete/${e.target.id}`, { method: "DELETE" })
        window.location.reload()
    } else if (e.target.matches(".edit_btn_teacher")) {
        const res = await fetch(`/admin/teachergetupdate/${e.target.id}`, { method: "PUT" })
        const data = await res.json()

        putTeacherId = data.id
        putTeacherDataName.value = data.name
        putTeacherDataSalary.value = data.salary
        putTeacherDataPassword.value = data.password
        putTeacherDataCourseId.value = data.courseId

    } else if (e.target.matches(".updated_btn_teachers")) {
        console.log(putTeacherId)
        fetch(`/admin/teacherupdate/${putTeacherId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: putTeacherDataName.value,
                salary: putTeacherDataSalary.value,
                password: putTeacherDataPassword.value,
                courseId: putTeacherDataCourseId.value
            })
        })
        window.location.reload()
    }
})