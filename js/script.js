function funcGerar(){
    let quantidade = 0;
    let resultado;
    let variavel;
    var regra = [];
    var regraT = [];

    var regras = document.getElementById("regra").value.replaceAll(" ", "");
    regras = regras.split(",");

    variavel = document.getElementById("variavel").value;

    for(i = 0; i<regras.length; i++){
        regra.push(regras[i].split("=")[0]);
        regraT[i] = regras[i].split("=")[1].split("|");
    }
   
    while(variavel.toLowerCase() != variavel){
        for(i = 0; i<regraT.length; i++){
            if(variavel.includes(regra[i])){
                variavel = variavel.replace(regra[i], regraT[i][Math.floor(Math.random() * regraT[i].length)]);
                if(resultado != null){
                    resultado = resultado + "<br>" + variavel;
                }else{
                    resultado = variavel;
                }
                quantidade++;
            }
        }
    }

    const elemento = document.createElement('div');
    resultado = "<br>" + resultado + "<br><br>" + "### A quantidade de derivações dessa sentença foi: " + quantidade + ". ###" + "<br><br>";
    elemento.innerHTML = resultado;
    elemento.style.backgroundColor = 'blue';
    elemento.style.textAlign = 'center';
    elemento.style.color = 'white';
    elemento.style.fontWeight = 'bold';
    document.body.appendChild(elemento);
    document.body.appendChild(document.createElement('br'));
}