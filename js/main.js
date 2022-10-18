let sekcija = document.getElementById("prodavnica-voca");
let dugme = document.getElementById("dugme");
dugme.addEventListener ("click", funkcijaDugmeta);

function funkcijaDugmeta (){
    window.alert("Pritisnuli ste dugme!!!");
    let potvrda = confirm ("Da li zelite da vidite promenu?");
    if (potvrda == true) {
        sekcija.style.backgroundColor = "#EDF060";
    } else {
        let poruka = prompt("Hvala sto ste posetili nas sajt, molimo vas ostavite komentar:");
        console.log (poruka);
    }
};