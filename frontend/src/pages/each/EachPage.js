import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import SignIn from "../../containers/sign/sign_in/SignIn";
import SignUp from "../../containers/sign/sign_up/SignUp";

const data = {
    signIn: {
        html:<SignIn/>,
    },
    signUp: {
        html:<SignUp/>
    }
};

const EachPage = () => {
    const params = useParams();
    const menu = data[params.menu];

    return (
        <div>
            <Header/>
            {
                menu ? (
                    <>
                        {menu.html}
                    </>
                ) : (
                    <p>존재하지 않는 메뉴입니다.</p>
                )
            }
        </div>
    );
};

export default EachPage;