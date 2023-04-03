
function vaxt() {
    var input = document.getElementById("inp1").value
    var number = Number(input.slice(-3, -2))
    var txt = document.getElementById("h2")
    var bgcolor1 = document.getElementById('color')


    if (number == 3) {
        document.getElementById("h2").innerHTML = "seher qrupusuz"
        bgcolor1.style.backgroundImage = "url(https://cdn.oxu.az/uploads/W1siZiIsIjIwMTgvMDEvMTcvMTIvMjkvMDEvNTUwL2ZvdG8tMTEuanBnIl1d?sha=7db49768d2dc09d4)"

    }
    else if (number == 2) {
        document.getElementById("h2").innerHTML = "gunorta qrupusuz"
        bgcolor1.style.backgroundImage = "url(https://img.day.az/2023/03/29/800x550/baki_hava_proqnozu_012.jpg)"

    }
    else if (number == 1) {
        document.getElementById("h2").innerHTML = "axsam qrupusuz"
        bgcolor1.style.backgroundImage = "url(https://img.milli.az/2021/04/04/duman_baki_hava.jpg)"

    }
    else {
        document.getElementById("h2").innerHTML = "qrup sehv daxil edilib veya bele qrup yoxdur"

    }
}
