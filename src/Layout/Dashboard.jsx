import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaShoppingCart } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";
// import useCart from "../Hooks/useCart";
const Dashboard = () => {
// const [cart] = useCart()

// const isAdmin = true;
const [isAdmin] =useAdmin();
console.log(isAdmin);
    return (
  
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80">
          {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/studentsdb"><FaCalendarAlt></FaCalendarAlt> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/history"> My Enrolled Classes</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                           
                        </>
                    }




                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    {/* <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
        */}
        </ul>
        
        </div>
      </div>

    );
};

export default Dashboard;