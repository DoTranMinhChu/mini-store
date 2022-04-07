import '../styles/global.scss'
import NavigationHeader from '../components/navigation/NavigationHeader';
import TaskBar from '../components/navigation/TaskBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from '../components/body/Body';
import Home from './home/Home';
import Cart from './cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationHeader />
        <TaskBar />
        <Body>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="cart" element={<Cart/>}></Route>
            <Route path="info" element={<div>Main page</div>}></Route>
          </Routes>
        </Body>

      </BrowserRouter>
    </>

  );
}

export default App;
