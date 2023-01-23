let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
    total = total += count 
    totalEl.textContent = total
    
    countEl.textContent = 0
    count = 0
}



let saveElPush = document.getElementById("save-el-push")
let countElPush = document.getElementById("count-el-push")
let totalElPush = document.getElementById("total-el-push")
let countPush = 0
let totalPush = 0

function incrementPush() {
    countPush += 1
    countElPush.textContent = countPush
}

function savePush() {
    let countStr = countPush + " - "
    saveElPush.textContent += countStr
    
    totalPush = totalPush += countPush 
    totalElPush.textContent = totalPush
    
    countElPush.textContent = 0
    countPush = 0
}
