
import { AppBar, Toolbar, styled, Button ,Avatar} from '@mui/material'; 

import { Link } from 'react-router-dom';
//  import About from '../about/about';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/authcontext';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: right;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }

`



const Header = () => {

    
    const navigate = useNavigate();
    const{user,setuser}=useContext(AuthContext)
    const logout =()=>{
        localStorage.clear();
    }
    return (
        

        <Component>
            <Container>
              
                <Link to='/blogs/?category=weekend-reads'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/' onClick={logout} >LOGOUT </Link>
                <Link>  ({user? user.name:null})</Link>
               
                <Avatar alt="Remy Sharp" src={user? user.photoUrl:null}/>
                    
                
                     </Container>
        </Component>
       
    )
}

export default Header;