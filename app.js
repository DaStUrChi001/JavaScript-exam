const formEl = document.querySelector("#forma")
const containerEl = document.querySelector(".container")
const inpNameEl = document.querySelector("#name")
const inpCostEl = document.querySelector("#cost")
const inpLinkEl = document.querySelector("#link")
const inpChefEl = document.querySelector("#chef")
const inpRestaurantEl = document.querySelector("#restaurant")

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const newDivEl = document.createElement("div")
    newDivEl.style.marginTop = "47px"
    newDivEl.style.padding = "30px"
    newDivEl.style.display = "flex"
    newDivEl.style.justifyContent = "space-between"
    newDivEl.style.alignItems = "center"
    newDivEl.style.backgroundColor = "#FFFFFF"
    newDivEl.style.borderRadius = "25px"

    const newWrapperEl = document.createElement("div")
    newWrapperEl.style.display = "flex"
    newWrapperEl.style.gap = "42px"
    newWrapperEl.style.alignItems = "center"

    const imgEl = document.createElement("img");
    imgEl.src = inpLinkEl.value;
    imgEl.style.width = "252px"
    imgEl.style.height = "168px"
    imgEl.style.borderRadius = "18px"

    const informationEl = document.createElement("div")
    informationEl.style.display = "flex"
    informationEl.style.flexDirection = "column"
    informationEl.style.gap = "17px"

    const nameEl = document.createElement("p")
    nameEl.innerHTML = "Taom nomi: " + inpNameEl.value
    nameEl.style.fontWeight = "700"

    const costEl = document.createElement("p")
    costEl.innerHTML = "Taom narxi: $" + inpCostEl.value
    costEl.style.fontWeight = "700"

    const chefEl = document.createElement("p")
    chefEl.innerHTML = "Taom oshpazi: " + inpChefEl.value
    chefEl.style.fontWeight = "700"

    const restaurantEl = document.createElement("p")
    restaurantEl.innerHTML = "Taom restorani: " + inpRestaurantEl.value
    restaurantEl.style.fontWeight = "700"

    const wrapperEl2 = document.createElement("div")
    wrapperEl2.style.display = "flex"
    wrapperEl2.style.flexDirection = "column"
    wrapperEl2.style.gap = "20px"

    const dateEl = document.createElement("p")
    dateEl.innerHTML = new Date().getDate() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()
    dateEl.style.padding = "11px 39px"
    dateEl.style.backgroundColor = "#F5D00D"
    dateEl.style.color = "#FFFFFF"

    const deleteEl = document.createElement("button")
    deleteEl.innerHTML = "Delete"
    deleteEl.style.padding = "10px 39px"
    deleteEl.style.backgroundColor = "red"
    deleteEl.style.color = "#FFFFFF"

    deleteEl.addEventListener("click", () => {
        newDivEl.remove()
    })

    containerEl.appendChild(newDivEl)
    newDivEl.appendChild(newWrapperEl)
    newWrapperEl.appendChild(imgEl)
    newWrapperEl.appendChild(informationEl)
    informationEl.appendChild(nameEl)
    informationEl.appendChild(costEl)
    informationEl.appendChild(chefEl)
    informationEl.appendChild(restaurantEl)
    newDivEl.appendChild(wrapperEl2)
    wrapperEl2.appendChild(dateEl)
    wrapperEl2.appendChild(deleteEl)
})