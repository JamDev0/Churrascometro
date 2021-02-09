function executar()
{
    document.getElementById('Calcular').addEventListener('click', Calcular);

    document.getElementsByClassName('Inputs')[0].addEventListener('input', Plural0);
    document.getElementsByClassName('Inputs')[1].addEventListener('input', Plural1);
    document.getElementsByClassName('Inputs')[2].addEventListener('input', Plural2);
    
    window.addEventListener('resize', ReAnimação);



    function Calcular(a)
    {
        let Adultos = parseFloat(document.getElementById('Adultos').value);
        let Crianças = parseFloat(document.getElementById('Crianças').value);
        let Duração = parseFloat(document.getElementById('Duração').value);
        let Pessoas = (Adultos + (Crianças/2));
        let EspaçoParaR = document.getElementsByClassName('Texto')[1];

        if(Adultos > 0 && Crianças > 0 && Duração > 0)
        {
            if(Duração < 6)
            {   
                let TotalCarne = (Pessoas * 400);
                let TotalCerveja = (Adultos * 1200);
                let TotalBebida = (Pessoas * 1000);
                
                EspaçoParaR.innerHTML = TotalCarne/1000 + 'kg de carnes<br>' + Math.ceil((TotalCerveja/350)) + ' latas de cerveja<br>' + Math.ceil((TotalBebida/1000) / 2) + ' garrafas de 2l de bebida.';
            }
            else
            {
                let TotalCarne = (Pessoas * 650);
                let TotalCerveja = (Adultos * 2000);
                let TotalBebida = (Pessoas * 1500);
                
                EspaçoParaR.innerHTML = TotalCarne/1000 + 'kg de carnes<br>' + Math.ceil((TotalCerveja/350)) + ' latas de cerveja<br>' + Math.ceil((TotalBebida/1000) / 2) + ' garrafas de 2l de bebida.';
            }
            Animação();
        }
        else
        {
            alert('Os dados estão errados!!');
        }
    }
    

    function Plural0(elemento)
    {
        let Span = document.getElementsByTagName('span')[0];
        if(elemento.data > 1)
        {
            Span.innerText = 'adultos';
        }
        else
        {
           Span.innerText = 'adulto';
        }
    }

    function Plural1(elemento)
    {
        let Span = document.getElementsByTagName('span')[1];
        if(elemento.data > 1)
        {
            Span.innerText = 'crianças';
        }
        else
        {
           Span.innerText = 'criança';
        }
    }

    function Plural2(elemento)
    {
        let Span = document.getElementsByTagName('span')[2];
        if(elemento.data > 1)
        {
            Span.innerText = 'horas';
        }
        else
        {
           Span.innerText = 'hora';
        }
    }




    //Funções para animações
    function Animação()
    {
        let Resultado = document.getElementById('Resultados').style;
        let Main = document.getElementsByTagName('main')[0];


        Resultado.transition = 'z-index 0s ease 1.6s, top 1.5s cubic-bezier(0.82, 0.01, 0.6, 0.38) 0s';
        Resultado.zIndex = '3';
        setTimeout(function(){Main.style.borderBottomLeftRadius = '0px'; Main.style.borderBottomRightRadius = '0px'}, 1499);
        Resultado.visibility = 'visible';
        Resultado.top = Main.getBoundingClientRect().top + Main.getBoundingClientRect().height + 'px';
    }


    function ReAnimação()
    {
        if(document.getElementById('Resultados').getBoundingClientRect().top != 20 && window.innerWidth > 800)
        {
        let Resultado = document.getElementById('Resultados').style;
        let Main = document.getElementsByTagName('main')[0];


        Resultado.transition = 'z-index 0s ease 0.6s, top 0.5s cubic-bezier(0.82, 0.01, 0.6, 0.38) 0s';
        Resultado.zIndex = '3';
        Resultado.visibility = 'visible';
        Resultado.top = Main.getBoundingClientRect().top + Main.getBoundingClientRect().height + 'px';
        }
    }

    //Fim Funções para animações
}
