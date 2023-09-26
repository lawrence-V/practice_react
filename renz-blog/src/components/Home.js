import BlogList from './BlogList';
import { Blocks } from 'react-loader-spinner'
import useFetch from '../useFetch';
import { Button } from '@chakra-ui/react';



const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">



            {error && <div> {error} </div>}
           {isPending && (
             <div className="home center">
            <Blocks
            visible={true}
            height="150"
            width="150" 
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            />
             </div>
               
      )}
            {blogs && <BlogList  blogs={blogs} title="All blogs!"/>}        
        </div>
     );
}
 
export default Home;