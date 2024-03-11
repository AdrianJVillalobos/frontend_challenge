import './_ItemCard.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ItemCard() {

    return (

        <>
            <div className="container">
            <div className="flex_between">
            <div className="top">
                    <div className="on_sale">
                    <span className="hidden">•</span> ON SALE
                    </div>
                </div>
                <div>
                    <input
                        type="number"
                        defaultValue={1}
                        className="amount_input" />
                </div>
            </div>
            
      <div>
        <div className="flex_between">
          <span className="name">Asset</span>

        </div>
          <div>
            <span className="price">20$</span>
          </div>
        
        <p className="description" >Test object for a card component</p>
      </div>
      <div className="action_area">
      <span className="details_btn">
                <span className="details">
                    <a className="align" href="#"> 
                        Details
                    </a>

                </span>
              </span>
            <span className="cart_btn">
                <span className="add">
                    <a className="align" href="#"> 
                        Add
                        <ShoppingCartIcon/>
                    </a>

                </span>
              </span>
      </div>
    </div>
    </>
    ) 
  }
    
/*     <section class="card-container">
  
  
  
    <article class="c-card">
      
      <header class="c-card__header">
        <img src="https://via.placeholder.com/350x200"  class="c-card__image" alt="Card Image" />
      </header>
  
      <div class="c-card__body">
        <h2 class="c-card__title">
          Card
        </h2>
        <p class="c-card__subtitle">
          initial component
        </p>
        
        <p class="c-card__intro">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
        
      </div>
  
    </article>
    
    
    
    <article class="c-card c-card--center">
      
      <header class="c-card__header">
        <img src="https://via.placeholder.com/350x200"  class="c-card__image" alt="Card Image" />
      </header>
  
      <div class="c-card__body">
        <h2 class="c-card__title">
          card--center
        </h2>
        <p class="c-card__subtitle">
          center modifier
        </p>
        
        <p class="c-card__intro">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
      </div>
  
    </article> */
    
