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


document.querySelector(".adding_groups").addEventListener("click", () => {
    fetch("http://localhost:9000/admin/grouppost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: exampleDataList34.value,
            teacherId: exampleDataList35.value
        })
    })
    window.location.reload()
})

let putGroupId
const putGroupDataName = document.querySelector("#exampleDataList444")
const putGroupDataTeacherId = document.querySelector("#exampleDataList445")

document.querySelector(".table-body-groups").addEventListener("click", async(e) => {
    if (e.target.matches(".delete_btn_groups")) {
        fetch(`http://localhost:9000/admin/groupdelete/${e.target.id}`, { method: "DELETE" })
        window.location.reload()
    } else if (e.target.matches(".edit_btn_goups")) {
        const res = await fetch(`/admin/groupgetupdate/${e.target.id}`, { method: "PUT" })
        const data = await res.json()

        console.log(data);

        putGroupId = data.id
        putGroupDataName.value = data.name
        putGroupDataTeacherId.value = data.teacherId

    } else if (e.target.matches(".updated_btn_groups")) {
        fetch(`/admin/groupupdate/${putGroupId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: putGroupDataName.value,
                teacherId: putGroupDataTeacherId.value
            })
        })
        window.location.reload()
    }
})