class Quiz {
    constructor(questoes) {
        this.qstCertas = 0;
        this.qstErradas = 0;
        this.pontuacao = 0;
        this.questoes = questoes;
        this.questaoAtual = 0;
        this.terminou = false;
    }

    getQuestaoAtual() {
        return this.questoes[this.questaoAtual];
    }

    avancarQuestao(resposta) {
        if(this.getQuestaoAtual().respostaCorreta(resposta))
        {
            this.pontuacao += 5;
            this.qstCertas++;
            updatePontuacao(true);
        }
        else
        {
            this.qstErradas++;
            updatePontuacao(false);
        }

        updateProgress();

        if (this.questaoAtual + 1 != 15)
        {
            this.questaoAtual++;
        }
        else
        {
            this.terminou = true;
        }
    }
}

function updatePontuacao()
{
    const pontuacaoAtual = $("#spn_Pontuacao")[0].innerText;
    const pontuacaoDepois = quiz.pontuacao;

    countAnimation(pontuacaoAtual, pontuacaoDepois, true);
}

function updateProgress() {
    const divProgress = $("#div_Progress")[0];

    let strProgress = getComputedStyle(divProgress).getPropertyValue('--pct-pgrss-bar');
    let pctProgress = parseFloat(strProgress.replace('%', ''));

    let newPct = (pctProgress + 7.143) + '%';
    
    divProgress.style.setProperty('--pct-pgrss-bar', newPct);

    strProgress = getComputedStyle(divProgress).getPropertyValue('--pct-pgrss-bar');

    divProgress.style.width = strProgress;
}

function countAnimation(min, max, acertou)
{
    const divPontucaoCont = $(".qst_pontuacao")[0];
    const spnPontuacao = $("#spn_Pontuacao")[0];
  
    if (acertou)
    { 
        divPontucaoCont.style.transform = "scale(1.15)";
    }

    setTimeout(() => {
        for (var x = min; x <= max; x++) {
            setTimeout(function(nr) {
                spnPontuacao.innerText = nr;

                if(spnPontuacao.innerText == max)
                {
                    divPontucaoCont.style.transform = "scale(1)";
                }
            }, x * 1000 / max, x);
        }
    }, 300);
}

class Questao {
    constructor(numero, titulo, pergunta, alternativas, altCerta) {
        this.numero = numero,
        this.titulo = titulo;
        this.pergunta = pergunta;
        this.alternativas = alternativas;
        this.altCerta = altCerta;

        this.altMarcada = 0;
        this.acertou = false;
    }

    respostaCorreta(resposta) 
    {   
        this.altMarcada = resposta;

        if(this.altMarcada == this.altCerta)
        {
            this.acertou = true;
        }

        return this.acertou;
    }
}

const questoesInfo = [
    {
        titulo: "Questão 1",
        pergunta: "O que é um sistema?",
        alternativas: [
            "É um conjunto de elementos independentes do qual cada um possuí uma determinada função, de modo a formar um todo organizado",
            "É um elemento único que possuí diversas funções, não contendo uma em específico, de modo a formar um todo organizado",
            "É uma entidade individual e desajustada, que remete em seu todo à desorganização"
        ],
        certa: 1
    },

    {
        titulo: "Questão 2",
        pergunta: "O que é um programa?",
        alternativas: [
            "É um conjunto de elementos que se passa via diversos tipos de sinal à um televisor",
            "Programa remete à um conjunto de instruções que em seu resultado concretizam uma tarefa funcional",
            "É um elemento que possui uma estrutura moldada, que não possuí a função de executar uma tarefa"
        ],
        certa: 2
    },

    {
        titulo: "Questão 3",
        pergunta: "O que é um dispositivo de entrada?",
        alternativas: [
            "Um equipamento eletrônico que acabou de ser lançado",
            "Algo utilizado para se ter acesso em um ambiente",
            "É um dispositivo que vai fornecer informações para dentro do programa, realizações certas operações. Como uma webcam, teclado, mouse..."
        ],
        certa: 3
    },

    {
        titulo: "Questão 4",
        pergunta: "O que é um dispositivo de saída?",
        alternativas: [
            "Aparelho que grava a saída de algo, como pessoa e objeto, em um ambiente",
            "Um eletrônico dentro da geração passada de lançamento, como um celular",
            "É um dispositivo que recebe informações dos programas, como por exemplo: monitores, projetores e impressoras..."
        ],
        certa: 3
    },

    {
        titulo: "Questão 5",
        pergunta: "O que é um dispositivo de entrada e saída?",
        alternativas: [
            "É um dispositivo que dura por um curto momento",
            "É um dispositivo que trata dos dados que serão processados dentro de um programa, e também com esses dados obtidos retorna um resultado/saída, como por exemplo: celulares, pen-drives, cameras digitais...",
            "É um dispositivo que possui a capacidade de adentrar e se retirar de ambientes diversos"
        ],
        certa: 2
    },

    {
        titulo: "Questão 6",
        pergunta: "O que é um sistema binário?",
        alternativas: [
            "Sistema numérico de baixo nível, na base 2, usado principalmente para usado em comunicação como próprio computador",
            "É 1010100100110000101100",
            "Um relacionamento onde o casal é hétero"
        ],
        certa: 1
    },

    {
        titulo: "Questão 7",
        pergunta: "O que é um sistema decimal?",
        alternativas: [
            "Sistema numérico mais utilizado no cotidiano, na base 10",
            "Quando algo ou alguém, se acidenta descendo mal de algum lugar",
            "É um sistema de números com base pequena, todos maiores que 0 e menores que 1"
        ],
        certa: 1
    },

    {
        titulo: "Questão 8",
        pergunta: "O que é um sistema hexadecimal?",
        alternativas: [
            "Um sistema que tem 16 lados ou possibilidades de realizar uma operação",
            "Um sistema numérico na base 16, usado para encurtar a escrita do número, utilizado tanto paracomputador ou no cotidiano",
            "Um sistema númerico usado para dividir em 16 partes um número grande"
        ],
        certa: 2
    },

    {
        titulo: "Questão 9",
        pergunta: "Como se representa um bit?",
        alternativas: [
            "É uma moeda digital, a mais usualmente reconhecida na atualidade",
            "Conjunto de 8 bytes",
            "É a menor quantidade de valor, em um computador, com seu valor 0 ou 1 na base 2"
        ],
        certa: 3
    },

    {
        titulo: "Questão 10",
        pergunta: "Cite os tipos de memória de um computador?",
        alternativas: [
            "Memória RAM, ROM e virtual, a RAM servindo para separar espaço para executar uma ação, somente ativa quando energizada.A ROM armazenando os dados, guarda dados e realiza leitura de dados.  E a virtual sendo um espaço que o sistema reserva no HD para salvar as informações armazenadas  na RAM e liberar memória para novos aplicativos",
            "Atualmente pode ser utilizada em HD e SSD, ou aaté mesmo em arquivo salvo dentro de um serviço nuvem",
            "Em um computador tem a memória RAM, servindo para salvar dados quando for desernegizada e a ROM sendo utilizada para guardar dados ajudando o processador alcançar um bom desempenho"
        ],
        certa: 1
    },

    {
        titulo: "Questão 11",
        pergunta: "O que é um hardware?",
        alternativas: [
            "Um programa difícil",
            "São componentes que fazem software, com eles podemos criar softwares diretamente dentro da sua programação",
            "Parte física de um eletrônico, que realiza operações de acordo com algum comando por um sistema, pode se comunicar com software"
        ],
        certa: 3
    },

    {
        titulo: "Questão 12",
        pergunta: "O que é um software?",
        alternativas: [
            "É um programa mais leve, bem otimizado",
            "Programa que realiza operações de acordo com algum sistema, sem partes físicas, pode se comunicar com hardware",
            "É a parte fisíca de um eletrônico, responsável por operar um hardware, quando esse tem uma programação já definida"
        ],
        certa: 2
    },

    {
        titulo: "Questão 13",
        pergunta: "O que é um peploware?",
        alternativas: [
            "Quando uma pessoa realiza toda a operação definida, de forma independente, sem programa ou sistema",
            "Sistema da junção de pessoa e programa, um dependendo do outro para realizar alguma operação, como o operador de caixa de um mercado",
            "É a definição de um programa, que em sua programação pode operar de forma autonôma, sem necessitar de nenhuma pessoa"
        ],
        certa: 2
    },

    {
        titulo: "Questão 14",
        pergunta: "O que é um sistema embarcado?",
        alternativas: [
            "Sistema que contém uma espécie de ancora/trava, que impossibilita a interação com alguns usuários",
            "Um sistema que é levado dentro de um barco",
            "É uma combinação do hardware, com software e um programa, servindo como eletrônico funcional que realiza operações, com um processador, memória, que atende os requisitos do sistema",
        ],
        certa: 3
    },
];

const questoes = []; 

for(let x = 1; x <= 14; x++)
{
    let y = x - 1;
    questoes[x] = new Questao(
        x,
        questoesInfo[y].titulo,
        questoesInfo[y].pergunta,
        questoesInfo[y].alternativas, 
        questoesInfo[y].certa
    )
}

let quiz = new Quiz(questoes);

$(document).ready(() => {
    const btnStart = document.querySelector("#btn_Start");
    
    const btnProx = document.querySelector("#btn_Prox");


    btnStart.addEventListener('click', () => {
        comecarQuiz();
    });

    const rbAltA = document.querySelector("#alternativaA");
    const rbAltB = document.querySelector("#alternativaB");
    const rbAltC = document.querySelector("#alternativaC");

    rbAltA.addEventListener('click', () => alternativaClick(rbAltA, 1));
    rbAltB.addEventListener('click', () => alternativaClick(rbAltB, 2));
    rbAltC.addEventListener('click', () => alternativaClick(rbAltC, 3));

    btnProx.addEventListener('click', () => {
        const qstAtualPreenchido = quiz.getQuestaoAtual().altMarcada != 0;

        if (qstAtualPreenchido)
        {
            const altMarcada = quiz.getQuestaoAtual().altMarcada;
            const altCerta = quiz.getQuestaoAtual().altCerta;
            const resultado = altMarcada == altCerta;

            showResultadoQuest(resultado, altCerta);

            setTimeout(() => {
                quiz.avancarQuestao(altMarcada);

                if (quiz.terminou != true)
                {
                    const qstAtual = quiz.questoes[quiz.questaoAtual];

                    showQuestao(qstAtual.titulo, qstAtual.pergunta, qstAtual.alternativas);
                }
                else
                {
                    showResultadoQuiz();
                }
            }, (resultado) ? 4600 : 8600);
        }
        else
        {
            showErroPreencher();
        }
    });
});

function comecarQuiz() {
    quiz.questaoAtual = 1;

    const qstAtual = quiz.questoes[quiz.questaoAtual];

    subirLogo();
    showQuestao(qstAtual.titulo, qstAtual.pergunta, qstAtual.alternativas);
}

function showQuestao(titulo, pergunta, alternativas) {
    /*CSS*/
    const divQuiz = $("#div_Quiz")[0].style;
    const divStart = $("#div_Start")[0].style;
    const divQuestao = $("#div_Questao")[0].style;
    
    divQuiz.opacity = "0";

    setTimeout(() => {
        divStart.display = "none";
        divQuestao.pointerEvents = "auto";

        const spnTitulo = $("#qst_Titulo")[0];
        const spnPergunta = $("#qst_Pergunta")[0];
        const btnAlternativas = $("#qst_Alternativas button");
    
        spnTitulo.innerText = titulo;
        spnPergunta.innerText = pergunta;
    
        btnAlternativas.each(function(idx, alternativa) {
            if(alternativa.classList.contains('clicked'))
            {
                alternativa.classList.remove('clicked');
            }

            let letra = "";
    
            if (idx == 0)
            {
                letra = "A.";
            }
    
            if (idx == 1)
            {
                letra = "B.";
            }
    
            if (idx == 2)
            {
                letra = "C.";
            }

            //<input type="radio" name="qst_alternativas" id="qst_alternativa${idx}" alternativa="${idx + 1}">
    
            alternativa.innerHTML = `
                <span class="qst_alternativa">
                    <span> ${letra} </span>
                </span> 
                <span>${alternativas[idx]}</span>`;
        });

        if (titulo == "Questão 1")
        {
            $(".idx_card").css('padding', '2rem 1.5rem');

            $(".qst_voltar ion-icon").css('z-index', '-1');
            $(".qst_voltar").css('cursor', 'default');
        }
        else
        {
            $(".qst_voltar ion-icon").css('z-index', '1');
            $(".qst_voltar ion-icon").css('cursor', 'pointer');
        }

        setTimeout(() => {
            /*CSS*/
            divQuestao.display = "flex";
            divQuestao.opacity = "1";
            divQuiz.opacity = "1";
        }, 50)
    }, 750);
}

function subirLogo()
{
    $("#img_QuizLogo").addClass('started');

    setTimeout(() => {
        $("#img_QuizLogo").removeClass('started');
        $("#img_QuizLogo").addClass('finished');
        $(".qst_pontuacao").css('opacity', '1');
        setTimeout(() => {
            $("#img_QuizLogo").css('opacity', '1');
        }, 1000)
    }, 1000)
}

function alternativaClick(alt, numAlt) {
    const thisQuest = quiz.getQuestaoAtual();

    thisQuest.altMarcada = numAlt;

    /*CSS*/
    const alternativas = $(".qst_alternativaLyt button");

    alternativas.each(function(idx, alternativa) {
        if(alternativa.classList.contains('clicked'))
        {
            alternativa.classList.remove('clicked');
        }
    })

    alt.classList.add('clicked');
}

function showResultadoQuest(resultado, altCertaNum)
{
    const divQuestao = $("#div_Questao");
    const divMsg = $("#div_Msg");

    divQuestao.css('opacity', '0');
    
    setTimeout(() => {
        divQuestao.css('display', 'none'); 
        divMsg.css('display', 'flex'); 
        
        const alternativas = $(".qst_alternativaLyt button");

        let txtAltCerta = "";

        alternativas.each(function(idx, alternativa) {
            if (alternativa.getAttribute('num') == altCertaNum)
            {
                txtAltCerta = alternativa.innerText;
            }
        });

        if(resultado == true)
        {
            divMsg.children('span#msg_Titulo').css('margin-bottom', '2rem');

            divMsg.children('ion-icon').attr('name', 'happy-outline');
            divMsg.children('span#msg_Titulo').html('Sua resposta está correta :D');
            divMsg.children('span#msg_Subtitulo').html('');
        }
        else
        {
            divMsg.children('span#msg_Titulo').css('margin-bottom', '3.5rem');
            
            divMsg.children('ion-icon').attr('name', 'sad-outline');
            divMsg.children('span#msg_Titulo').html('Resposta incorreta :(');
            divMsg.children('span#msg_Subtitulo').html(`<span> Resposta correta: </span> <span> ${txtAltCerta} </span>`);
        }

        setTimeout(() => {
            divMsg.css('opacity', '1'); 

            setTimeout(() => {
                divMsg.css('opacity', '0'); 

                setTimeout(() => {
                    divMsg.css('display', 'none');
                    divQuestao.css('display', 'flex'); 

                    setTimeout(() => {
                        divQuestao.css('opacity', '1');
                        divQuestao.css('pointer-events', 'none');
                    }, 50);
                }, 750);
            }, (resultado) ? 3000 : 7000);
        }, 50);
    }, 750);
}

function showResultadoQuiz()
{
    const divResultado = $("#div_Resultado");
    const divQuiz = $("#div_Quiz");
    const divQuestao = $("#div_Questao")

    const divPontuacaoCont = $(".qst_pontuacao");

    divQuiz.css('opacity', '0');
    divPontuacaoCont.css('opacity', '0');
    
    setTimeout(() => {
        $("#img_QuizLogo").removeClass('finished');
        $(".idx_destaque").css('display', 'none');

        divQuiz.css('display', 'none'); 
        divQuestao.css('display', 'none');
        divResultado.css('display', 'flex');

        let qstCertas = [];
        let qstErradas = [];

        quiz.questoes.forEach((questao, idx) => {
            if(questao.altCerta == questao.altMarcada)
            {
                qstCertas[idx] = questao.titulo;
            }
            else if (questao.altCerta != questao.altMarcada)
            {
                qstErradas[idx] = questao.titulo;
            }
        });

        const spnTitulo = $("#rst_ResultadoMsg")[0];
        const spnAcertos = $("#rst_Acertos")[0];
        const spnPontos = $("#rst_Pontos")[0];

        if (quiz.pontuacao < 45)
        {
            spnTitulo.innerText = "Você é muito fraco de memória :("
        }
        else if (quiz.pontuacao >= 45 && quiz.pontuacao < 65)
        {
            spnTitulo.innerText = "Você até que você é bom de memória :)"
        }
        else if (quiz.pontuacao >= 65)
        {
            spnTitulo.innerText = "Você pesquisou bem! :D"
        }

        spnAcertos.innerText = quiz.qstCertas;
        spnPontos.innerText = quiz.pontuacao;

        const qstCertasCont = $("#rst_QuestoesCertas")[0];
        const qstErradasCont = $("#rst_QuestoesErradas")[0];

        qstCertasCont.innerHTML = "";
        qstErradasCont.innerHTML = "";

        qstCertas.forEach(qstCerta => {
            if(qstCerta != null)
            {
                qstCertasCont.innerHTML += `
                <div class='rst_qstCerta'>
                    <span>${qstCerta}</span>
                </div>
            `;
            }
        });

        qstErradas.forEach(qstErrada => {
            if(qstErrada != null)
            {
                qstErradasCont.innerHTML += `
                    <div class='rst_qstCerta'>
                        <span>${qstErrada}</span>
                    </div>
                `;
            }
        });

        if (qstCertasCont.innerHTML == "")
        {
            qstCertasCont.innerHTML = "<div class='rst_qstCerta'> <span> Não houve questões certas! </span> </div>"
        }

        if (qstErradasCont.innerHTML == "")
        {
            qstErradasCont.innerHTML = "<div class='rst_qstErrada'> <span> Não houve questões erradas! </span> </div>"
        }

        divQuiz.css('display', 'flex');

        setTimeout(() => {
            divQuiz.css('opacity', '1');
            divResultado.css('opacity', '1');
        }, 50);
    }, 750);

    const btnTentarNov = $("#btn_TentarNovamente")[0];
    const btnSair = $("#btn_Sair")[0];

    btnTentarNov.addEventListener("click", () => {
        resetQuiz();
        comecarQuiz();
    });

    btnSair.addEventListener("click", () => {
        resetQuiz();

        $("div_Start").css('display', 'flex');
        $("div_Start").css('opacity', '1');
    })
}

function resetQuiz() {
    const divQuiz = $("#div_Quiz");
    const divStart = $("#div_Start");
    const divQuestao = $("#div_Questao");
    const divResultado = $("#div_Resultado");
    const divMsg = $("#div_Msg");

    divQuiz.css('opacity', '0');
    divStart.css('opacity', '0');
    divStart.css('opacity', '0');
    divQuestao.css('opacity', '0');
    divResultado.css('opacity', '0');
    divMsg.css('opacity', '0');
    
    const btnAlternativas = $("#qst_Alternativas button");

    btnAlternativas.each(function(idx, alternativa) {
        if(alternativa.classList.contains('clicked'))
        {
            alternativa.classList.remove('clicked');
        }
    });

    setTimeout(() => {
        divStart.css('display', 'none');
        divQuestao.css('display', 'none');
        divResultado.css('display', 'none');
        divMsg.css('display', 'none');

        questoes = []; 

        for(let x = 1; x <= 14; x++)
        {
            let y = x - 1;
            questoes[x] = new Questao(
                x,
                questoesInfo[y].titulo,
                questoesInfo[y].pergunta,
                questoesInfo[y].alternativas, 
                questoesInfo[y].certa
            )
        }

        quiz = new Quiz(questoes);
        updatePontuacao();

        $("#div_Progress")[0].style.setProperty('--pct-pgrss-bar', '0%');
    }, 800);
}

function showErroPreencher() {
    const divQuestao = $("#div_Questao");
    const divMsg = $("#div_Msg");

    divQuestao.css('opacity', '0');
    
    setTimeout(() => {
        divQuestao.css('display', 'none'); 
        divMsg.css('display', 'flex'); 
        
        divMsg.children('ion-icon').attr('name', 'close-outline');
        divMsg.children('span#msg_Titulo').html('Selecione uma alternativa!');
        divMsg.children('span#msg_Subtitulo').html('');

        setTimeout(() => {
            divMsg.css('opacity', '1'); 

            setTimeout(() => {
                divMsg.css('opacity', '0'); 

                setTimeout(() => {
                    divMsg.css('display', 'none');
                    divQuestao.css('display', 'flex'); 

                    setTimeout(() => {
                        divQuestao.css('opacity', '1');
                    }, 50);
                }, 750)
            }, 3000);
        }, 50);
    }, 750);
}

