function executar(){
    var qnomes = prompt("QUANTIDADE DE ITENS:");
    var i;
    for (i=0;i<qnomes;i++){
        pedirNome();        
    }
    function pedirNome(){
        nome = prompt(i+1 +'º item');
        adicionarItem();
    }
    function adicionarItem(){
        var itemlista = document.createElement('li');
        itemlista.textContent = nome;
        lista.appendChild(itemlista);
    }
}      
function criarLista(){
    container = document.createElement('div');
    container.id ='container';
    var nomeLista = prompt("NOME DA LISTA DESEJADO:");
    titulolista =  document.createElement('h1');
    lista = document.createElement('ul');
    lista.style='font-size:25px;';
    titulolista.textContent = nomeLista;
    document.body.appendChild(container);
    container.appendChild(titulolista);
    container.appendChild(lista); 
    if(document.getElementById('container')!==null){
        document.getElementById('criar').disabled=true;
    }
}
function apagarlista(){
    document.getElementById('criar').disabled=false;
    container.remove();
}