//Functional component
import { React } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import Modal from './Modal';
/*
 For React 6+ :
 https://stackoverflow.com/questions/70403329/how-to-redirect-in-react-v6
*/
const Contact = (props) => {
    console.log(props);
    let navigate = useNavigate();
    setTimeout( () => {
        //props.history.push('/about')
        //<Navigate replace to="/about" />
        navigate('/about')
    }, 2000) //wait 2s then go to /about
    return (
        <div>
            <Modal></Modal>
            <div 
                className='ui raise very padded text container segment'
                style = {{marginTop : '80px'}}
            >
                <h3 className='uiHeader'>Contact</h3>
                <p>aaaa bbbb</p>
            </div>
            <div 
                className='ui raise very padded text container segment'
                style = {{marginTop : '80px'}}
            >
                <Link to='/card/rupal' className='uiHeader'>Rupal</Link>
                <p>rrrr mmmm</p>
            </div>            
        </div>
    )
}

export default Contact;