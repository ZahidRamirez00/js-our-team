let membriTeam = [

    {nome:"Wayne Barnett",ruolo:"Founder & CEO",foto:"./img/wayne-barnett-founder-ceo.jpg"},
    {nome:"Angela Caroll",ruolo:"Chief Editor",foto:"./img/angela-caroll-chief-editor.jpg"},
    {nome:"Walter Gordon",ruolo:"Office Manager",foto:"./img/walter-gordon-office-manager.jpg"},
    {nome:"Angela Lopez",ruolo:"Social Media Manager",foto:"./img/angela-lopez-social-media-manager.jpg"},
    {nome:"Scott Estrada",ruolo:"Developer",foto:"./img/scott-estrada-developer.jpg"},
    {nome:"Barbara Ramos",ruolo:"Graphic Designer",foto:"./img/barbara-ramos-graphic-designer.jpg"}

]

membriTeam.forEach((element) => {
    console.log(`
        ================= Membro ==================
        
        Nome: ${element.nome}
        Ruolo: ${element.ruolo}
        Foto: ${element.ruolo}

        ===========================================
    `)
});



let contenitore = document.getElementById("contenitore");
let elementiDaInserire = "";
membriTeam.forEach((element) => {

    elementiDaInserire += `
        <div >
            <div class="card" style="width: 18rem;">
                <img src="${element.foto}" class="card-img-top" alt="${element.nome}">
                    <div class="card-body">
                        <h2>${element.nome}</h2>
                        <h5>${element.ruolo}</h5>
                    </div>
            </div>
        </div>
    `;

});




console.log(elementiDaInserire);
contenitore.innerHTML = elementiDaInserire;