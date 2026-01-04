import UniversalModal from '@/Modals/UniversalModal'

const FreeDomainModal = () => {
  return (
    <UniversalModal id='free-domain'
    header={<h1 className="text-green-500 font-bold text-2xl">Get Our high quality free domain</h1>}>

<ol className="list-[upper-alpha]  text-xl py-3">
    <li className="text-heading">text.doamin.com</li>
    <li className="text-heading">play.doamin.com</li>
    <li className="text-heading">Sing.doamin.com</li>
</ol>
        


    </UniversalModal>
  )
}

export default FreeDomainModal