export function binaryPrefixSearch(array, prefix) {
  function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  if (!prefix.trim()) return [];
  const normalizedPrefix = normalize(prefix);
  const results = [];
  let start = 0;
  let end = array.length - 1;

  while (end - start > 40) {
    const midIndex = Math.floor((start + end) / 2);
    const midElementNormalized = array[midIndex]?.name ? normalize(array[midIndex].name) : '';

    if (midElementNormalized.startsWith(normalizedPrefix)) {
      end = midIndex; // Tenta encontrar um índice ainda menor que também comece com o prefixo
    } else if (midElementNormalized < normalizedPrefix) {
      start = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  }

  for (let i = start; i <= end; i++) {
    const currentElementNameNormalized = array[i]?.name ? normalize(array[i].name) : '';
    if (currentElementNameNormalized.startsWith(normalizedPrefix)) {
      results.push(array[i]);
    }
  }

  return results;
}