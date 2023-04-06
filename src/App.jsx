import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import MainFooter from './components/MainFooter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <section className="todoapp">
        <Header />
        <Main />
        <MainFooter />
      </section>
      <Footer />
    </div>
  );
}

export default App;
