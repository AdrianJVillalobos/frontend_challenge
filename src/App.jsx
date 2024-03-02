import './App.css'

/* const mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
}; */

function Header() {

  return (
    <>
    <nav class="nav">
      <div class="container">
        <div class="logo">
            <a href="#">Logo</a>
          </div>
        <div class="main_list" id="mainListDiv">
            <ul>
                <li><a href="#">Currency</a></li>
                <li><a href="#">Items</a></li>
                <li><a href="#">Accounts</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Swap</a></li>
                <li><a href="#">Sell</a></li>
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
    
<section class="home"></section>
    </>
  )
}

function App() {

return(

  <div>

    <Header />

  </div>

)


}



export default App
