// import logo from './logo.svg';
import './App.css';
import Product from '../src/components/Product'
// import List from '../src/components/Item'
function App() {
  return (
    <div className="App">
      <div className="product">
      <Product/>
      </div>
      <hr />
      <div className="createitem">
      {/* <List/> */}
      </div>
    
    </div>
  );
}

export default App;
