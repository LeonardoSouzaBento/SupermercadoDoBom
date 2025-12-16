export function animationOfWrite(message, setState) {
    let index = 0;

    const writeInterval = setInterval(() => {
      setState(() => message.slice(0, index + 1));
      index++;
      
      if (index >= message.length) {
        clearInterval(writeInterval);
      }
    }, 70);
}

export function getUniqueResults(products, start = 0, end = 14) {
  const seen = new Set();
  return products
    .map((p) => p.name)
    .filter((name) => {
      const prefix = name.slice(start, end).toLowerCase();
      if (seen.has(prefix)) return false;
      seen.add(prefix);
      return true;
    });
}

export function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function normalize2(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function animateInputMessage(message, setState) {
  let index = 0;

  const writeInterval = setInterval(() => {
    setState(() => message.slice(0, index + 1));
    index++;

    if (index >= message.length) {
      clearInterval(writeInterval);

      // Depois de um pequeno delay, apaga
      setTimeout(() => {
        let eraseIndex = message.length;

        const eraseInterval = setInterval(() => {
          eraseIndex--;
          setState(message.slice(0, eraseIndex));

          if (eraseIndex <= 0) {
            clearInterval(eraseInterval);
          }
        }, 40); // apagar mais rápido
      }, message.length * 100); // tempo de exibição completa
    }
  }, 80); // escrever uma letra a cada 80ms
}
