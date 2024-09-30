function PersianNumber(num: number): string {
   const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
   return num.toString().split('').map((english) => persianNumbers[parseInt(english)]).join('');
};

export default PersianNumber;