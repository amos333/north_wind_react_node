import React, { useEffect, useState } from 'react'
import OrderDetails from './OrderDetails';

function CustomerOrders(customerid) {
  const [customerOrders, updateCustomerOrders] = useState([]);
  const [clickedOrderID, update_clickedOrderID] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/getOrdersForCustomer?id=' + customerid.customerid)
      .then(response => response.json())
      .then((result) => {
        updateCustomerOrders(result.result);
      }, (error) => {
      });
  }, [customerid]);

  return (
    <div>
      <div className="h5">Orders for Customer: {customerid.customerid}</div>
      <ul className="list-group">
        {customerOrders.map(customer =>
          <li className="list-group-item" onClick={() => update_clickedOrderID(customer.OrderID)} key={customer.OrderID}>
            <span>{customer.OrderID} </span>
            <span>{customer.ShipName}</span>
          </li>
        )}
      </ul>

      <div className="col-12">
        <OrderDetails orderID={clickedOrderID}></OrderDetails>
      </div>
    </div>
  );

};

export default CustomerOrders;