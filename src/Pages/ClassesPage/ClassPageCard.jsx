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
            fetch('https://summer-camp-school-server-snowy.vercel.app/carts', {
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
                        title: 'Class added on the cart.',
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
        // <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //     <figure><img src={image} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Name : {name}</h2>
        //         <p>Instructor name : {instructorName}</p>
        //         <p>Available seats : {availableSeats}</p>
        //         <p>Price : {price}</p>
        //         <p>Status : {status}</p>
        //         <p>
        //             <button  onClick={() => handleAddToCart(classpag)} className="btn btn-active btn-primary">Select</button>
        //         </p>

        //     </div>
        // </div>



        <div className="">
        <div className="">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={image} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0">
  
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Name : {name}
              </a>
              <p className="mb-2 text-gray-700">
              Instructor name : {instructorName}
              </p>
              <p className="mb-2 text-gray-700">
              Available seats : {availableSeats}
              </p>
              <p className="mb-2 text-gray-700">
              Price : {price}
              </p>
              <p className="mb-2 text-gray-700">
              <p>Status : {status}</p>
              </p>
              <p className="mb-2 text-gray-700">
              <button  onClick={() => handleAddToCart(classpag)} className="btn btn-active btn-primary">Select</button>
              </p>
  
            </div>
          </div>
  
  
        </div>
      </div>
    );
};

export default ClassPageCard;