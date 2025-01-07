import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomeCom from './component/HomeCom';
import AddCom from './component/AddCom';
import ListCom from './component/ListCom';
import DetailCom from './component/DetailCom';
import EditCom from './component/EditCom';
import HeaderCom from './component/HeaderCom';

function App() {
  return (
    <>
    <HeaderCom/>
    <Routes>
    <Route path={'/home'} element={<HomeCom/>} />
    <Route path={'/list'} element={<ListCom/>} />
    <Route path={'/list/add'} element={<AddCom/>} />
    <Route path={'/list/detail/:id'} element={<DetailCom/>} />
    <Route path={'list/edit/:id'} element={<EditCom/>} />
    </Routes>
    
    </>
  );
}

export default App;
