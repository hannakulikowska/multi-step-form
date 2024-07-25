import './App.scss';
import FormContainer from './components/FormContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Join our Community of Developers</h1>
      <p>
        To join our community and participate in frontend challenges. Please fill out the following
        form.
      </p>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<FormContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
