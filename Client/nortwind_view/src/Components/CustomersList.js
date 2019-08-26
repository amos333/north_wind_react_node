import React, { useEffect, useState } from 'react'
import CustomerOrders from './CustomerOrders'

function CustomersList() {
  const [customersList, updateCustomersList] = useState([]);
  const [currCustomerID, updateCurrCustomerID] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/getAllCustomers')
      .then(response => response.json())
      .then((result) => {
        updateCustomersList(result.result);
        console.log("Success getting customers list");
      },
        (error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className="row">
      <div className="col-3 ">
        <ul className="list-group">
          {customersList.map(customer =>
            <li className="list-group-item" key={customer.CustomerID}>
              <span onClick={() => updateCurrCustomerID(customer.CustomerID)}>
                {customer.CustomerID} 
              </span>
              <span> </span>
              <span>{customer.ContactName}</span>
            </li>
          )}
        </ul>
      </div>

      <div className="col-9">
        <div className="col-12">
          <CustomerOrders customerid={currCustomerID}> </CustomerOrders>
        </div>
        
      </div>
    </div>
  );
};

export default CustomersList;