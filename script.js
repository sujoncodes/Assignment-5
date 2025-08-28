// ----function-creat----
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

function alertRemove(){
    document.getElementById("alert-close-btn")
.addEventListener('click',function(){
    const alert = document.getElementById('alert')
    document.getElementById('alert').style.display = "none"
    
})
}


// ----history-clear-btn----
document.getElementById('clear-btn')
    .addEventListener('click',function(){
        const callHistoryContainer = document.getElementById('callHistory-container')
        callHistoryContainer.innerHTML = '';
        
    })



// ----copy-to-clipboard helper----
function copyToClipboard(number) {
    navigator.clipboard.writeText(number).then(() => {
        document.getElementById("copy-num").innerText = number;
        document.getElementById("copy-alert").classList.remove("hidden");
        const copyCount = parseInt(document.getElementById('copy-icon').innerText)
        const newCopyCount = copyCount + 1;
        document.getElementById('copy-icon').innerText = newCopyCount
    });
}

function copyAlert(id) {
    document.getElementById(id).addEventListener("click", function () {
        const card = this.closest(".shadow-md");
        const hotlineNumber = card.querySelector("h1").innerText;
        copyToClipboard(hotlineNumber);
        
    });
}

function copyAlertRemove() {
    document
        .getElementById("copy-alert-close-btn")
        .addEventListener("click", function () {
            document.getElementById("copy-alert").style.display = "none";
        });
}
copyAlert("copy-btn");
copyAlert("copy-btn2");
copyAlert("copy-btn3");
copyAlert("copy-btn4");
copyAlert("copy-btn5");
copyAlert("copy-btn6");
copyAlert("copy-btn7");
copyAlert("copy-btn8");
copyAlert("copy-btn9");
copyAlertRemove();
   


// ---heart-increase---
get('heart-btn')
get('heart-btn2')
get('heart-btn3')
get('heart-btn4')
get('heart-btn5')
get('heart-btn6')
get('heart-btn7')
get('heart-btn8')
get('heart-btn9')


// ----copy-btn----



// ----call-btn----
alertShow("call-btn")
alertShow("call-btn2")
alertShow("call-btn3")
alertShow("call-btn4")
alertShow("call-btn5")
alertShow("call-btn6")
alertShow("call-btn7")
alertShow("call-btn8")
alertShow("call-btn9")
alertRemove()
