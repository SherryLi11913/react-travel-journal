import './App.css';
import Navbar from './components/Navbar/Navbar';
import journal from './data/journal';
import Journal from './components/Journal/Journal';

function App() {
  const navbar = {
    icon: 'https://clipart.world/wp-content/uploads/2020/11/Planet-Earth-Icon-clipart-transparent.png',
    title: 'my travel journal.',
  };

  return (
    <div className="App">
      <Navbar
        {...navbar}
      />
      <Journal journal={journal} />
    </div>
  );
}

export default App;
