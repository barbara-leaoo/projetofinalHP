

function aparecer(idDiv){

    var divsConteudo = document.querySelectorAll('.conteudo');
        divsConteudo.forEach(function(div) {
            div.style.display = 'none'
        });

        var divConteudo = document.getElementById(idDiv);
        divConteudo.style.display = 'block';

}



