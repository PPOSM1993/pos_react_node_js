import { useEffect, useState } from "react";
import { getUserData } from "../https";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useLoadData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoaded] = useState(true);

    useEffect(() => async () => {
        const fetchUser = async () => {
            try {
                const { data } = await getUserData();
                console.log(data);
                const { _id, name, phone, email, role } = data.data;
                dispatch(setUser({ _id, name, phone, email, role }));

            } catch (error) {
                console.log(error);
                dispatch(removeUser())
                navigate("/auth");
            } finally {
                setIsLoaded(false);
            }
        }
        fetchUser();
    }, [dispatch, navigate]);

    return isLoading;
}

export default useLoadData;