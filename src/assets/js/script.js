const button = document.querySelector("#btnSubmit")
const feedback = document.querySelector("#cartel")
const fields = document.querySelectorAll(".validate")
const alert = document.querySelector(".alert")

function validate(errors) {
    fields.forEach(function(field){
        if(field.value == ""){
            field.classList.add("errorField")
            errors.push(field.id)
        }
    })
}

function showErrorMessage(message) {
    alert.style.display = "block"
    feedback.innerHTML = message
    setTimeout(function() {
        alert.style.display = "none";
    }, 2000);
}

button.addEventListener("click", function(event){
    let errors = []
    event.preventDefault()
    alert.style.display = "none"
    feedback.innerHTML = ``
    validate(errors)
    if(errors.length > 0) {
        showErrorMessage(`Los campos ${errors.toString()} no pueden estar vacios.`)
        return false
    }

})

fields.forEach(function(field){
    field.addEventListener("keyup", function(){
        field.classList.remove("errorField")
    })
})
