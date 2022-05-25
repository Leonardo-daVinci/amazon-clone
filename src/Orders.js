import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firebaseDB } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //Read all the orders for the user from the firestore
    if (user) {
      const q = query(
        collection(firebaseDB, "orders"),
        where("user", "==", user?.uid)
      );

      getDocs(q).then((querysnap) => {
        const newArray = querysnap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(newArray);
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((item) => {
          return <Order order={item} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
