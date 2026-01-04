import { createContext, useContext, useState } from "react";

const ModalContext = createContext()


 export const ModalProvider = ({children}) => {

    const [openModals, setOpenModals] = useState([])


    const openModal = (id) => setOpenModals(prev => [...prev , id])
     
    const closeModal = (id)=> setOpenModals(prev => prev.filter(m=> m !== id))

    const isOpen = (id)=> openModals.includes(id)

  return (
    <ModalContext.Provider value={{openModal,closeModal,isOpen}}>
        {children}
        

    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return  useContext(ModalContext)
    
};