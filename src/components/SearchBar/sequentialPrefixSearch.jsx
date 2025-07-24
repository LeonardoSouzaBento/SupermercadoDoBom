export function sequentialPrefixSearch(productList, prefix) {
  function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  if (!prefix.trim()) return [];

  const normalizedPrefix = normalize(prefix);
  const results = [];

  for (let i = 0; i < productList.length; i++) {
    const subArray = productList[i];
    if (!Array.isArray(subArray)) continue;

    for (let j = 0; j < subArray.length; j++) {
      const product = subArray[j];
      const normalizedName = product?.name ? normalize(product.name) : '';
      if (normalizedName.startsWith(normalizedPrefix)) {
        results.push(product);
      }
    }
  }

  const seenNames = new Set();
  const uniqueResults = [];

  for (const product of results) {
    const normalizedName = normalize(product.name);
    if (!seenNames.has(normalizedName)) {
      seenNames.add(normalizedName);
      uniqueResults.push(product);
    }
  }

  return uniqueResults;
}
