import React from "react";
import { FaMinus, FaPlus, FaShoppingBag, FaTrash, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
  } = useCart();

  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 z-[115] bg-black/60 transition ${
          isCartOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[120] flex h-screen w-full max-w-md flex-col border-l border-white/10 bg-[#090909]/95 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
              Your Cart
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">Quick Checkout Bag</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            <FaTimes />
          </button>
        </div>

        <div className="border-b border-white/10 bg-gradient-to-r from-yellow-400/15 to-orange-500/10 px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between text-sm text-gray-200">
            <span>{itemCount} items added</span>
            <span className="font-bold text-yellow-400">${subtotal}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/5 text-2xl text-yellow-400">
                <FaShoppingBag />
              </div>
              <h3 className="mt-5 text-xl font-black text-white">Cart is empty</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-400">
                Add your favourite dishes and build a fast restaurant-style checkout flow.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="line-clamp-2 text-sm font-black uppercase tracking-wide text-white">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm font-bold text-yellow-400">{item.price}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.name)}
                          className="text-gray-400 transition hover:text-red-400"
                        >
                          <FaTrash />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-black/50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="px-3 py-2 text-xs text-yellow-400"
                          >
                            <FaMinus />
                          </button>
                          <span className="min-w-10 text-center text-sm font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="px-3 py-2 text-xs text-yellow-400"
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-white">
                          ${(Number(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 bg-black/70 px-5 py-5 sm:px-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-gray-400">Subtotal</span>
            <span className="text-2xl font-black text-yellow-400">${subtotal}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={clearCart}
              className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Clear
            </button>
            <button
              type="button"
              className="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-black"
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
