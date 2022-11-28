// const minusButton = document.querySelector(".minus")
// const plusButton = document.querySelector(".plus")
// const paragraph = document.querySelector(".lower")
// const card = document.querySelector(".card")


// minusButton.addEventListener("click", (e) => {
//     e.preventDefault()
//     paragraph.classList.toggle("hidden")

//     minusButton.classList.toggle("hidden")
//     plusButton.classList.toggle("hidden")

//     console.log("clicked")
// })

// plusButton.addEventListener("click", (e) => {
//     e.preventDefault()
//     paragraph.classList.toggle("hidden")

//     minusButton.classList.toggle("hidden")
//     plusButton.classList.toggle("hidden")

//     console.log("clicked")
// } )


///////////////////////////////////////////

const minusButtons = document.querySelectorAll(".minus")
const plusButtons = document.querySelectorAll(".plus")
const lowers = document.querySelectorAll(".lower")
const cards = document.querySelectorAll(".card")




plusButtons.forEach((plusButton) => {
    plusButton.addEventListener("click", () => {
        plusButton.classList.toggle("hidden")
        //add minus button
        plusButton.previousElementSibling.classList.toggle("hidden")
        //show content
        plusButton.nextElementSibling.classList.toggle("hidden")


        setTimeout(() => {
            plusButton.classList.toggle("hidden")
            plusButton.previousElementSibling.classList.toggle("hidden")
            plusButton.nextElementSibling.classList.toggle("hidden")
        }, 5000)
    })

    
    
})


minusButtons.forEach((minusButton) => {
    minusButton.addEventListener("click", () => {
        minusButton.classList.toggle("hidden");
        minusButton.nextElementSibling.classList.toggle("hidden")
        minusButton.parentNode.lastElementChild.classList.toggle("hidden")
    
    })


})


