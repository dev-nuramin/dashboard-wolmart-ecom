import { RouterProvider } from "react-router-dom";
import router from './router/routers';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/animate/animate.min.css';
import './assets/vendor/magnific-popup/magnific-popup.min.css';
import './assets/vendor/photoswipe/photoswipe.min.css';
import './assets/vendor/photoswipe/default-skin/default-skin.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/nouislider/nouislider.min.css';
import './assets/css/demo1.min.css';
import './assets/css/style.min.css'
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
