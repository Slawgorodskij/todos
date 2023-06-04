import {useDispatch, useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
import {logoutSuccess} from "../store/user/userAction";
import {auth} from "../services/firebase";

export const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);
    if (user) {
        auth.signOut()
            .then(() => {
                dispatch(logoutSuccess())
            })
            .catch(() => {
            })
    } else {
        return <Navigate to='/login' replace/>
    }
};
