interface Props{
  params: {
    id: string
  }
}

const CategoryPage = async ({ params }: Props) => {

  const { id } = await params;

  return (
    <div>CategoryPage: {id} </div>
  )
}

export default CategoryPage