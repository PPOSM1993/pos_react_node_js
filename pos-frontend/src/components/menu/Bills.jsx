import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import { enqueueSnackbar } from "notistack";
import { createOrderRazorpay, verifyPaymentRazorpay } from "../../https/index";

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            reject(false);
        };
        document.body.appendChild(script);
    })
}

const Bills = () => {

    const customerData = useSelector((state) => state.customer);

    const cartData = useSelector((state) => state.cart);
    const total = useSelector(getTotalPrice);
    const taxRate = 19;
    const tax = (total * taxRate) / 100;
    const dispatch = useDispatch();
    const totalPriceWithTax = total + tax;

    const [paymentMethod, setPaymentMethod] = useState();

    const handlePlaceOrder = async () => {
        console.log("Loco");
        if (!paymentMethod) {
            enqueueSnackbar("Please select a payment method!", {
                variant: "warning",
            });
            return;
        }
        // load the script
        try {
            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
            if (!res) {
                enqueueSnackbar("Razorpay script failed to load!", {
                    variant: "error",
                });
                return;
            }

            //create order

            const reqData = {
                amount: totalPriceWithTax.toFixed(2),
            }

            const { data } = await createOrderRazorpay(reqData);

            const options = {
                key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`,
                amount: data.order.amount,
                currency: data.order.currency,
                name: "RESTRO",
                description: "Secure Payment for Your Meal",
                order_id: data.order.id,
                handler: async function (response) {
                    const verification = await verifyPaymentRazorpay(response);
                    console.log(verification);
                },
                prefill: {
                    name: customerData.name,
                    email: "",
                    contact: customerData.phone,
                },
                theme: { color: "025cca" }
            };
            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (error) {
            console.log(error);
            enqueueSnackbar("Something went wrong!", {
                variant: "error",
            })
        }
    };

    return (
        <>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Items ({cartData.lenght})</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">{total}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Tax (19%)</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">${tax.toFixed(2)}</h1>
            </div>

            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Total With Tax</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">${total}</h1>
            </div>
            <div className="flex item-center gap-3 px-5 mt-4">

                <button
                    onClick={() => setPaymentMethod("Cash")}
                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${paymentMethod === "Cash" ? "bg-[#383737]" : ""
                        }`}
                >
                    Cash
                </button>
                <button
                    onClick={() => setPaymentMethod("Online")}
                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${paymentMethod === "Online" ? "bg-[#383737]" : ""
                        }`}
                >
                    Online
                </button>
            </div>


            <div className="flex item-center gap-3 px-5 mt-4">
                <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg">
                    Print Receipt
                </button>
                <button
                    onClick={handlePlaceOrder}
                    className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg"
                >
                    Place Order
                </button>
            </div>
        </>
    );
}

export default Bills;
