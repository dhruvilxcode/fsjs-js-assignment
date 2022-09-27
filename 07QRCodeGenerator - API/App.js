const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const qrIMG = document.getElementById("img");

submit.addEventListener('click', generateQR);

async function generateQR() {
    const inputValue = input.value;

    if(inputValue === "") {
        alert("Provide data to get QR");
        return;
    }

    // call the api to generate QR
    const img = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    qrIMG.setAttribute("src", img);
    qrIMG.style.display = "block";
}