import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Error from './components/Error'
import About from './components/Home/About'
import Menu from './components/Home/Menu'
import Features from './components/Home/Features'
import Contact from './components/Home/Contact'
import CreateFood from './components/CreateFood'
import Details from './components/Details'
import Basket from './components/Basket'
import Favorite from './components/Favorite'
import Search from './components/Search'

function App() {
  let routes = [
    {
      id: 1,
      link: '/',
      component: <Home/>
    },
    {
      id: 2,
      link: '*',
      component: <Error/>
    },
    {
      id: 3,
      link: '/about',
      component: <About/>
    },
    {
      id: 4,
      link: '/menu',
      component: <Menu/>
    },
    {
      id: 5,
      link: '/features',
      component: <Features/>
    },
    {
      id: 6,
      link: '/contact',
      component: <Contact/>
    },
    {
      id: 7,
      link: '/createfood',
      component: <CreateFood/>
    },
    {
      id: 8,
      link: '/details/:id',
      component: <Details/>
    },
    {
      id: 9,
      link: '/basket',
      component: <Basket/> 
    },
    {
      id: 10,
      link: '/favorite',
      component: <Favorite/> 
    },
    {
      id: 11,
      link: '/search/:name',
      component: <Search/> 
    }
  ]

  return (
    <>
     <Header/>
    <Routes>
      {
        routes.map((el)=> (
          <Route key={el.id} path={el.link} element={el.component} />
        ))
      }
    </Routes>
    </>
  )
}

export default App
