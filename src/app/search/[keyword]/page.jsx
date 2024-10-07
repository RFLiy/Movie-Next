import AnimeList from "@/components/AnimeList/index.jsx"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = async ({ params }) => {
  const { keyword } = params

  const decodedKeyword = decodeURI(keyword)
  const seacrhAnime = await getAnimeResponse ("anime", `q=${decodedKeyword}`)

  return (
  <>
  {/* Bagian Populer */}
    <section>
    <Header title= {`Pencarian Untuk ${ decodedKeyword }......`}/>
    <AnimeList api={seacrhAnime}/>
    </section>
  </>
  )
}

export default Page