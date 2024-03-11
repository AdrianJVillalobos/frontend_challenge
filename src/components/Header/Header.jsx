import './_Header.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {

        return (
        <>
        <nav class="nav">
            <div class="nav_container">
                <div class="main_list" id="mainListDiv">
                    <ul>
                    <li><span className="icon_spacer"><a href="#">Currency</a><ExpandMoreIcon/></span></li>
                    <li><span className="icon_spacer"><a href="#">Items</a><ExpandMoreIcon/></span></li>
                    <li><span className="icon_spacer"><a href="#">Account</a><ExpandMoreIcon/></span></li>
                    <li><span className="icon_spacer"><a href="#">Services</a><ExpandMoreIcon/></span></li>
                    <li><span className="icon_spacer"><a href="#">Swap</a><ExpandMoreIcon/></span></li>
                    <li><span className="icon_spacer"><a href="#">Sell</a><ExpandMoreIcon/></span></li>
                    </ul>
                </div>
                <div className="spacer"></div>
                <span className="action_btn">
                        <span className="sign_in">
                            <a className="align" href="#"> 
                                SIGN IN
                                <PersonIcon />
                            </a>

                        </span>
                    </span>

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