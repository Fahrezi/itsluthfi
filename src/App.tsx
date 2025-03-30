import './App.css';
import ContactMe from './components/ContactMe';
import DynamicIsland from './components/DynamicIsland/DynamicIsland';
import Header from './components/Header';
import PresentSection from './components/PresentSection/PresentSection';
import Context from './context';

function App() {
  return (
    <Context>
      <DynamicIsland />
      <Header />
      <PresentSection />
      <ContactMe />
    </Context>
  )
}

export default App
