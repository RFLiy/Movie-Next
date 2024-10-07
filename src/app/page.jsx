import AnimeList from "@/components/AnimeList/index.jsx"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=24")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 8)
 

  return (
  <>
  {/* Bagian Anime Populer */}
    <section>
    <Header title=" Top Anime " linkTitle="Lihat Semua" linkHref="/populer"/>
    <AnimeList api={topAnime}/>
    </section>
    <section>
    <Header title=" Rekomendasi" />
    <AnimeList api={recommendedAnime}/>
    </section>
  </>
  )
}

export default Page