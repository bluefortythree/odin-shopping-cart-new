import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css'
import { Outlet } from "react-router-dom"

function App(props) {
  const {cart} = props;
  const totalItems = cart.reduce((a, c) => a + c.qty, 0);
  return (
    <div>
        <Header totalItems={totalItems}/>
        <Outlet/>
        <Footer />
    </div>
  )
}

export default App
