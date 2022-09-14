window.addEventListener("DOMContentLoaded", () => {
console.log(document.cookie)
bindingInput()
})
function bindingInput(){
    var deleteButtons = document.querySelectorAll('.btn-danger');
    var balise = document.getElementById('tweetList')
    console.log(deleteButtons)
    deleteButtons.forEach( button =>{
        button.addEventListener('click', event =>{
            var value = event.target.getAttribute('tweetId')
            axios.delete("/tweets/"+value).then( function(template){
            console.log(template.data)
            balise.innerHTML = template.data
            bindingInput()
            })
        })
    })
}