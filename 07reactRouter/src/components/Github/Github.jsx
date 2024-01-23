
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    return (
      <>
        <div className="w-screen h-auto flex flex-wrap justify-center gap-24 bg-amber-400">
          <img src={data.avatar_url} alt="" />
          <div className="text-white font-extrabold text-3xl font-mono h-full flex align-middle">Name: {data.name} <br/>Followers: {data.followers}  </div>
        </div>
      </>
    );
}
export default Github

export const githubInfoLoader = async()=>{
   const data = await fetch('https://api.github.com/users/hiteshchoudhary')
   return data.json()
} 