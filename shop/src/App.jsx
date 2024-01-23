import { RouterProvider } from "react-router-dom";
import router from './router/routers';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/animate/animate.min.css';
import './assets/vendor/magnific-popup/magnific-popup.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/demo1.min.css';
import './App.css'
import './index.css'
function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
