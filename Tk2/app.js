var buton = document.getElementById('btn');
buton.onclick = function () {
    var num = Number(input.slice(-3, -2));}
    var color = document.getElementById('color');
    var text = document.getElementById('text');
    var input = document.getElementById('input').value;
  
    if (num == 3) {
        color.style.backgroundImage = "url(https://img.freepik.com/free-vector/full-moon-night-ocean-cartoon-illustration_33099-2308.jpg?w=2000)";
        text.innerHTML = "Gecə Qrupudur!"
         text.style.color='black'
    }

    else if (num == 2) {
        color.style.backgroundImage = "url(https://wallpaperaccess.com/full/4349823.jpg)";
        text.innerHTML = "Günorta Qrupudur!"
        text.style.color='yellow'
    }

    else if (num == 1) {
        color.style.backgroundImage = "url(https://static.vecteezy.com/system/resources/previews/004/482/791/original/sunrise-in-mountains-nature-landscape-background-the-sun-shines-behind-the-mountains-with-the-cool-morning-air-under-the-dawn-sky-morning-view-cartoon-illustration-vector.jpg)";
        text.innerHTML = "Seher Qrupudur!"
        text.style.color='blue'
    }

    else {
        text.innerHTML = "Qrup sehv daxil edilib!"
    }
