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


const tost = document.querySelector(".my_tosts")
const close_tost = document.querySelector(".tost_closes")
const md_modal = document.querySelector("#exampleModal777")


document.querySelector(".table-body-groups-teacher").addEventListener("click", (e) => {
    if (e.target.matches(".add_homework")) {
        let id = Number(e.target.id) + 505
        let title = document.querySelector('#exampleDataList' + id)
        fetch("/teacher/addhomework", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: e.target.id,
                homework: title.value
            })
        })

        tost.style.display = "block"

        setTimeout(() => {
            tost.style.display = "none"
            window.location.reload()
        }, 2000);
    }
})


close_tost.addEventListener("click", () => {
    tost.style.display = "none"
})