import './global.css';
import { Header } from './components';
import HornetContainer from './components/Hornet/HornetContainer';

function App() {
  return (
    <main className="relative w-full min-h-screen">
      <Header />
      <HornetContainer />
    </main>
  );
}

export default App;
