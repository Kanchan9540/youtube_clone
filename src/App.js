import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./Components/WatchPage";

//watch page router
const appRouter = createBrowserRouter([{
  path: "/",
  element:<Body/>,
  children: [
   {
    path: "/",
    element: <MainContainer/>,
   },
   {
    path: "watch",
    element: <WatchPage/>,
   },

  ]
}])


function App() {
return (

  <Provider store={store}>  
   <div>
    <Head/>
    <RouterProvider router={appRouter}/> {/*if the path is "/" my body will be rendered here */}
   </div>

   </Provider> 

  );
}

export default App;
