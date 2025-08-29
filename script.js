// ---heart increase---
function get(id){
    document.getElementById(id).addEventListener('click', function(){
        const heart = document.getElementById('heart-icon');
        heart.innerText = parseInt(heart.innerText) + 1;
    });
}

// ---call alert---
function alertShow(id){
    const alertDiv = document.getElementById('alert');
    const closeBtn = document.getElementById('alert-close-btn');

    if(!closeBtn.dataset.listener){
        closeBtn.addEventListener('click', () => {
            alertDiv.style.display = 'none';
        });
        closeBtn.dataset.listener = true;
    }

    document.getElementById(id).addEventListener('click', function(){
        const card = this.closest(".shadow-md");
        const serviceName = card.querySelector("h3").innerText;
        const serviceNum = card.querySelector("h1").innerText;
        const coinEl = document.getElementById('coin-icon');
        const availableCoin = parseInt(coinEl.innerText);

        if(availableCoin < 20){
            alert('আপনার পর্যাপ্ত ব্যালেন্স নেই; কমপক্ষে ২০ কয়েন লাগবে');
            return;
        }

        coinEl.innerText = availableCoin - 20;
        document.getElementById("service-name").innerText = serviceName;
        document.getElementById("service-num").innerText = serviceNum;

        // show alert every time
        alertDiv.style.display = 'block';

        const callHistoryContainer = document.getElementById('callHistory-container');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex items-center justify-between bg-[#00000008] rounded-[10px] p-[14px] mb-[8px]">
                <div>
                    <h1 class="text-[14px]">${serviceName}</h1>
                    <p class="text-[14px] text-gray-700">${serviceNum}</p>
                </div>
                <div class="text-[15px]">${new Date().toLocaleTimeString()}</div>
            </div>
        `;
        callHistoryContainer.appendChild(div);
    });
}

// ---copy alert---
function copyToClipboard(number) {
    navigator.clipboard.writeText(number).then(() => {
        document.getElementById("copy-num").innerText = number;
        document.getElementById("copy-alert").style.display = 'block';
        const copyIcon = document.getElementById('copy-icon');
        copyIcon.innerText = parseInt(copyIcon.innerText) + 1;
    });
}

function copyAlert(id){
    const alertDiv = document.getElementById('copy-alert');
    const closeBtn = document.getElementById('copy-alert-close-btn');

    if(!closeBtn.dataset.listener){
        closeBtn.addEventListener('click', () => {
            alertDiv.style.display = 'none';
        });
        closeBtn.dataset.listener = true;
    }

    document.getElementById(id).addEventListener('click', function(){
        const card = this.closest(".shadow-md");
        const hotlineNumber = card.querySelector("h1").innerText;
        copyToClipboard(hotlineNumber);
    });
}

// ---clear history---
document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('callHistory-container').innerHTML = '';
});

// ---initialize---
["heart-btn","heart-btn2","heart-btn3","heart-btn4","heart-btn5","heart-btn6","heart-btn7","heart-btn8","heart-btn9"].forEach(get);
["call-btn","call-btn2","call-btn3","call-btn4","call-btn5","call-btn6","call-btn7","call-btn8","call-btn9"].forEach(alertShow);
["copy-btn","copy-btn2","copy-btn3","copy-btn4","copy-btn5","copy-btn6","copy-btn7","copy-btn8","copy-btn9"].forEach(copyAlert);
