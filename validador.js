console.log(".:script carregado:.");


function validar() {
    console.log('realizando validação');
    

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('input_CPF').value;
    var resultado = validacao(cpf);

    if (resultado){
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }

}

function validacao(cpf){
    if (cpf.length != 11){
        return false;
    } else {
        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);
        var soma = 0;
            for (var i=10; i>1; i--){
                soma += numeros.charAt(10 - i) * i
            }
        console.log(soma);

        var restoDaMedia = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

            
            //validação do primeiro digito
        if (restoDaMedia != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);
        

        for (var k = 11; k>1; k--){
            soma += numeros.charAt(11-k)* k;
        }
        console.log(soma);
        restoDaMedia= (soma% 11) < 2 ? 0 : 11 - (soma%11);

        //validação do segundo digito
        if(restoDaMedia != digitos.charAt(1)){
            return false;
        }

        return true;
    }    
}

