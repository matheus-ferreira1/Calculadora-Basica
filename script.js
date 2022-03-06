// INPUTS VIA MOUSE
function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
          //LIMPAR O VISOR AO CLICAR C
          document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
          let ultimoChar = document.getElementById('resultado').value

          if (ultimoChar.slice(-1) === '+' || ultimoChar.slice(-1) === '-' || ultimoChar.slice(-1) === '*' || ultimoChar.slice(-1) === '/' || ultimoChar.slice(-1) === '.') {
            valor = ''
          } else {
            document.getElementById('resultado').value += valor
          }
        }

        if (valor === '=') {
          var valor_campo = eval(document.getElementById('resultado').value)

          document.getElementById('resultado').value = valor_campo
        }

    } else if (tipo ==='valor') {
      document.getElementById('resultado').value += valor
    }
  }

// INPUTS VIA TECLADO
// obs: a função keypress não capta teclas como escape ou backspace
function keyPressed(e) {
  let keypressed = e.key

  if (keypressed === 'Escape') {
    document.getElementById('resultado').value = ''
  }

  if (keypressed === '+' || keypressed === '-' || keypressed === '*' || keypressed === '/' || keypressed === '.') {
    let ultimoChar = document.getElementById('resultado').value
    
    if (ultimoChar.slice(-1) === '+' || ultimoChar.slice(-1) === '-' || ultimoChar.slice(-1) === '*' || ultimoChar.slice(-1) === '/' || ultimoChar.slice(-1) === '.') {
      keypressed = ''
    } else {
      document.getElementById('resultado').value += keypressed
    } 
  }

  //RECEBER O PARAMETRO VIRGULA E TRANSFORMA-LA EM PONTO
  if (keypressed === ',') {
    keypressed = '.'
    document.getElementById('resultado').value += keypressed
  }

  if (keypressed === 'Enter') {
    let telaAtual = document.getElementById('resultado').value

    if (telaAtual == '') {
      alert('Insira os valores a serem calculados')
    } else {
      var valor_campo = eval(document.getElementById('resultado').value)
      document.getElementById('resultado').value = valor_campo
    }
  }

  if (keypressed === '0' || keypressed === '1' || keypressed === '2' || keypressed === '3' || keypressed === '4' || keypressed === '5' || keypressed === '6' || keypressed === '7' || keypressed === '8' || keypressed === '9') {
    document.getElementById('resultado').value += keypressed
  }

  if (keypressed === "Backspace") {
    let telaAtual = document.getElementById('resultado').value
    document.getElementById('resultado').value = telaAtual.substr(0, telaAtual.length - 1)
  }
}