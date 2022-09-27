let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
	palavra001 = {
		nome: "ALEMANHA",
		categoria: "LUGARES"
	},
	palavra002 = {
		nome: "ITALIA",
		categoria: "LUGARES"
	},
	palavra003 = {
		nome: "JAPAO",
		categoria: "LUGARES"
	},
	palavra004 = {
		nome: "INDONESIA",
		categoria: "LUGARES"
	},
	palavra005 = {
		nome: "URUGUAI",
		categoria: "LUGARES"
	},
	palavra006 = {
		nome: "RUSSIA",
		categoria: "LUGARES"
	},
	palavra007 = {
		nome: "POLONIA",
		categoria: "LUGARES"
	},
	palavra008 = {
		nome: "GUATEMALA",
		categoria: "LUGARES"
	},
	palavra009 = {
		nome: "PORTUGAL",
		categoria: "LUGARES"
	},
	palavra010 = {
		nome: "AFEGANISTAO",
		categoria: "LUGARES"
	},
	palavra011 = {
		nome: "PALMEIRAS",
		categoria: "TIMES"
	},
	palavra012 = {
		nome: "BARCELONA",
		categoria: "TIMES"
	},
	palavra013 = {
		nome: "CRUZEIRO",
		categoria: "TIMES"
	},
	palavra014 = {
		nome: "FLUMINENSE",
		categoria: "TIMES"
	},
	palavra015 = {
		nome: "CORINTHIANS",
		categoria: "TIMES"
	},
	palavra016 = {
		nome: "CRICIUMA",
		categoria: "TIMES"
	},
	palavra017 = {
		nome: "FIGUEIRENSE",
		categoria: "TIMES"
	},
	palavra018 = {
		nome: "CHAPECOENSE",
		categoria: "TIMES"
	},
	palavra019 = {
		nome: "ITUANO",
		categoria: "TIMES"
	},
	palavra020 = {
		nome: "FORTALEZA",
		categoria: "TIMES"
	}

];

criarPalavraSecreta();
function criarPalavraSecreta() {
	const indexPalavra = parseInt(Math.random() * palavras.length);

	palavraSecretaSorteada = palavras[indexPalavra].nome;
	palavraSecretaCategoria = palavras[indexPalavra].categoria;
	console.log(palavraSecretaSorteada);
	console.log(palavraSecretaCategoria);
}

montarPalavraNaTela();
function montarPalavraNaTela(){
	const categoria = document.getElementById("categoria");
	categoria.innerHTML = palavraSecretaCategoria;

	const palavraTela = document.getElementById("palavra-secreta");
	palavraTela.innerHTML = "";

	for(i = 0; i < palavraSecretaSorteada.length; i++) {
		if(listaDinamica[i] == undefined){
			listaDinamica[i] = "&nbsp";
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+listaDinamica[i]+"</div>"
		}
		else{
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+listaDinamica[i]+"</div>"
		}
	}
}

function verificaLetraEscolhida(letra){
	document.getElementById("tecla-" + letra).disabled = true;
	if(tentativas > 0){
		mudarStyleLetra("tecla-" + letra);
		comparaListas(letra);
		montarPalavraNaTela();
	}
}

function mudarStyleLetra(tecla){
	document.getElementById(tecla).style.background = 'white';
	document.getElementById(tecla).style.color = 'ForestGreen';
}

function comparaListas(letra){
	const posicao = palavraSecretaSorteada.indexOf(letra);
	if(posicao < 0){
		tentativas--
		carregaImagemForca();

		if(tentativas == 0){
			abreModal("OPS!", "Acabaram suas tentativas... Apalavra secreta era <br>" + palavraSecretaSorteada);	
		}
	}
	else{
		for(i = 0; i < palavraSecretaSorteada.length; i++){
			if(palavraSecretaSorteada[i] == letra){
				listaDinamica[i] = letra;
			}
		}	
	}

	let vitoria = true;
	for(i = 0; i < palavraSecretaSorteada.length; i++){
		if(palavraSecretaSorteada[i] != listaDinamica[i]){
			vitoria = false;
		}
	}
	if(vitoria == true){
		abreModal("PARABÉNS!!!", "<br> Você acertou.");
		tentativas = 0;
	}
	
}

function carregaImagemForca(){
	switch(tentativas){
		case 5:
			document.getElementById("div-imagens").style.background = "url('imagem/boneco1.png')";
			break;
		case 4:
			document.getElementById("div-imagens").style.background = "url('imagem/boneco2.png')";
			break;
		case 3:
			document.getElementById("div-imagens").style.background = "url('imagem/boneco3.png')";
			break;
		case 2:
			document.getElementById("div-imagens").style.background = "url('imagem/boneco4.png')";
			break;
		case 1:
			document.getElementById("div-imagens").style.background = "url('imagem/boneco5.png')";
			break;
		case 0:
			document.getElementById("div-imagens").style.background = "url('imagem/boneco6.png')";
			break;
		default:
			document.getElementById("div-imagens").style.background = "url('imagem/img_inicial.png')";
			break;
	}
}

function abreModal(titulo, mensagem){
	let modalTitulo = document.getElementById("exampleModalLabel")
	modalTitulo.innerText = titulo;

	let modalBody = document.getElementById("modalBody")
	modalBody.innerHTML = mensagem;
	
	$("#myModal").modal({
		show: true
	});
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function() {
	location.reload();
});