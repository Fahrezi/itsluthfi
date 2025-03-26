import './App.css';
import ContactMe from './components/ContactMe';
import DynamicIsland from './components/DynamicIsland/DynamicIsland';
import Header from './components/Header';
import PresentSection from './components/PresentSection/PresentSection';

function App() {
  return (
    <>
      <DynamicIsland />
      <Header />
      <PresentSection />
      <ContactMe />
    </>
  )
}

export default App
