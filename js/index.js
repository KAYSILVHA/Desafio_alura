    let btncrip = document.querySelector('#b-crip');
    let btncop = document.querySelector('#btn-cop');
    let mensagem1 = (document.querySelector('.texto'));
    let mensagem = (document.querySelector('.texto').value);
    let res = document.querySelector('.output');


  /* mensagem1.addEventListener("keypress", function(e){
       const keyCode = (e.keyCode ? e.keyCode : e.wich);
       if(keyCode> 47 && keyCode< 58){
           e.preventDefault();
       }

   });*/
    
    
    
    
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
    
    /*function copiar(){
        
        navigator.clipboard.writeText(res);
    
    }*/


