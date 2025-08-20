import { FilterPanel } from '@/components'

const CategoryLayout = ({ children } : { children: React.ReactNode} ) => {
  return (
    <>
      <FilterPanel/>
      { children }
    </>
  )
}

export default CategoryLayout