document.querySelector("#myRange").addEventListener("input", visTal);

function visTal() {
    console.log(this.value);
    document.querySelector(".value").textContent = this.value;
    document.querySelector(".pris").textContent = Math.round(this.value / 200);
}
