import { useState } from "react";
import "./Login.css"
function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({ password: '', username: '' });

  // validation values:
  const validateInputs = () => {
    const newErrors = { password: '', username: '' };
    if (username.length !== 11) newErrors.username = 'شماره باید حتما 11 رقمی باشد';
    if (password.length < 8) newErrors.password = 'رمز شما باید حداقل 8 کاراکتر باشد';
    setErrors(newErrors);
    return !newErrors.password && !newErrors.username;
  };
  // submit:
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }

  }

  // element
  return (
    <div className="overlay">
      <div className='LoginPage'>
        <form className="register" onSubmit={handleSubmit}>
          <h1> ورود </h1>
          <div className="input-group-add">
            <input type="text" required onChange={(e) => setUsername(e.target.value)} className={errors.username ? 'error' : ''} />
            <label>شماره خود را وارد کنید</label>
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="input-group-add">
            <input type="password" required onChange={(e) => setPassword(e.target.value)} className={errors.password ? 'error' : ''} />
            <label>رمز عبور خود را وارد کنید</label>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button className='submit-add' type="submit">ورود</button>
        </form>
        <span className='sing-in'> حساب کاربری ندارید؟<a className='sing-in-link' >ثبت نام کنید</a> </span>
      </div>
    </div>
  )
}

export default Login;