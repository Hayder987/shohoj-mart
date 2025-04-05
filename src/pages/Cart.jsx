import CartCard from "../components/cartComponents/CartCard";
import PageMargin from "../components/common/PageMargin";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cartData, cartLoading, cartRefetch } = useCart();
  const subTotal = cartData?.reduce((acc, item) => acc + item?.netPrice, 0);
  const total = subTotal + 20;
  

  return (
    <div className="min-h-[100vh] bg-gray-50">
      <PageMargin />
      <div className="container flex flex-col md:flex-row gap-6 mx-auto px-4 py-10 items-start">
        {/* cart card */}
        <div className="lg:w-8/12 w-full">
          <CartCard
            cartData={cartData}
            cartLoading={cartLoading}
            cartRefetch={cartRefetch}
          />
        </div>

        {/* summary aside */}
        <div className="lg:w-4/12 lg:sticky lg:top-0 lg:z-10 w-full">
          <div className="bg-white p-6">
            <h1 className="text-2xl font-medium">Order Summary</h1>
            <div className="divider"></div>
            <p className="mb-3 flex justify-between">SubTotal With Discount: <span className="font-semibold">{subTotal}$</span></p>
            <p className="flex justify-between">
              DeliveryFee: <span className="font-semibold">20$</span>
            </p>
            <div className="flex justify-center mb-6 items-center mt-10">
              <input
                type="text"
                name="cupon"
                placeholder="Enter Coupon Number"
                className="w-full py-2 px-4 border border-gray-300"
              />
              <button className="bg-blue-700 cursor-pointer py-2 px-6 text-white font-medium">
                Apply
              </button>
            </div>
            <p className="flex justify-between mb-10">
              Total: <span className="font-semibold">{total}$</span>
            </p>
            <button className="bg-blue-700 cursor-pointer w-full py-2 px-6 text-white font-medium uppercase">
              Proceed to checkout ({cartData?.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
