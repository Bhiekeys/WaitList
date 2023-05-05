import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Waitlist from './pages/Waitlist';
import Questions from './pages/Questions';
import Questwo from './pages/Questwo';
import Questhree from './pages/Questhree';
import Questfour from './pages/Questfour';
import Completed from './pages/Completed';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Waitlist />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questwo" element={<Questwo />} />
          <Route path="/questhree" element={<Questhree />} />
          <Route path="/questfour" element={<Questfour />} />
          <Route path='/completed' element={<Completed/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
