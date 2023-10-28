import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";

const redirectComponent = (Component) => {
    const isUserSubmit = useSelector((state) => state.auth.user.isAuth)

    return (props) => {
        return (
            <>
                {isUserSubmit ? <Component {...props}/> : <Navigate to='/login'/>}
            </>)
    }
}
export default redirectComponent