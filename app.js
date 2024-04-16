var COINS = 100
var MYTHRILL = 0

var MYTHRILL_UI = document.getElementById('mythrill')
var POPUP_UI = document.getElementById('PopUp')
var POPUP_TEXT = document.getElementById('PopUp-Text')

//Start Langsung ke add
function Started() {
    document.getElementById('coins').innerHTML = ': '+COINS
    document.getElementById('mythrill').innerHTML = ': '+MYTHRILL
}
Started()

function PopUp() {
    POPUP_UI.style.display = 'none'
}
PopUp()

function PopUpExit() {
    setTimeout(function () {
        POPUP_UI.style.display = 'none'
    }, 4000)
}

function CheckCoins() {
    if (COINS == 0){
        document.getElementById('btn-spin').style.visibility = 'hidden'
    } else {
        COINS -= 1
    }
}
CheckCoins()

function spin() {
    document.getElementById('coins').innerHTML = ': '+COINS
    var wheel = document.getElementById('wheel')
    var rotationTime = Math.random() * 2 + 2
    var btn_spin = document.getElementById('btn-spin')
    wheel.style.transitionDuration = rotationTime + 's'
    wheel.classList.toggle('spin')
    btn_spin.style.display = 'none'
    setTimeout(function() {
        wheel.style.transitionDuration = '0.5s'
    })
    setTimeout(function() {
        btn_spin.style.display = 'flex'
    }, 3000)
    CheckCoins()
    spinLucky()
}

function spinLucky() {
    const data =  ~~(Math.random() * 4000)
    document.getElementById('code').innerHTML = data

    if (data > 1000 && data < 1200) {
        COINS += 1
        POPUP_TEXT.innerHTML = "You Small Win 1+"
        POPUP_UI.style.display = 'flex'
        PopUpExit()
    }

    if (data > 1300 && data < 1500) {
        COINS += 30
        POPUP_TEXT.innerHTML = "You Big Win 30+"
        POPUP_UI.style.display = 'flex'
        PopUpExit()
    } else {
        if (data > 2100 && data < 3000) {
            COINS += 50
            POPUP_TEXT.innerHTML = "You Super Win 50+"
            POPUP_UI.style.display = 'flex'
            PopUpExit()
        }
    }

    if (COINS < 400) {
        if (data > 1 && data < 100) {
            COINS += 500
            POPUP_TEXT.innerHTML = "You Win Jacpot 500+"
            POPUP_UI.style.display = 'flex'
            PopUpExit()
        }
    }

    //Bagian Menambahkan Mythrill
    if (data > 1600 && data < 2000) {
        MYTHRILL += 1
        POPUP_TEXT.innerHTML = "You Win Mythrill 1+"
        PopUpExit()
    }
}

function Ui_shop() {
    var shop = document.getElementById('shop')
    shop.style.transitionDuration = .7 + 's'
    shop.classList.toggle('slide')
}

function Buy(nameItem) {
    var HARGA;
    var ITEMS;
    var items = document.querySelectorAll('.item-shop')
    items.forEach(function(item) {
        if ( item.querySelector('p').innerText.includes(nameItem)) {
            HARGA = parseInt(item.querySelector('.harga').textContent);
            ITEMS = parseInt(item.querySelector('.nam').textContent);
        }
    });
    if (MYTHRILL >= HARGA) {
        MYTHRILL -= HARGA;
        COINS += ITEMS;
        document.getElementById('coins').innerHTML = ': '+COINS
        MYTHRILL_UI.innerHTML = MYTHRILL
        console.log(MYTHRILL)
    } else {
        console.log('mythrill tidak cukup');
    }
    MYTHRILL_UI;
}