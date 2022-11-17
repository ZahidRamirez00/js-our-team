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
        <div class='team'>
            <br>
                <p>================= Membro ==================</p>
                <p><b>Nome: </b>${element.nome}</p>
                <p><b>Ruolo: </b>${element.ruolo}</p>
                <p><b>Foto: </b>${element.ruolo}</p>
                <p>==========================================</p>
            <br>
        </div>
    `;


    /*
    let br1 = document.createElement("br");
    contenitore.appendChild(br1);
    let p1 = document.createElement("p").innerHTML = "================= Membro ==================";
    contenitore.appendChild(p1);
    let pNome = document.createElement("p").innerHTML = "<b>Nome: </b>" + element.nome;
    contenitore.appendChild(pNome);
    let pRuolo = document.createElement("p").innerHTML = "<b>Ruolo: </b>" + element.ruolo;
    contenitore.appendChild(pRuolo);
    let pFoto = document.createElement("p").innerHTML = "<b>Foto: </b>" + element.foto;
    contenitore.appendChild(pFoto);
    let p2 = document.createElement("p").innerHTML = "===========================================";
    contenitore.appendChild(p2);
//    let br2 = document.createElement("br");
    contenitore.appendChild(br1);*/
});




console.log(elementiDaInserire);
contenitore.innerHTML = elementiDaInserire;