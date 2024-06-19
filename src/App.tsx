import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import context 
import { UserContext } from "./context/Context"
// import home page
import { Home } from "./page/Home/Home"
// import layout 
import { RouterLayout } from "./Layout/RouterLayout"
import Porfolio from "./page/porfolio/Porfolio"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout/>,
      children:[
        {
          element: <Home/>
        },
        {
          path: "/Portfolio",
          element: <Porfolio />
        },
      ]
    }
  ])


  return (
    <UserContext.Provider value={null}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App