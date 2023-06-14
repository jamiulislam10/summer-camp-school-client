import { useQuery } from "@tanstack/react-query";

const useClass = () => {
 
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-snowy.vercel.app/users');
            return res.json();
        }
    })

    return [classes, loading, refetch]
}

export default useClass;