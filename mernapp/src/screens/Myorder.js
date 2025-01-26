import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
      });

      const data = await response.json();
      console.log("Fetched Data:", data);
      setOrderData(data.orderData || []); // Safely set the order data
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {orderData && orderData.length > 0 ? (
            orderData.map((orderGroup, groupIndex) => (
              <div key={groupIndex} className="col-12">
                {/* Order Date */}
                <h5 className="mt-5">{orderGroup[0]?.Order_date || "Unknown Date"}</h5>
                <hr />
                {/* Order Items */}
                <div className="row">
                  {orderGroup.slice(1).map((item, itemIndex) => (
                    <div key={itemIndex} className="col-12 col-md-6 col-lg-3 mb-3">
                      <div className="card" style={{ width: "16rem", maxHeight: "360px" }}>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p>Qty: {item.qty}</p>
                          <p>Size: {item.size}</p>
                          <p>Price: ₹{item.price}/-</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-5">
              You haven’t ordered anything. Please order :)
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// export default function MyOrder() {
//   const [orderData, setOrderData] = useState({});

//   const fetchMyOrder = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/myOrderData", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
//       });

//       const data = await response.json();
//       console.log("data =",data);
//       setOrderData(data.orderData || []); // Safely handle missing `order_data`
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMyOrder();
//   }, []);
//   console.log("OrderData =",orderData)
//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           {orderData ? (
//             orderData.order_data.map((orderGroup, groupIndex) => (
//               <div key={groupIndex} className="col-12">
//                 <h5 className="mt-5">{orderGroup[0].Order_date}</h5>
//                 <hr />
//                 <div className="row">
//                   {orderGroup.slice(1).map((item, itemIndex) => (
//                     <div
//                       key={itemIndex}
//                       className="col-12 col-md-6 col-lg-3 mb-3"
//                     >
//                       <div
//                         className="card"
//                         style={{ width: "16rem", maxHeight: "360px" }}
//                       >
//                         <div className="card-body">
//                           <h5 className="card-title">{item.name}</h5>
//                           <p>Qty: {item.qty}</p>
//                           <p>Size: {item.size}</p>
//                           <p>Price: ₹{item.price}/-</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center mt-5">
//               You haven’t ordered anything. Please order :)
//             </p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
