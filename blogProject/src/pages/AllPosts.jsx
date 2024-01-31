import service from "../appwrite/configuration";
import { PostCard,Container } from "../components/index";
function AllPosts() {
    const [posts, setPosts] = React.useState([])
    React.useEffect( ()=>{} ,[])
    service.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents);
        }
    })
  return (
    <div className="py-8 w-full">
        <Container>
            <div className="flex flex-wrap">
                {posts.map( (post)=>(
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard post={post}/>
                    </div>
                ) )}
            </div>
        </Container>
    </div>
  )
}
export default AllPosts