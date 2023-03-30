const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
generateBtn = container.querySelector(".form button"),
qrImg = container.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generando codigo QR...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
     container.classList.add("active");
     generateBtn.innerText = "Generar codigo QR";
    })
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.Value) {
        container.classList.remove("active");
    }
});