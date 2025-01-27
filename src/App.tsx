import './global.css';
import { Header } from './components';
import Hornet from './components/Hornet';

function App() {
  return (
    <main className="relative w-full min-h-screen bg-gray-900 text-white">
      <Header />
      <Hornet speed={120} />
    </main>
  );
}

export default App;
