var COINS = 100
var MYTHRILL = 20

var MYTHRILL_UI = document.getElementById('mythrill')

//Start Langsung ke add
function addCoins() {
    document.getElementById('coins').innerHTML = ': '+COINS
    document.getElementById('mythrill').innerHTML = ': '+MYTHRILL
}
addCoins()

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
    }

    if (data > 1300 && data < 1500) {
        COINS += 30
    } else {
        if (data > 2100 && data < 3000) {
            COINS += 50
        }
    }

    if (COINS < 400) {
        if (data > 1 && data < 10) {
            COINS += 500
        }
    }

    //Bagian Menambahkan Mythrill
    if (data > 1600 && data < 2000) {
        MYTHRILL += 1
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
        document.getElementById('coins').innerHTML = ':'+COINS
        MYTHRILL_UI.innerHTML = MYTHRILL
        console.log(MYTHRILL)
    } else {
        console.log('mythrill tidak cukup');
    }
    MYTHRILL;
}