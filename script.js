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
        Foto: ${element.foto}

        ===========================================
    `)
});



let main = document.getElementsByTagName("main");
let elementiDaInserire = "";
membriTeam.forEach((element) => {
    
    let br1 = document.createElement("br");
    main.appendChild(br1);
    let p1 = document.createElement("p").innerHTML = "================= Membro ==================";
    main.appendChild(p1);
    let pNome = document.createElement("p").innerHTML = "<b>Nome: </b>" + element.nome;
    main.appendChild(pNome);
    let pRuolo = document.createElement("p").innerHTML = "<b>Ruolo: </b>" + element.ruolo;
    main.appendChild(pRuolo);
    let pFoto = document.createElement("p").innerHTML = "<b>Foto: </b>" + element.foto;
    main.appendChild(pFoto);
    let p2 = document.createElement("p").innerHTML = "===========================================";
    main.appendChild(p2);
//    let br2 = document.createElement("br");
    main.appendChild(br1);
});




console.log(elementiDaInserire);
//main.i = elementiDaInserire;