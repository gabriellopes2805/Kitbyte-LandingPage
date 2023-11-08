const header = document.getElementById("header");
const arrow = document.getElementById("scrollArrow");
const olho1 = document.getElementById("olho1");
const olho2 = document.getElementById("olho2");
const senha = document.getElementById("senha");
const repetirSenha = document.getElementById("repetirSenha");
const cadastro = document.getElementById("fundo");
const fecharCadastro = document.getElementById("fecharCadastro");
const cadastroBtn = document.getElementById("cadastrar");
const email = document.getElementById("email");
const dataNasc = document.getElementById("dataNasc")
const errSenha = document.getElementById("errorSenha")
const errRepetirSenha = document.getElementById("errorRepetirSenha")
const errEmail = document.getElementById("errorEmail")
const errCadastro = document.getElementById("fundo2")
const errCadastroButton = document.getElementById("errCadastroButton")
var contador = [0, 0, 0, 0, 0, 0];
const inputs = [
  document.getElementById("nomeReal"),
  document.getElementById("nickname"),
  dataNasc,
  email,
  senha,
  repetirSenha,
];
const abrirCadastro = [
  document.getElementById("abrirCadastro1"),
  document.getElementById("abrirCadastro2"),
];
var visible1 = false;
var visible2 = false;
var downArrow = true;
var intervalId;
arrow.classList.add("arrowAnimate");
arrow.addEventListener("mousedown", () => {
  if (window.scrollY < 2605 && window.scrollY > 0) {
    arrow.classList.remove("arrowAnimate");
  }
  if (!downArrow) {
    intervalId = setInterval(() => {
      window.scrollBy(0, -2);
    }, 0.01);
  } else {
    intervalId = setInterval(() => {
      window.scrollBy(0, 2);
    }, 0.01);
  }
});
arrow.addEventListener("mouseup", () => {
  clearInterval(intervalId);
  intervalId = 0;
  if (window.scrollY < 2605 && window.scrollY > 0) {
    if (!downArrow) {
      arrow.classList.add("upArrow");
      arrow.classList.remove("arrowAnimate");
    } else {
      arrow.classList.remove("upArrow");
      arrow.classList.add("arrowAnimate");
    }
  }
});
arrow.addEventListener("mouseout", () => {
  clearInterval(intervalId);
  intervalId = 0;
  if (window.scrollY < 2605 && window.scrollY > 0) {
    if (!downArrow) {
      arrow.classList.add("upArrow");
      arrow.classList.remove("arrowAnimate");
    } else {
      arrow.classList.remove("upArrow");
      arrow.classList.add("arrowAnimate");
    }
  }
});
window.addEventListener("scrollend", () => {
  arrow.classList.add("arrowAnimate");

  // console.log(downArrow);

  if (window.scrollY >= 2605) {
    downArrow = false;
  } else if (window.scrollY == 0) {
    downArrow = true;
  }

  if (!downArrow) {
    arrow.classList.add("upArrow");
    arrow.classList.remove("arrowAnimate");
  } else {
    arrow.classList.remove("upArrow");
    arrow.classList.add("arrowAnimate");
  }
});
window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  arrow.classList.remove("arrowAnimate");
  if (window.scrollY > 0) {
    header.style.background = "#103463dd";
    header.style.backdropFilter = "blur(3px)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
    arrow.classList.add("arrowAnimate");
  }
});
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.name == "nomeReal") {
      contador[0] = true;
      if (Array.from(input.value).length != 0) {
        contador[0] = true;
      } else {
        contador[0] = false;
      }
    }
    if (input.name == "nickname") {
      contador[1] = true;
      if (Array.from(input.value).length != 0) {
        contador[1] = true;
      } else {
        contador[1] = false;
      }
    }
    if (input.name == "dataNasc") {
      contador[2] = true;
      if (Array.from(input.value).length != 0) {
        contador[2] = true;
      } else {
        contador[2] = false;
      }
    }
    if (input.name == "email") {
      contador[3] = true;
      if (Array.from(input.value).length != 0) {
        contador[3] = true;
      } else {
        contador[3] = false;
      }
    }
    if (input.name == "senha") {
      contador[4] = true;
      if (Array.from(input.value).length != 0) {
        contador[4] = true;
      } else {
        contador[4] = false;
      }
    }
    if (input.name == "repetirSenha") {
      contador[5] = true;
      if (Array.from(input.value).length != 0) {
        contador[5] = true;
      } else {
        contador[5] = false;
      }
    }

    if (senha.value != repetirSenha.value && senha.value != "" && repetirSenha.value != "") {
      senha.style.border = "red 2px solid";
      repetirSenha.style.border = "red 2px solid";
      errRepetirSenha.style.display = "block"
      errSenha.style.display = "none"
    } else if (senha.value == "" && repetirSenha.value != "") {
      senha.style.border = "red 2px solid";
      repetirSenha.style.border = "red 2px solid";
      errRepetirSenha.style.display = "none"
      errSenha.style.display = "block"
    } else {
      senha.style.border = "none";
      repetirSenha.style.border = "none";
      errRepetirSenha.style.display = "none"
      errSenha.style.display = "none"
    }

    if (!validatarEmail(email.value) && email.value != "") {
      email.style.border = "red 2px solid"
      errEmail.style.display = "block"
    } else if (validatarEmail(email.value) || email.value == "") {
      errEmail.style.display = "none"
      email.style.border = "none"
    }

    // console.log(contador, Array.from(input.value).length);
    if (
      contador[0] &&
      contador[1] &&
      contador[2] &&
      contador[3] &&
      contador[4] &&
      contador[5] &&
      validatarEmail(email.value) &&
      senha.value == repetirSenha.value 
    ) {
      // console.log("entrou");
      cadastroBtn.disabled = false;
      cadastroBtn.addEventListener("click", (e) => {
        e.preventDefault()
        abrirErrCadastro()



      // AQUI COLOCA OS CÓDIGOS PARA CADASTRO 


      })
    } else {
      cadastroBtn.disabled = true;
    }
  });
});

olho1.addEventListener("click", () => {
  mudarVisibilidade(olho1, senha);
});
olho2.addEventListener("click", () => {
  mudarVisibilidade(olho2, repetirSenha);
});

function mudarVisibilidade(olho, input) {
  if (olho == olho1) {
    visible1 = !visible1;
    // console.log(
    //   "É visível?",
    //   visible1 == true ? "sim" : "não",
    //   "\nQual o src da imagem?",
    //   olho1.src
    // );
    if (visible1) {
      olho.src = "imagens/eye-solid.svg";
      input.type = "text";
    } else {
      olho.src = "imagens/eye-slash-solid.svg";
      input.type = "password";
    }
  } else {
    visible2 = !visible2;
    // console.log(
    //   "É visível?",
    //   visible2 == true ? "sim" : "não",
    //   "\nQual o src da imagem?",
    //   olho1.src
    // );
    if (visible2) {
      olho.src = "imagens/eye-solid.svg";
      input.type = "text";
    } else {
      olho.src = "imagens/eye-slash-solid.svg";
      input.type = "password";
    }
  }
}
fecharCadastro.addEventListener("click", () => {
  cadastro.style.display = "none";
});
abrirCadastro.forEach(function (elemento) {
  elemento.addEventListener("click", () => {
    cadastro.style.display = "flex";
  });
});
function validatarEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function pad(valor) {
  return valor.toString().padStart(2, '0');
}

function formata(data) {
  return `${data.getFullYear()}-${pad(data.getMonth() + 1)}-${pad(data.getDate() - 1)}`;
}
dataNasc.max = formata(new Date())

errCadastroButton.addEventListener("click", fecharErrCadastro)
function abrirErrCadastro() {
  errCadastro.style.display = "flex"
}
function fecharErrCadastro() {
  errCadastro.style.display = "none"
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].value = ""
  }
}
document.getElementById("headerLogo").addEventListener("click", () => {
  window.scrollTo(0, 0)
  
})