import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Recent from '@/components/Recent'
import Wall from '@/components/Wall'

type Params = {
  page: string
}

type SearchParams = {
  searchParams: Params
}

export default function Home({ searchParams }: SearchParams) {
  const page = parseInt(searchParams.page) || 1
  console.log(page)
  return (
    <> 
    <Navbar />
    <div className="flex flex-col sm:flex-row max-w-[1280px] gap-5 mx-auto">
    {/*  @ts-expect-error */}
    <Wall page={page}/>
    <div className='flex flex-col max-w-[400px] mt-4 mx-auto sm:flex-[2]'> 
    {/* @ts-expect-error */}
    <Categories />
    {/* @ts-expect-error */}
    <Recent />
    </div>
    </div>
    <Footer />
    </>
    )
}
