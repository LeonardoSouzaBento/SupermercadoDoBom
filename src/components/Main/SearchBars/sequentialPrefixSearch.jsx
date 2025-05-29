export function sequentialPrefixSearch(array, prefix) {
  function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  if (!prefix.trim()) return [];

  const normalizedPrefix = normalize(prefix);
  const results = [];

  for (let i = 0; i < array.length; i++) {
    const currentElementNameNormalized = array[i]?.name ? normalize(array[i].name) : '';
    if (currentElementNameNormalized.startsWith(normalizedPrefix)) {
      results.push(array[i]);
    }
  }

  return results;
}