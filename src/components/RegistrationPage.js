import Login from './Login';
import Register from './Register';
import './RegistrationPage.css'
const RegistrationPage = props =>{
    return(
        <>
            <table className='center' > 
            <tbody>
                <tr>
                    <td valign="top">
                    <Login/>
                    </td>
                    <td valign="top">
                    <Register /> 
                    </td>
                </tr>
            </tbody>

        </table>
        </>
    );
}
export default RegistrationPage;