import LatestPosts from '@/components/LatestPosts'
import Navbar from '@/components/Navbar'

type Props = {
  title: string
}


export default function Home({ title }: Props) {

  return (
    <> 
    <Navbar />
    <LatestPosts />
    <p> {title} </p>
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