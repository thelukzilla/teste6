import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Origin } from './components/Origin';
import { Methodology } from './components/Methodology';
import { CurrentProject } from './components/CurrentProject';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-green-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Origin />
        <Methodology />
        <CurrentProject />
      </main>
      <Footer />
    </div>
  );
}

export default App;