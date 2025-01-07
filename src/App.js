import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddCom from './component/AddCom';
import ListCom from './component/ListCom';
import DetailCom from './component/DetailCom';
import EditCom from './component/EditCom';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<ListCom />} />
        <Route path={'/list/add'} element={<AddCom />} />
        <Route path={'/list/detail/:id'} element={<DetailCom />} />
        <Route path={'list/edit/:id'} element={<EditCom />} />
      </Routes>

    </>
  );
}

export default App;
