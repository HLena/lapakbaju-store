import { Title } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen m-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <Title title="Welcome to LapakBaju Store" className='text-center' subtitle='Discover the latest fashion trends and styles'/>
          {/* <p className="text-gray-600 mt-2">Discover the latest fashion trends and styles</p> */}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Your Fashion Destination
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of clothing, accessories, and more. 
            Find your perfect style with our wide range of products.
          </p>
          
          {/* Quick Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/category/clothing" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-violet-600 hover:bg-violet-700 transition-colors"
            >
              Shop Now
            </a>
            <a 
              href="/account" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              My Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
