
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Progress from './components/Progress';
import DataProvider from './components/DataProvide';

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Progress />
        <Nav />
        <Main />
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
