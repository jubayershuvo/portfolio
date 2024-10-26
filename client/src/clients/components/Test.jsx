import React from 'react';
import '../../App.css'; // Import the custom CSS

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll custom-scroll">
      <section className="h-screen bg-blue-500 snap-start flex items-center justify-center">
        <h1 className="text-white text-4xl">Page 1</h1>
      </section>
      <section className="h-screen bg-green-500 snap-start flex items-center justify-center">
        <h1 className="text-white text-4xl">Page 2</h1>
      </section>
      <section className="h-screen bg-red-500 snap-start flex items-center justify-center">
        <h1 className="text-white text-4xl">Page 3</h1>
      </section>
      <section className="h-screen bg-purple-500 snap-start flex items-center justify-center">
        <h1 className="text-white text-4xl">Page 4</h1>
      </section>
    </div>
  );
}

export default App;
