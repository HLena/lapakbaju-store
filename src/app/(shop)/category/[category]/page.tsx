import { notFound } from 'next/navigation';
import { CardProduct, CategoryInfo, Pagination, Title } from '@/components';
import { getCategoryBySlug, isValidCategory } from '@/config/categories';
import { getPaginatedProducts } from '@/actions';


interface PageProps {
  params: { 
    category: string 
  },
  searchParams: { 
    page?: string 
  }
}

const Page = async ({ params, searchParams }: PageProps) => {

  const { category } = await params;
  const { page } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;

  const data = await getPaginatedProducts(category, pageNumber);

  if (!data || !isValidCategory(category)) {
    notFound();
  }

  const categoryDetails = getCategoryBySlug(category);
  if (!categoryDetails) {
    notFound();
  }
  const { products, currentPage, totalPages} = data;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Title 
            title={categoryDetails.name} 
            subtitle={categoryDetails.description}
          />
        </div>

        <CategoryInfo productsQuantity={products.length} category={categoryDetails.name}>
          <Pagination 
            totalPages={ totalPages }
            currentPage={ currentPage }
          />
        </CategoryInfo>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8">
          {products.map(product => (
            <CardProduct key={product.slug} {...product} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Page