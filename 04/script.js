// Seleciona o elemento do parágrafo atual de data pelo ID
const currentDateParagraph = document.getElementById("current-date");

// Seleciona o elemento de seleção de opções de data pelo ID
const dateOptionsSelectElement = document.getElementById("date-options");

// Obtém a data atual
const date = new Date();

// Extrai o dia, mês, ano, horas e minutos da data atual
const day = date.getDate();
const month = date.getMonth() + 1; // Os meses no objeto Date começam em zero, então adicionamos 1 para obter o mês correto
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

// Formata a data no formato "dd-mm-yyyy"
const formattedDate = `${day}-${month}-${year}`;

// Define o conteúdo de texto do parágrafo atual de data como a data formatada
currentDateParagraph.textContent = formattedDate;

// Adiciona um ouvinte de evento para a mudança da seleção de opções de data
dateOptionsSelectElement.addEventListener("change", () => {

  // Verifica o valor da opção selecionada no elemento de seleção de opções de data
  switch (dateOptionsSelectElement.value) {

    // Caso a opção seja "yyyy-mm-dd"
    case "yyyy-mm-dd":
      // Divide a data formatada em uma matriz de substrings usando o "-" como separador, inverte a ordem dos elementos e junta-os novamente com "-"
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;

    // Caso a opção seja "mm-dd-yyyy-h-mm"
    case "mm-dd-yyyy-h-mm":
      // Define o conteúdo de texto do parágrafo atual de data como a data formatada seguida pelas horas e minutos
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;

    // Caso contrário
    default:
      // Define o conteúdo de texto do parágrafo atual de data como a data formatada
      currentDateParagraph.textContent = formattedDate;
  }
});