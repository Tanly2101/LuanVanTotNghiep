import React,{memo , useState} from 'react'
import { productInforTabs } from '../ultis/constant'
const activeStyle = ''
const notActiveStyle = ''
const ProductInfor = () => {
    const [activedTab, setActivedTab] = useState(1)
  return (
    <div>
        <div className='flex items-center gap-2 relative bottom-[-1px]'>
            {productInforTabs.map(el => (
                <span 
                className={`py-2 px-4 cursor-pointer ${activedTab === el.id ? 'bg-white border border-b-0' : 'bg-gray-200'}` } 
                key={el.id} 
                onClick={() => setActivedTab(el.id)} 
                >
                {el.name}</span>
            ))}
        </div>
        <div className='border w-full p-4'>
            <div className='List-items'>
            <li>{productInforTabs.some(el => el.id === activedTab) && productInforTabs.find(el => el.id === activedTab)?.content}</li>
            </div>
        
        </div>
        
    </div>
  )
}

export default memo(ProductInfor)