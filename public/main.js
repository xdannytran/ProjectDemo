console.log("js connected")

const breakfast = document.getElementById("breakfast")
const lunch = document.getElementById("lunch")
const dinner = document.getElementById("dinner")
const displaySection = document.getElementById("display-section")

const handleClick = (e) =>{
    axios.get(`http://localhost:5050/api/${e.target.id}`).then(res => {
        console.log(res.data)
        let foodTitle = document.createElement("h3")
        foodTitle.textContent = res.data
        displaySection.appendChild(foodTitle)
    })
}




breakfast.addEventListener("click",handleClick)
lunch.addEventListener("click",handleClick)
dinner.addEventListener("click",handleClick)