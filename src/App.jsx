import './scss/_App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import ItemCard from './components/ItemCard/ItemCard';

function App() {
  return (
    <>
      <Header />
      <section className="big_container">
        <div clasName="list_container">
        <h1 className="title">Condimentum consectetur</h1>
        <div className="subfilters">
         <div className="list">
        <ItemCard />
        <ItemCard />
        </div> 
        </div>

        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default App;