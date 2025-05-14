export function binaryPrefixSearch(array, prefix) {
  function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  if (!prefix.trim()) return [];

  let left = 0;
  let right = array.length - 1;
  let matchIndex = -1;
  const normalizedPrefix = normalize(prefix);

  // Etapa 1: encontrar um índice com prefixo correspondente
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const normalizedName = normalize(array[mid].name);

    if (normalizedName.startsWith(normalizedPrefix)) {
      matchIndex = mid;
      break;
    } else if (normalizedName < normalizedPrefix) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Nenhum encontrado
  if (matchIndex === -1) return [];

  // Etapa 2: expandir para os lados
  const results = [];

  // Para trás
  let i = matchIndex;
  while (i >= 0 && normalize(array[i].name).startsWith(normalizedPrefix)) {
    i--;
  }
  i++; // voltar para o primeiro válido

  // Para frente
  while (i < array.length && normalize(array[i].name).startsWith(normalizedPrefix)) {
    results.push(array[i]);
    i++;
  }

  return results;
}
