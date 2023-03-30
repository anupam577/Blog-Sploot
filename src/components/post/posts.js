import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
// import { API } from '../../../service/api';

//components
import Post from './post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category1 = searchParams.get('category');
    
    useEffect(() => {
        const fetchData = async () => { 
            // let response = await API.getAllPosts({ category : category || '' });
           
                let res = await fetch(`https://api-staging-v2.sploot.space/api/v2/public/cms/post-categories/${category1}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
               let res1 = await res.json();
                
                getPosts(res1.data.data);
                // console.log("12")
            
            }
       
    
    fetchData();
}, [category1]);


    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={2} sm={post.length/2} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`${post.redirectUrl}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Posts;