

function App() {
  return (
    <div className="container h-screen w-screen
      mx-auto flex items-center justify-center">
      <div className="flex flex-col bg-gray-700 shadow-lg
       shadow-gray-800 py-4 px-6 mx-4 rounded-md">
        <div className="flex flex-row items-center
        ">
          <img
            className="w-24 rounded-full"
            alt="User Avatar"
            src="https://github.com/Mauricio2025.png" />

          <div className="ml-4 ">
            <h3 className="font-semibold text-xl">Mauricio Souza </h3>
            <h4 className="text-indigo-300 pt-1">Front-End Developer Junior </h4>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-2">Bio :</h2>
          <p className="text-gray-300 font-light 
          mt-1 max-w-lg text-justify">
            My passion is creating amazing websites 
            using HTML, CSS, JavaScript, Bootstrap, 
            React and also exploring the power of Tailwind.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-2">Career :</h2>
          <div>
            <h3 className="text-red-500 font-medium
            text-xl mt-1">
              John 3:16 Transports
            </h3>

            <ul className="list-disc list-inside pl-4">
              <li className="list-item">Front-End Developer</li>
              <li className="list-item">Research & Development Frontend Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
