import React from 'react'
import { FaSmile } from 'react-icons/fa'
import { FaCartShopping, FaLocationPin, FaPlateWheat } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const FeaturesSection = () => {
    const FeaturesSectionData=[{id:1,name:" Choose Food",dec:"  Browse restaurants and select your favorite dishes.",path:"/menubar",icons:<FaPlateWheat/>},{id:2,name:" Place Order",dec:"   Add items to cart and place your order easily.",path:"/menubar",icons:<FaCartShopping/>},{id:3,name:" Track Order",dec:"   Track your food in real time.",path:"/trackfood",icons:<FaLocationPin/>},{id:4,name:" Enjoy Food",dec:"  Enjoy hot and delicious meals at home",path:"/highlightsstats",icons:<FaSmile/>},]
  const navigate=useNavigate()
  return (
    <>
      <div className="bg-black py-16 px-10 text-white">
  <h2 className="text-4xl font-extrabold italic text-yellow-400 mb-10">
    How It Works
  </h2>


<div className="grid grid-cols-4 gap-8">
  {FeaturesSectionData.map((item)=>(
    <div key={item.id} className="bg-black/70 border border-gray-700 rounded-2xl p-8 text-center
    hover:border-yellow-400 transition">
    <p className="text-4xl flex justify-around mb-3 items-center ">{item.icons}</p>
    <h3 className="text-2xl font-bold italic text-yellow-400">
     {item.name}
    </h3>
    <p className="text-gray-300 mt-3">{item.dec}
    </p>

  </div>
  ))}
</div>

</div>

    </>
  )
}

export default FeaturesSection
