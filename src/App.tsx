import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./page/Home"
import { RouterLayout } from "./Layout/RouterLayout"
import { UserContext } from "./context/Context"

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