import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-school-server-snowy.vercel.app/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}

export default useCart;