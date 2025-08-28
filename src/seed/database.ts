import { initialData } from "./seed";
import prisma from '../lib/prisma';


async function main() {

  // remove previous records
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany()
  ]);
  

  const { categories, products } = initialData;

  // Create categories first
  const categoriesData = categories.map((name) => ({name}));

  await prisma.category.createMany({
    data: categoriesData
  });

  const categoriesDb = await prisma.category.findMany();
  const categoriesMap = categoriesDb.reduce((acc, {name, id}) => {
    acc[name] = id;
    return acc;
  }, {} as Record<string, string>);

  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const categoryId = categoriesMap[type];
    if (!categoryId) {
      console.warn(`Category not found for type: ${type}`);
      return;
    }

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId
      }
    })

    const imagesData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }))

    await prisma.productImage.createMany({
      data: imagesData
    })
  })


  console.log('Seed ejecutado correctamente!')
}

(() => {

  main();
})()