import Madlibs from './components/Madlibs';

// Main app container

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center py-20 bg-black gap-10">
      <h1 className=" text-2xl font-bold text-white">Welcome to Madlibs</h1>
      {/* Main Madlibs component */}
      <Madlibs />
    </div>
  );
}

export default App;
