import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUtensils, FaBook, FaUsers, FaSchool, FaSatellite, FaAdjust, FaPaypal } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
const Dashboard = () => {
  // const [cart] = useCart()

  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isAdmin);
  console.log(isInstructor);
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
            isAdmin && <>
              <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
              <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage Class</NavLink></li>
              <li><NavLink to="/dashboard/allusers"><FaBook></FaBook> Manage User</NavLink></li>

            </>

          }


          {
            isInstructor && (
              <>
           
              <li><NavLink to="/dashboard/addItem"> <FaAdjust></FaAdjust> Add Class</NavLink></li>
              <li><NavLink to="/dashboard/selectedclass"> <FaSchool></FaSchool> My Classes</NavLink></li>
            </>
            )
          }

          { !isInstructor&& !isAdmin && (

            <>
                <li><NavLink to="/dashboard/studentsdb"><FaSatellite></FaSatellite> My Selected Classes</NavLink></li>
              <li><NavLink to="/dashboard/history"><FaSchool></FaSchool> My Enrolled Classes</NavLink></li>
              <li><NavLink to="/dashboard/pay"><FaPaypal></FaPaypal> Payments history</NavLink></li>

            </>
          )
          }

          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>

        </ul>

      </div>
    </div>

  );
};

export default Dashboard;