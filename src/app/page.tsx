import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Recent from '@/components/Recent'
import Wall from '@/components/Wall'
import AuthProvider from '@/providers/AuthProvider'


export default function Home() {
  return (
    <> 
    <Navbar />
    <div className="flex flex-col sm:flex-row max-w-[1280px] gap-5 mx-auto">
    <Wall />
    <div className='flex flex-col max-w-[400px] mt-4 mx-auto sm:flex-[2]'> 
    <Categories />
    <Recent />
    </div>
    </div>
    <Footer />
    </>
    )
}
