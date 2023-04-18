    let btncrip = document.querySelector('#b-crip');
    let btncop = document.querySelector('#btn-cop');


    
   
    function criptografar(){
        let mensagem = (document.querySelector('.texto').value);     
        let mensagemCrip = mensagem.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        let res = document.querySelector('.output');
        res.innerHTML = mensagemCrip;
    }

    function descriptografar(){
        let mensagem = (document.querySelector('.texto').value);
        let mensagemdescrip = mensagem.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        let res = document.querySelector('.output');
        res.innerHTML = mensagemdescrip;
    }
    

