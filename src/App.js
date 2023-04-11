import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer creator={"Tom Sharkey"} />
    </div>
  );
}

export default App;
