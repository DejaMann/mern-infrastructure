import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm"

const AuthPage = () => {
    return (
        <div>
            <h1>Authorization Page</h1>
            
            <SignUpForm />
            <LoginForm />
        </div>
    )
}

export default AuthPage;