import { Link } from "react-router-dom";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center p-10">
      <h1 className="text-5xl font-bold text-green-600 mb-10">Chaat-Le Menu</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-green-500 p-6 rounded-lg shadow-md">
          <h2 className="text-white text-xl font-semibold mb-3">Mexican</h2>
          <ul className="text-yellow-200">
            <li>Basic B Nachos - Rs. 40</li>
            <li>Señor Nachos - Rs. 60</li>
            <li>Fiesta Nachos - Rs. 100</li>
          </ul>
        </div>
        <div className="bg-green-500 p-6 rounded-lg shadow-md">
          <h2 className="text-white text-xl font-semibold mb-3">Indian</h2>
          <ul className="text-yellow-200">
            <li>Samosa Chaat - Rs. 40</li>
            <li>Sev Puri - Rs. 40</li>
            <li>Dahi Puri - Rs. 50</li>
            <li>Papdi Chaat - Rs. 40</li>
          </ul>
        </div>
      </div>
      <Link
        to="/quiz"
        className="mt-10 bg-yellow-400 text-green-800 font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300"
      >
        Take the Quiz!
      </Link>
    </div>
  );
};

export default MenuPage;
