import { createPortal } from 'react-dom';
import { useModal } from '@/context/ModalContext';
import { useEffect, useState } from 'react';

const UniversalModal = ({ id, children, header, footer }) => {
  const { isOpen, closeModal } = useModal();

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen(id)) {
      setTimeout (()=>setShow(true),10)
      
    }else{
      setShow(false)
    }
  
   
  }, [isOpen(id)])
  

  if (!isOpen(id)) return null;

  return createPortal(
    <section
      className={`fixed flex justify-center items-center inset-0 transition-all duration-300 ${show ? "bg-black/40" : ""} w-full h-full z-[100]`}
      onClick={() => closeModal(id)}
    >
      <article className={`bg-white shadow-lg rounded-lg p-10 transition-all duration-300  shadow-lg ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} onClick={e => e.stopPropagation()}>
        {/* Here is th hedar daynamic */}

        {header}

        {/*  */}

        <div className="flex justify-center items-center">{children}</div>

        {/* Here is the close button */}
        <div className="text-center py-4">
          <button
            className="text-red-500 border px-4 py-2 rounded-md text-sm mt-4 "
            onClick={() => closeModal(id)}
          >
            Close
          </button>
        </div>
        {/* Here is the footer daynamic */}
   {footer}
        {/*  */}
      </article>
    </section>,
    document.getElementById('modal-root')
  );
};

export default UniversalModal;
