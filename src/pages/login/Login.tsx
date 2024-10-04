import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCardContext } from "../../hooks/shoppingCardItemHooks/shoppingCardItemHooks";

type inputType = 'password' | 'text';

function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({ password: '', username: '' });
  const [inputType, setInputType] = useState<inputType>("password");
  const { setIsLogin } = useShoppingCardContext();
  
  // for teleport in pages
  const navigate = useNavigate();

  const validateInputs = () => {
    const newErrors = { password: '', username: '' };
    if (username.length <= 2 || username.length >= 12) newErrors.username = "نام شما باید بیشتر از 2 و کم تر از 12 کارامتر باشد";
    if (password.length < 8) newErrors.password = 'رمز شما باید حداقل 8 کاراکتر باشد';
    setErrors(newErrors);
    return !newErrors.password && !newErrors.username;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    };
    setIsLogin(username);
    navigate('/');
  };

  const typeInput = () => {
    setInputType(inputType === "password" ? 'text' : 'password');
  }

  return (
    <div className="overlay">
      <div className='LoginPage'>
        <form className="register" onSubmit={handleSubmit}>
          <h1 className="mb-4 text-lg font-vazirmatn400"> ورود </h1>
          <div className="input-group-add flex flex-col">
            <input type="text" required onChange={(e) => setUsername(e.target.value)} className={errors.username ? 'error' : ''} />
            <label className="font-vazirmatn300 mr-1">نام خود را وارد کنید</label>
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="input-group-add rounded-lg border flex justify-between items-center" id="input-group-pass">
            <input type={inputType} required onChange={(e) => setPassword(e.target.value)} id="pass" className={`${errors.password ? 'error' : ''}`} />
            <label className="font-vazirmatn300 mr-1">رمز عبور خود را وارد کنید</label>
            {errors.password && <span className="error-message">{errors.password}</span>}
            <span onClick={typeInput}>
              {
                inputType === "password"
                  ?
                  <i className="fa-regular fa-eye ml-2"></i>
                  :
                  <i className="fa-regular fa-eye-slash ml-2"></i>
              }
            </span>
          </div>
          <button className='submit-add' type="submit">ورود</button>
        </form>
        <span className='sing-in font-vazirmatn200'> حساب کاربری ندارید؟<Link to={'/Singin'} className='sing-in-link font-vazirmatn300' >ثبت نام کنید</Link> </span>
      </div>
    </div>
  )
}

export default Login;
