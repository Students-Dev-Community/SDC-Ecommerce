import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthForm from "./components/Auth.js"
import ErrorPage from './components/Errorpage';
function App() {
  const router = createBrowserRouter([{
    path:'/',
    errorElement:<ErrorPage/>,
    children:[
      { index:true, element: <AuthForm /> }
    ],
}]);
    return <RouterProvider router={router} />
}
export default App;
