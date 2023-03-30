import React from "react";
import Categories from "../components/categories/categories";
import Header  from "../components/navbar/header";
import {Box,Grid} from '@mui/material'; 
import Posts from "../components/post/posts";
import { useNavigate } from "react-router-dom";

const BlogPage=()=>{

    // const navigate =useNavigate();
    //  navigate('/blogs/?category=weekend-reads')
    return (
        <div>

            <Header/>
           
           {/* <Categories/>
           <Posts/>
         */}
         
                
                    <Categories />
                    <Grid container>
                <Grid container item xs={12} sm={10} lg={13}>
                    <Posts />
                </Grid>
            </Grid>
           
        </div>
    )
}

export default BlogPage