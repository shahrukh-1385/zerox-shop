import { useState } from "react";
import { Link } from "react-router-dom";
import './Singin.css'
function Singin() {
   const [username, setUsername] = useState('');
   const [errors, setErrors] = useState({username: '' });
 
 
   // validation values:
   const validateInputs = () => {
     const newErrors = {username: '' };
     if (username.length !== 11) newErrors.username = 'شماره باید حتما 11 رقمی باشد';
     setErrors(newErrors);
     return !newErrors.username;
   };
 
   // submit:
   const handleSubmit = async (e: any) => {
     e.preventDefault();
     if (!validateInputs()) {
       return;
     };
   };
 
   // element...
   return (
     <div className="overlay">
       <div className='LoginPage'>
         <form className="register" onSubmit={handleSubmit}>
           <h1 className="mb-4 text-lg font-vazirmatn400"> ثبت نام </h1>
           <div className="input-group-add">
             <input type="text" required onChange={(e) => setUsername(e.target.value)} className={errors.username ? 'error' : ''} />
             <label className="font-vazirmatn300 mr-1">شماره خود را وارد کنید</label>
             {errors.username && <span className="error-message">{errors.username}</span>}
           </div>
           <button className='submit-add' type="submit">دریافت کد</button>
         </form>
         <span className='sing-in font-vazirmatn200'> حساب کاربری دارید؟<Link to={'/Login'} className='sing-in-link font-vazirmatn300'>وارد شوید</Link></span>
       </div>
     </div>
   )
 }
 export default Singin;