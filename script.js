function get(id){
    document.getElementById(id)
.addEventListener('click', function(){
    const availableHeart = parseInt(document.getElementById('heart-icon').innerText)
    const newAvailableHeart = availableHeart + 1;
    document.getElementById('heart-icon').innerText = newAvailableHeart
})
}