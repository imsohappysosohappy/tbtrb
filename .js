// نسخ اسم الديسكورد
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyDiscord');
  if(copyBtn){
    copyBtn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText('4_j9');
        copyBtn.textContent = 'تم النسخ ✔';
        setTimeout(()=> copyBtn.textContent = 'نسخ الاسم', 2000);
      }catch(e){
        copyBtn.textContent = 'انسخ يدوياً: 4_j9';
      }
    });
  }
});
