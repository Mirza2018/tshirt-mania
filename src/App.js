import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './components/Home/Home';
import Order from './components/Orders/Order';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('tshirt.json')
        },

        { path: '/order', element: <Order></Order> },
        { path: '/grandpa', element: <Grandpa></Grandpa> }
      ]

    }






  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
