'use server';

import { Gender } from "@/generated/prisma";
import prisma from "@/lib/prisma";

export const getPaginatedProducts = async (
  category: string,
  page = 1,
  take = 10
) => {

  if(isNaN(Number(page)) || Number(page) < 0) page = 1;

  try {
    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
      where: {
        gender: category as Gender
      },
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true
          }
        }
      }
    });

    const totalCount = await prisma.product.count({
      where: {
        gender: category as Gender,
      },
    });
    
    return {
      currentPage: page,
      totalPages: Math.ceil(totalCount / take),
      products: products.map(product => ({
        ...product,
        images: product.ProductImage.map(image => image.url)
      }))
    }

  } catch (error) {
    
  }
}