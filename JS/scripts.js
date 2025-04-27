function calcular() {
    let soma = 0;
    //recupera o valor da açao social digitado
    let acaoSocial = document.getElementById("acaoSocial").value;
    soma += Number(acaoSocial);
    let homenagem = document.getElementById("homenagem").value;
    soma += Number(homenagem);
    let leite = document.getElementById("leite").value;
    soma += 2 * Number(leite);
  
    let kit = Number(document.getElementById("kit").value);
    let suplemento = Number(document.getElementById("suplemento").value);
  
    let equipe = document.getElementById("equipe").value;
  
    let pontosKitSupl = 0;
    if (equipe == "Laranja") {
      if (kit >= 97 && suplemento >= 49) {
        pontosKitSupl = 5000 + (kit - 97) * 30 + (suplemento - 49) * 15;
      } else if (kit >= 78 && suplemento >= 39) {
        pontosKitSupl = 4000 + (kit - 78) * 30 + (suplemento - 39) * 15;
      } else if (kit >= 49 && suplemento >= 25) {
        pontosKitSupl = 2500 + (kit - 49) * 30 + (suplemento - 25) * 15;
      } else if (kit >= 19 && suplemento >= 10) {
        pontosKitSupl = 1000 + (kit - 19) * 30 + (suplemento - 10) * 15;
      }
    } else if (equipe == "Preta") {
      if (kit >= 103 && suplemento >= 52) {
        pontosKitSupl = 5000 + (kit - 103) * 30 + (suplemento - 52) * 15;
      } else if (kit >= 82 && suplemento >= 42) {
        pontosKitSupl = 4000 + (kit - 82) * 30 + (suplemento - 42) * 15;
      } else if (kit >= 52 && suplemento >= 26) {
        pontosKitSupl = 2500 + (kit - 52) * 30 + (suplemento - 26) * 15;
      } else if (kit >= 21 && suplemento >= 10) {
        pontosKitSupl = 1000 + (kit - 21) * 30 + (suplemento - 10) * 15;
      }
    } else if (equipe == "Roxa") {
      if (kit >= 102 && suplemento >= 51) {
        pontosKitSupl = 5000 + (kit - 102) * 30 + (suplemento - 51) * 15;
      } else if (kit >= 82 && suplemento >= 41) {
        pontosKitSupl = 4000 + (kit - 82) * 30 + (suplemento - 41) * 15;
      } else if (kit >= 52 && suplemento >= 26) {
        pontosKitSupl = 2500 + (kit - 52) * 30 + (suplemento - 26) * 15;
      } else if (kit >= 21 && suplemento >= 10) {
        pontosKitSupl = 1000 + (kit - 21) * 30 + (suplemento - 10) * 15;
      }
    } else if (equipe == "Verde") {
      if (kit >= 88 && suplemento >= 44) {
        pontosKitSupl = 5000 + (kit - 88) * 30 + (suplemento - 44) * 15;
      } else if (kit >= 70 && suplemento >= 35) {
        pontosKitSupl = 4000 + (kit - 70) * 30 + (suplemento - 35) * 15;
      } else if (kit >= 44 && suplemento >= 22) {
        pontosKitSupl = 2500 + (kit - 44) * 30 + (suplemento - 22) * 15;
      } else if (kit >= 18 && suplemento >= 9) {
        pontosKitSupl = 1000 + (kit - 18) * 30 + (suplemento - 9) * 15;
      }
    } else {
      if (kit >= 93 && suplemento >= 47) {
        pontosKitSupl = 5000 + (kit - 93) * 30 + (suplemento - 47) * 15;
      } else if (kit >= 74 && suplemento >= 38) {
        pontosKitSupl = 4000 + (kit - 74) * 30 + (suplemento - 38) * 15;
      } else if (kit >= 47 && suplemento >= 24) {
        pontosKitSupl = 2500 + (kit - 47) * 30 + (suplemento - 24) * 15;
      } else if (kit >= 19 && suplemento >= 9) {
        pontosKitSupl = 1000 + (kit - 19) * 30 + (suplemento - 9) * 15;
      } else {
        pontosKitSupl = kit * 30 + suplemento * 15;
      }
    }
  
    let sangue = Number(document.getElementById("sangue").value);
    let pontosDoacao = 0;
    if (equipe == "Laranja") {
      if (sangue >= 49) {
        pontosDoacao = 2500 + (sangue - 49) * 20;
      } else {
        pontosDoacao = sangue * 20;
      }
    } else if (equipe == "Preta") {
      if (sangue >= 52) {
        pontosDoacao = 2500 + (sangue - 52) * 20;
      } else {
        pontosDoacao = sangue * 20;
      }
    } else if (equipe == "Roxa") {
      if (sangue >= 51) {
        pontosDoacao = 2500 + (sangue - 51) * 20;
      } else {
        pontosDoacao = sangue * 20;
      }
    } else if (equipe == "Verde") {
      if (sangue >= 44) {
        pontosDoacao = 2500 + (sangue - 44) * 20;
      } else {
        pontosDoacao = sangue * 20;
      }
    } else {
      if (sangue >= 47) {
        pontosDoacao = 2500 + (sangue - 47) * 20;
      } else {
        pontosDoacao = sangue * 20;
      }
    }
  
    let audiovisual = Number(document.getElementById("audiovisual").value);
    soma += audiovisual;
    let mascote = Number(document.getElementById("mascote").value);
    soma += mascote;
  
    soma += pontosKitSupl;
    soma += pontosDoacao;
  
    let arroz = document.getElementById("arroz").value;
    soma += Number(arroz);
    let feijao = document.getElementById("feijao").value;
    soma += Number(feijao);
    let macarrao = document.getElementById("macarrao").value;
    soma += 0.5 * Number(macarrao);
    let oleo = document.getElementById("oleo").value;
    soma += Number(oleo);
    let caracterizacao = document.getElementById("caracterizacao").value;
    soma += Number(caracterizacao);
    document.getElementById("soma").innerHTML = soma.toFixed(2);
  }