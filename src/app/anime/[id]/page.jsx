import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse (`anime/${ id }`)
    console.log(anime)
    return (
        <>
        <div className="pt-4 px-4">
        <h3 className=" font-bold text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
        </div>

        <div className="pt-4 px-4 flex gap-2 text-color-primary ">

            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2 ">
                <h3>SCORE</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2 ">
                <h3>Ranked</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2 ">
                <h3>Popularity</h3>
                <p>{anime.data.popularity}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2 ">
                <h3>Member</h3>
                <p>{anime.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-accent p-2 ">
                <h3>Eps</h3>
                <p>{anime.data.episodes}</p>
            </div>
           
          
        </div>

        <div className="pt-4 px-4 text-color-primary flex sm:flex-nowrap flex-wrap gap-2">
            <Image src={anime.data.images.webp.image_url} 
            alt={anime.data.images.jpg.image_url} 
            width={250} 
            height={250} 
            className="w-full rounded object-cover"/>
            <p className="text-xl text-justify ">{anime.data.synopsis}</p>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
        </>
    )
}

export default Page