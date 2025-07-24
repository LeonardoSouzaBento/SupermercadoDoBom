import {
  promo_products,
  productsCatId1,
  productsCatId2,
  productsCatId3,
  productsCatId4,
  productsCatId5,
  productsCatId6,
  productsCatId7,
  productsCatId8,
  productsCatId9,
} from "./productList";

const categoryArrays = [
  productsCatId1,
  productsCatId2,
  productsCatId3,
  productsCatId4,
  productsCatId5,
  productsCatId6,
  productsCatId7,
  productsCatId8,
  productsCatId9,
];

const categoryNames = [
  "productsCatId1",
  "productsCatId2",
  "productsCatId3",
  "productsCatId4",
  "productsCatId5",
  "productsCatId6",
  "productsCatId7",
  "productsCatId8",
  "productsCatId9",
  "promo_products",
];

export function normalizationData() {
  promo_products.forEach((product) => {
    const nameStart = product.name.substring(0, 15).toLowerCase();

    categoryArrays.forEach((categoryArray, index) => {
      categoryArray.forEach((catProduct) => {
        const catNameStart = catProduct.name.substring(0, 15).toLowerCase();

        if (nameStart === catNameStart) {
          console.log(`Produto duplicado: "${product.name}"`);
          console.log(
            `- Encontrado em: ${categoryNames[index]}`
          );
        }
      });
    });
  });
}
