import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import context 
import { UserContext } from "./context/Context"
// import home page
import { Home } from "./page/Home/Home"
// import layout 
import { RouterLayout } from "./Layout/RouterLayout"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout/>,
      children:[
        {
          index: true,
          element: <Home/>
        }
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