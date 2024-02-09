const perguntas = [
    {
      pergunta: "Qual é a linguagem de programação que é a base do desenvolvimento web?",
      respostas: [
        "Java",
        "JavaScript",
        "Python"
      ],
      correta: 1
    },
    {
      pergunta: "O que é necessário usar para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função da instrução 'if' em JavaScript?",
      respostas: [
        "Laço de repetição",
        "Declaração de função",
        "Condição de decisão"
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de linha em JavaScript?",
      respostas: [
        "# Comentário",
        "// Comentário",
        "/* Comentário */"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento de Orientação de Mídia",
        "Modelo de Objeto de Documento",
        "Dicionário de Objetos Móveis"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '+' faz em JavaScript quando aplicado a strings?",
      respostas: [
        "Subtração",
        "Concatenação",
        "Multiplicação"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar um elemento pelo ID",
        "Selecionar um elemento pelo nome da tag",
        "Selecionar um elemento pelo seletor CSS"
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "toNumber()",
        "stringToNumber()",
        "parseInt()"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Uma função que é passada como argumento para outra função",
        "Um tipo de erro",
        "Um método de loop"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pertunga-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      }
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
    
    quiz.appendChild(quizItem);
  }