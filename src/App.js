import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* Important:- You have to put "basename" attribute with "process.env.PUBLIC_URL" value when you have .env file in your project otherwise when you deploy your website on github it will show you blank pages in live website. */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
