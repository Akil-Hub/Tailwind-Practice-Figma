import UniversalModal from '@/Modals/UniversalModal'
import React from 'react'
import { useModal } from '@/context/ModalContext'
const ServicesModal = () => {
    const {openModal} = useModal()
  return (
    <UniversalModal 
    id='services'
    header={<h2 className="text-green-500 font-bold text-3xl uppercase text-center mb-4">Our services</h2>}
    footer={<h2 className="text-blue-500 text-xl text-center"> I am the servicess part footer</h2>}
    
    >
        <ul className="list-disc">
            <li className="text-xl text-violet-600 font-bold cursor-pointer" onClick={()=>openModal('free-domain')}>Free Domain</li>

            <li className="text-xl text-violet-600 font-bold my-5">Free Hosting</li>

            
            <li className="text-xl text-violet-600 font-bold">Life time service</li>
        </ul>
        


    </UniversalModal>
  )
}

export default ServicesModal