const listaPalavras = ['jasmine', 'ariel', 'aurora', 'cinderela', 'raya','pocahontas', 'mulan', 'tiana', 'moana', 'brancadeneve', 'rapunzel', 'merida', 'bela']
    
            let palavraEscolhida;
            let exibicaoPalavra;
            let letrasChutadas;
            let tentativasRestantes;
            let numeroErros;
    
            function iniciarJogo(){
                document.getElementById('botao-reiniciar').style.display = 'none';
                document.getElementById('entrada-letra').disabled = false;
    
                palavraEscolhida = listaPalavras[Math.floor(Math.random()*listaPalavras.length)].toLocaleLowerCase();
                exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
                letrasChutadas = [];
                tentativasRestantes = 7;
                numeroErros = 0;
    
                atualizarExibicao();
            }
    
            function atualizarExibicao(){
                document.getElementById("exibicao-palavra").innerText = exibicaoPalavra.join('  ');
                document.getElementById("letras-chutadas").innerText = `${letrasChutadas.join(', ')}`;
                document.getElementById("mensagem").innerText = '';
    
                document.getElementById("imagem").src = `img/forca${numeroErros}.png`;
    
                if(tentativasRestantes === 0) {
                    encerrarJogo('Você perdeu! kkkkkk');
                } else if (!exibicaoPalavra.includes('_')) {
                    encerrarJogo('Afe, você venceuuu! kkkk');
                }
            }
    
            function chutarLetra(){
                const entradaLetra = document.getElementById('entrada-letra');
                const letra = entradaLetra.value.toLowerCase();
    
                if(!letra.match(/[a-zà-ùç]/i)){
                    alert('Insira uma letra válida! 🙄');
                    return;
                }

                const letraMinuscula = letra.toLowerCase();
    
                if(letrasChutadas.includes(letraMinuscula)){
                    alert('Essa letra você já tentouuu. Tente outra!');
                    entradaLetra.value = '';
                    return;
                }
    
                letrasChutadas.push(letraMinuscula);
    
                if(palavraEscolhida.includes(letraMinuscula)){
                    for (let i=0; i < palavraEscolhida.length; i++){
                        if(palavraEscolhida[i] === letraMinuscula){
                            exibicaoPalavra[i] = letraMinuscula;
                        }
                    }
                } else {
                    tentativasRestantes--;
                    numeroErros++;
                }
    
                entradaLetra.value = '';
                atualizarExibicao();
            }
    
            function encerrarJogo(mensagem){
                document.getElementById('entrada-letra').disabled = true;
                document.getElementById('mensagem').style.display = 'block';
                document.getElementById('mensagem').innerText = mensagem;
                document.getElementById('botao-reiniciar').style.display ='block';
            }
    
            window.onload = iniciarJogo;
        