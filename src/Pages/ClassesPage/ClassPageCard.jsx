import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const ClassPageCard = ({ classpag }) => {
    const {_id, name, image, availableSeats, instructorName, status, price } = classpag;


    // const { name, image, price, recipe, _id } = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Instructor name : {instructorName}</p>
                <p>Available seats : {availableSeats}</p>
                <p>Price : {price}</p>
                <p>Status : {status}</p>
                <p>
                    <button  onClick={() => handleAddToCart(classpag)} className="btn btn-active btn-primary">Select</button>
                </p>

            </div>
        </div>
    );
};

export default ClassPageCard;