import React from "react";
// import "./Category.css";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, styled, Button ,Avatar} from '@mui/material';
function Categorie(props)
{
   return (
    <Link to={`/blogs/?category=${props.slug}`}>
      <div key={Math.random()}  className="boxcat   btn btn-success  ">
      <Avatar  className="ava" alt="Remy Sharp" src={props.imageUrl}/>
      <h2 className='category-name' ><a href="#" >{props.name}</a></h2>
  </div>
  </Link>
   )
};
export default Categorie;