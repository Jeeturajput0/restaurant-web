import React from 'react'

const BenefitsSection = () => {
  return (
    <>
       <div className="bg-black text-white py-20 px-10">
  <div className="text-center mb-14">
    <h2 className="text-5xl font-extrabold italic text-yellow-400 mb-4">
      Why Choose EatMore?
    </h2>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      EatMore connects you with the best restaurants around you.
      Enjoy fast delivery, trusted partners, and hassle-free payments
      — all in one place.
    </p>
  </div>

  <div className="grid grid-cols-3 gap-10">
    <div className="bg-gradient-to-b from-black/80 to-black/60
      border border-gray-700 rounded-2xl p-8 text-center
      hover:border-yellow-400 transition">
      <div className="text-5xl mb-5">🚀</div>
      <h3 className="text-2xl font-bold italic text-yellow-400">
        Lightning Fast Delivery
      </h3>
      <p className="text-gray-300 mt-4 leading-relaxed">
        Your food is prepared fresh and delivered quickly,
        so you never have to wait long for your cravings.
      </p>
    </div>

    <div className="bg-gradient-to-b from-black/80 to-black/60
      border border-gray-700 rounded-2xl p-8 text-center
      hover:border-yellow-400 transition">
      <div className="text-5xl mb-5">🍽</div>
      <h3 className="text-2xl font-bold italic text-yellow-400">
        Top Rated Restaurants
      </h3>
      <p className="text-gray-300 mt-4 leading-relaxed">
        Choose from carefully selected restaurants
        offering delicious meals and great service.
      </p>
    </div>

    <div className="bg-gradient-to-b from-black/80 to-black/60
      border border-gray-700 rounded-2xl p-8 text-center
      hover:border-yellow-400 transition">
      <div className="text-5xl mb-5">💳</div>
      <h3 className="text-2xl font-bold italic text-yellow-400">
        Safe & Easy Payments
      </h3>
      <p className="text-gray-300 mt-4 leading-relaxed">
        Pay securely using UPI, debit cards, credit cards,
        wallets, or cash on delivery.
      </p>
    </div>
  </div>
</div>
    </>
  )
}

export default BenefitsSection
