import prisma from "@/lib/prisma"

export const getProductDetails = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug
      },
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true
          }
        }
      }
    })

    console.log(product)
    return product;

  } catch (error) {
    
  }
}