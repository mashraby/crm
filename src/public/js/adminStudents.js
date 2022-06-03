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

document.querySelector(".adding_students").addEventListener("click", () => {
    fetch("https://crmuz.herokuapp.com/admin/studentpost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: exampleDataList901.value,
            password: exampleDataList900.value,
            groupId: exampleDataList899.value
        })
    })
    window.location.reload()
})

let putStudentId
const putStudentDataName = document.querySelector("#exampleDataList2006")
const putStudentDataPassword = document.querySelector("#exampleDataList2005")
const putStudentDataGroupId = document.querySelector("#exampleDataList2004")

document.querySelector(".table-body-students").addEventListener("click", async(e) => {
    if (e.target.matches(".delete_btn_student")) {
        fetch(`https://crmuz.herokuapp.com/admin/studentdelete/${e.target.id}`, { method: "DELETE" })
        window.location.reload()
    } else if (e.target.matches(".edit_btn_students")) {
        const res = await fetch(`/admin/studentgetupdate/${e.target.id}`, { method: "PUT" })
        const data = await res.json()

        console.log(data);

        putStudentId = data.id
        putStudentDataName.value = data.name
        putStudentDataPassword.value = data.password
        putStudentDataGroupId.value = data.groupId

    } else if (e.target.matches(".updated_btn_students")) {
        fetch(`/admin/studentupdate/${putStudentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: putStudentDataName.value,
                password: putStudentDataPassword.value,
                groupId: putStudentDataGroupId.value
            })
        })
        window.location.reload()
    }
})