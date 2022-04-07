import '../styles/global.scss'
import NavigationHeader from '../components/navigation/NavigationHeader';
import TaskBar from '../components/navigation/TaskBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from '../components/body/Body';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationHeader />
        <TaskBar />
        <Body>
          <Routes>
            <Route path="/" element={<div>Main page</div>}></Route>
            <Route path="cart" element={<div>Main page</div>}></Route>
            <Route path="info" element={<div>Main page</div>}></Route>
          </Routes>
        </Body>

      </BrowserRouter>
    </>

  );
}

export default App;
