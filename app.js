function time() {
    let tarix = new Date();

    let spanSaat = document.getElementById("saat");
    let spanDeq = document.getElementById("deq");
    let spanSan = document.getElementById("san");

    spanSaat.innerText = tarix.getHours().toString().padStart(2, "0");
    spanDeq.innerText = tarix.getMinutes().toString().padStart(2, "0");
    spanSan.innerText = tarix.getSeconds().toString().padStart(2, "0");
}

setInterval(time, 1000);

const indi = new Date();
        document.getElementById("tarix").innerText = indi.toLocaleDateString();
