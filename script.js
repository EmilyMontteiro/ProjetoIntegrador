function exibirAlerta(){
    alert("Bem-vindo(a) ao nosso site!");

}

Window.onload = exibirAlerta;

function mascara(o,f){ //Esta linha define uma função chamada mascara com dois parâmetros: o e f. o representa um elemento de entrada de texto (geralmente um campo de número de telefone), e f é uma função de formatação que será aplicada a esse elemento.
    v_obj=o //Aqui, o valor do parâmetro o (elemento de entrada de texto) é atribuído à variável v_obj.
    v_fun=f //O valor do parâmetro f (função de formatação) é atribuído à variável v_fun.
    setTimeout("execmascara()",1) //Esta linha diz ao programa para esperar por apenas 1 milissegundo (muito rápido) e depois executar a função chamada execmascara.
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value) //v_obj.value = v_fun(v_obj.value) - Pega o valor que você digitou no campo de telefone (v_obj.value), aplica a variável de formatação (v_fun), e coloca o número de telefone formatado de volta no campo de texto.

}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito (número)
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el ); //esta função id(el) simplifica a tarefa de buscar um elemento na página HTML pelo seu ID. Por exemplo, se você quiser obter o elemento com o ID "telefone", você pode chamar id("telefone"), e isso retornará o elemento HTML correspondente a esse ID. Isso é útil quando você precisa interagir com elementos específicos da página usando JavaScript.
}
window.onload = function(){ //faz com que a formatação aconteça quando a página web terminar de carregar e você comece a digitar no campo de telefone.
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}