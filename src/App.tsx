import './App.scss';
import FormContainer from './components/FormContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormProvider } from './components/FormContext';

function App() {
  return (
    <>
      <h1>Join our Community of Developers</h1>
      <p>
        To join our community and participate in frontend challenges. Please fill out the following
        form.
      </p>
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path="/*" element={<FormContainer />} />
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
