import {Postform, Container} from '../components/index'
import service from '../appwrite/configuration'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [posts, setPosts] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    useEffect( ()=>{
        if(slug){
            service.getPost(slug).then( (post)=> {
                if(post) setPosts(post)} )
        } else {
            navigate('/')
        }
    } ,[slug, navigate])
  return posts?(
    <div className='py-8'>
        <Container>
            <Postform post={posts}/>
        </Container>
    </div>
  ) : null
}
export default EditPost