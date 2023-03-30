import React, { useState, useEffect } from 'react';
// import '../style/Categories/categories.css'
import axios from 'axios'
import { AppBar, Toolbar, styled, Button, Avatar } from '@mui/material';
import './Categorie.css'
import Categorie from './categorie';


const Categories = () => {
    
   
    const [categories, setCategories] = useState([])
    useEffect(() => {
        
        const getCategory = async () => {
            let res = await fetch(`https://api-staging-v2.sploot.space/api/v2/cms/post-categories`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            res = await res.json();
            if (res) {

                setCategories(res.data.data)
            }
            else {
                console.log("error")
            }

            // console.log("res.data", res.data);
        }
        getCategory()
    }, [])
    return (


        <>



            <h1 style={{ textAlign: 'center' }}>All Categories</h1>

            <div className='parent-container'>
                {categories.map(category =>
                    <Categorie
                        imageUrl={category.imageUrl}
                        name={category.name}
                        slug={category.slug}

                    >
                    </Categorie>
                )}

            </div>



        </>


    )
}

export default Categories