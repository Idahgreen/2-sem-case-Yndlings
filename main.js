document.querySelector("#myRange").addEventListener("input", visTal);

function visTal() {
    console.log(this.value);
    document.querySelector(".value").textContent = this.value;
    document.querySelector(".pris").textContent = Math.round(this.value / 200);
}

document.getElementById("comp").addEventListener("click", changeComp);

function changeComp() {
    document.getElementById("ting").innerHTML = "computers";
}

document.getElementById("mobil").addEventListener("click", changeMobil);

function changeMobil() {
    document.getElementById("ting").innerHTML = "mobils";

}

document.getElementById("tab").addEventListener("click", changeTab);

function changeTab() {
    document.getElementById("ting").innerHTML = "tablets";

}

document.getElementById("cykle").addEventListener("click", changeCykle);

function changeCykle() {
    document.getElementById("ting").innerHTML = "cykles";

}
