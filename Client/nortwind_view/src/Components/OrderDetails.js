import React, { useEffect, useState } from 'react'

function OrderDetails(orderID) {
    const [orderDetailsLst, update_orderDetailsLst] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/getOrderDetails?id=' + orderID.orderID)
            .then(response => response.json())
            .then((result) => {
                update_orderDetailsLst(result.result);
            },
                (error) => {
                    console.log(error);
                });
    }, [orderID]);

    return (
        <div>
            <div class="h5">details of order</div>
            
            <table class="table table-dark" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ProductID</th>
                        <th scope="col">UnitPrice</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Discount</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetailsLst.map((order,index) =>
                        <tr key={order.ProductID}>
                            <th scope="row">{index+1}</th>
                            <td>{order.ProductID} </td>
                            <td>{order.UnitPrice} </td>
                            <td>{order.Quantity} </td>
                            <td>{order.Discount} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default OrderDetails;