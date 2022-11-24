
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Components from './pages/Components';
import Dashboard from './pages/Dashboard';
import Editors from './pages/Editors';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}>
            <Route index path='/' element={<Dashboard/>} />
            <Route path='components' element={<Components />}/>
            <Route path='editor' element={<Editors />} />
            <Route path="inbox" element={<h1>Inbox</h1>} />
            <Route path='accounts' element={<h1>Accounts</h1>}/>
            <Route path='schedule' element={<h1>Schedule</h1>} />
            <Route path='communities' element={<h1>Communities</h1>} />
            <Route path='analytics' element={<h1>Analytics</h1>} />
            <Route path='fileandfolder' element={<h1>File & folder</h1>} />
            <Route path='setting' element={<h1>Setting</h1>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
