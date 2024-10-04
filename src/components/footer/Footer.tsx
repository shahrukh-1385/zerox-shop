import { useState } from "react";

type event = React.ChangeEvent<HTMLInputElement>;
function Footer() {
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const email = 'abolfql@gmail.com';
    const subject = 'نظر من برای شما';
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <div className="bg-red-700 text-Slate-50 mt-4 h-80 flex flex-row-reverse justify-around items-center">
      <section className="mb-7 flex flex-row-reverse gap-32 mr-5">
        <div>
          <h3 className="font-vazirmatn400 border-b pb-2 mb-4 text-2xl">درباره ما</h3>
          <ul className="font-vazirmatn300 text-right">
            <li className="mb-5 text-lg">چنل تلگرام</li>
            <li className="mb-5 text-lg">اینستا گرام</li>
            <li className="mb-5 text-lg">ایمیل</li>
          </ul>
        </div>
        <div>
          <h3 className="font-vazirmatn400 border-b pb-2 mb-4 text-2xl">صفحات ما</h3>
          <ul className="font-vazirmatn300 text-right">
            <li className="mb-5 text-lg">خانه</li>
            <li className="mb-5 text-lg">فروشگاه</li>
            <li className="mb-5 text-lg">سبد خرید</li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <input placeholder=". . . پیام های شما" type="text" className="placeholder:text-right placeholder:mr-3 placeholder:font-vazirmatn400  text-gray-900 text-right w-72 h-12 focus:outline-none border-none" value={message} onChange={(e:event)=>{ setMessage(e.target.value)}}/>
          <button className="bg-Blue w-20 h-12" onClick={handleSendEmail}>ارسال</button>
        </div>
      </section>
    </div>
  )
}

export default Footer;