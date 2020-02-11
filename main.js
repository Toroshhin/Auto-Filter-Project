window.onload = function () {
  let car = [
    { brand: "Land Rover", modelArr: [{ model: "Defender", modification: ["I", "I Рестайлинг", "II"] }, { model: "Discovery", modification: ["L318", "L319", "L462"] }, { model: "Freelander", modification: ["I", "I Рестайлинг", "II", "II Рестайлинг", "II Рестайлинг 2"] }, { model: "Evoque", modification: ["I", "I Рестайлинг", "II"] }, { model: "Range Rover Sport", modification: ["L320", "L494"] }] },
    { brand: "Nissan", modelArr: [{ model: "Almera", modification: ["I (N15)", "II (N16)", "II (N16) Рестайлинг", "III (G15"] }, { model: "Pathfinder", modification: ["I", "II", "III", "III Рестайлинг", "IV", "IV Рестайлинг"] }, { model: "Qashqai", modification: ["J10", "J11"] }, { model: "X-Trail", modification: ["T30", "T31", "T32"] }] },
    { brand: "Toyota", modelArr: [{ model: "Camry", modification: ["V10", "V20", "V30", "V40", "V50", "XV40", "XV50"] }, { model: "Corolla", modification: ["E120", "E150", "E160", "E210"] }, { model: "Crown", modification: ["S120", "S140", "S150", "S170", "S180", "S200", "S210"] }, { model: "Land Cruiser", modification: ["80 Series", "100 Series", "200 Series",] }] },
    { brand: "Volkswagen", modelArr: [{ model: "Golf", modification: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] }, { model: "Jetta", modification: ["5 Поколение", "6 Поколение", "6 Поколение Рестайлинг", "7 Поколение"] }, { model: "Passat", modification: ["B3", "B4", "B5", "B6", "B7", "B8,5", "B8"] }, { model: "Polo", modification: ["Mk2", "Mk3", "Mk4", "Mk5"] }, { model: "Tiguan", modification: ["I", "I Рестайлинг", "II"] }] },];
  let carBrands = document.querySelector('#brand');
  let classCarBrands = "brend-option";

  function addOption(className, optionName) {
    for (let i = 0; i < car.length; i++) {
      let option = document.createElement('option');
      className.append(option);
      option.className = optionName;
      option.innerHTML = car[i].brand;
    }
  }



  addOption(carBrands, classCarBrands);
}