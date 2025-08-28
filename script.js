function get(id){
    document.getElementById(id)
.addEventListener('click', function(){
    const availableHeart = parseInt(document.getElementById('heart-icon').innerText)
    const newAvailableHeart = availableHeart + 1;
    document.getElementById('heart-icon').innerText = newAvailableHeart
})
}
function alertShow(id){
    document.getElementById(id)
.addEventListener('click', function(){
    const card = this.closest(".shadow-md");
    const serviceName = card.querySelector("h3").innerText;
    const serviceNum = card.querySelector("h1").innerText;
    const availableCoin = parseInt(document.getElementById('coin-icon').innerText)
    const newAvailableCoin = availableCoin - 20;
    
    if(availableCoin <= 0){
        alert('আপনার পর্যাপ্ত ব্যালেন্স নেই; কমপক্ষে ২০ কয়েন লাগবে')
        return
    }
    document.getElementById('coin-icon').innerText = newAvailableCoin 

    const callHistory = [];
    document.getElementById("service-name").innerText = serviceName;
    document.getElementById("service-num").innerText = serviceNum;


    document.getElementById("alert").classList.remove("hidden");
    
    
    const data = {
        name: card.querySelector('h3').innerText,
        number : card.querySelector('h1').innerText,
        date : new Date().toLocaleTimeString()
    }
    callHistory.push(data)
    console.log(callHistory) 

    const callHistoryContainer = document.getElementById('callHistory-container')
    for(const history of callHistory){
        const div = document.createElement('div')
        div.innerHTML = `
            <div  class="flex items-center justify-between bg-[#00000008] rounded-[10px] p-[14px] mb-[8px]">
            <div >
                <h1 class="text-[14px] ">${data.name}</h1>
                <p class="text-[14px] text-gray-700">${data.number}</p>
            </div>
            <div class="text-[15px]">${data.date}</div>
        </div>
     
        `
        callHistoryContainer.appendChild(div)

         
    }
})
}
