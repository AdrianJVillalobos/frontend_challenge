import './scss/_App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import ItemCard from './components/ItemCard/ItemCard';

function App() {
  return (
    <>
      <Header />

    <div className="list_container">
      <h1 className="title">Condimentum consectetur</h1>
      <div className="main_container">
         <div className="list">
        <ItemCard />
        <ItemCard />
        </div>
      </div>
    </div>
      
      <Footer />
    </>
  );
}

export default App;