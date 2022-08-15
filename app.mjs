function startApp() {
  let inputElement = document.querySelector(".form-control");
  inputElement.addEventListener("input", indicateNetwork);
  let spanElement = document.querySelector(".image");
  const wrongInput = document.querySelector(".inputError");
  const unknownNumber = document.querySelector(".unknownNumber");

  //   useCases for Carrier Networks
  let mtn = [803, 806, 814, 810, 813, 816, 703, 706, 903, 906];
  let etisalat = [809, 817, 818, 908, 909];
  let airtel = [802, 808, 812, 708, 701, 902, 901, 907];
  let glo = [805, 807, 811, 815, 705, 905];

  function indicateNetwork() {
    let inputValue = inputElement.value;
    let firstZeroNumber = inputValue.slice(0, 1);
    let firstFourNumbers = inputValue.slice(0, 4);
    let stringLength = inputValue.length;
    var digitsOnly = /^[0-9]+$/;

    if (inputValue.match(digitsOnly)) {
      wrongInput.style.display = "none";
      if (firstZeroNumber == 0 && stringLength == 11) {
        var prefix = Number(inputValue.slice(1, 4));
      } else if (firstZeroNumber !== 0 && stringLength == 10) {
        prefix = Number(inputValue.slice(0, 3));
      } else if (firstFourNumbers == "+234" && stringLength == 14) {
        prefix = Number(inputValue.slice(4, 7));
      }

      if (mtn.includes(prefix)) {
        const img = document.createElement("img");
        img.src = "./images/mtnLogo.jpg";
        spanElement.replaceChildren(img);
        unknownNumber.style.display = "none";
      } else if (etisalat.includes(prefix)) {
        const img = document.createElement("img");
        img.src = "./images/9mobileLogo.webp";
        spanElement.replaceChildren(img);
        unknownNumber.style.display = "none";
      } else if (glo.includes(prefix)) {
        const img = document.createElement("img");
        img.src = "./images/gloLogo.jpg";
        spanElement.replaceChildren(img);
        unknownNumber.style.display = "none";
      } else if (airtel.includes(prefix)) {
        const img = document.createElement("img");
        img.src = "./images/airtelLogo.png";
        spanElement.replaceChildren(img);
        unknownNumber.style.display = "none";
      } else {
        unknownNumber.style.display = "block";
        wrongInput.style.display = "none";
      }
    } else {
      wrongInput.style.display = "block";
      unknownNumber.style.display = "none";
    }

    if (document.querySelector(".form-control").value.length == 0) {
      wrongInput.style.display = "none";
      spanElement.style.display = "none";
    } else if (firstZeroNumber == 0 && stringLength == 11) {
      spanElement.style.display = "block";
    }

    if (document.querySelector(".form-control").value.length !== 11) {
      spanElement.style.display = "none";
    }
  }
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
