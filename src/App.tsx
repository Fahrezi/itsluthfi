import './App.css';
import ContactMe from './components/ContactMe';
import DynamicIsland from './components/DynamicIsland/DynamicIsland';
import Education from './components/Education';
import Header from './components/Header';
import Stacks from './components/Stacks';
import Working from './components/Working';

function App() {
  return (
    <>
      <DynamicIsland />
      <Header />
      <Education />
      <Stacks />
      <Working />
      <ContactMe />
    </>
  )
}

export default App
