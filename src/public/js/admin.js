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

document.querySelector(".adding_course").addEventListener("click", () => {
    fetch("https://crmuz.herokuapp.com/admin/coursepost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: exampleDataList.value,
            price: exampleDataList2.value
        })
    })
    window.location.reload()
})

let putId;
const putDataName = document.querySelector("#recipientName")
const putDataPrice = document.querySelector("#recipientName2")

document.querySelector(".table-body").addEventListener("click", async(e) => {
    if (e.target.matches(".edit_btn")) {
        const res = await fetch(`/admin/coursegetupdate/${e.target.id}`, { method: "PUT" })
        const data = await res.json()

        putId = data.id
        putDataName.value = data.name
        putDataPrice.value = data.price

    } else if (e.target.matches(".delete_btn")) {

        window.location.reload()
        fetch(`/admin/coursedelete/${e.target.id}`, { method: "DELETE" })

    } else if (e.target.matches(".updated_btn_courses")) {

        fetch(`/admin/courseupdate/${putId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: putDataName.value,
                price: putDataPrice.value
            })
        })
        window.location.reload()
    }
})