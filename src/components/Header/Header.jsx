import './_Header.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Header() {

        return (
        <>
        <nav class="nav">
            <div class="container">
            <div class="logo">
                
                </div>
            <div class="main_list" id="mainListDiv">
                <ul>
                <li><span><a href="#">Currency</a><ExpandMoreIcon/></span></li>
                <li><span><a href="#">Items</a><ExpandMoreIcon/></span></li>
                <li><span><a href="#">Account</a><ExpandMoreIcon/></span></li>
                <li><span><a href="#">Services</a><ExpandMoreIcon/></span></li>
                <li><span><a href="#">Swap</a><ExpandMoreIcon/></span></li>
                <li><span><a href="#">Sell</a><ExpandMoreIcon/></span></li>
                </ul>
            </div>

            <div class="media_button">
            <button class="main_media_button" id="mediaButton">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

            </div>
        </nav>
        
 
        </>
        )
    }