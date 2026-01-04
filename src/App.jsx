
import Router from '@/routes/Router'
import { ModalProvider } from '@/context/ModalContext';
import ContactModal from '@/Modals/ContactModal';
import ServicesModal from '@/Modals/ServicesModal';
import FreeDomainModal from '@/Modals/FreeDomainModal';
import { RouterProvider } from 'react-router-dom';
const App = () => {
  return (
    <>
    
    <ModalProvider>

    <RouterProvider router={Router}/>


      {/* here is my pupoup modals */}
      <ContactModal/>
      <ServicesModal/>
      <FreeDomainModal/>


    </ModalProvider>
   
    </>
  );
};

export default App;
