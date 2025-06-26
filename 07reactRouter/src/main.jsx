import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'


import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
//import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      } ,
      {
         path: "about",
         element: <About />
      }
    ]
  }
])*/
//another method
const router = createBrowserRouter([
  createRoutersFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path ='' element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact />} />
      <Route path ='user/:userid' element={<User />} />
      <Route 
      loader={ githubInfoLoader}
      path ='github' element={<Github/>}/>
    </Route>
  
  )

]
)
ReactDom.reateRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
