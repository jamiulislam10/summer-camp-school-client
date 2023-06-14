import { useEffect, useState } from "react";

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-school-server-snowy.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                setPayments(data);
            });
    }, [])

    return (
        <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image </th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
    );
};

export default PaymentHistory;