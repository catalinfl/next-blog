import Navbar from '@/components/Navbar'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
type Title = {
  title: string
}
export default function Home() {
  const t = getServerSideProps()
  t.then(res => console.log(res))
  return (
    <> 
    <Navbar />
    <p> brigada </p>
    </>
    )
}

const getServerSideProps = async () => {
  return {
    props: {
      title: "test"
    }
  }
}