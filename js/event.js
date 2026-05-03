// 1. حدد التاريخ اللي العداد هيوصل له
const targetDate = new Date("may 10, 2026 23:59:59").getTime();

// 2. امسك كل الـ spans اللي جوه الـ countdown
// الترتيب هنا مهم: 0 = DAYS, 1 = HRS, 2 = MINS, 3 = SECS
const timeSpans = document.querySelectorAll('.countdown .time-box span');

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector(".countdown").innerHTML = "<h3>EVENT STARTED</h3>";
        return;
    }

    // الحسابات
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 3. التحديث في الـ HTML بناءً على الترتيب
    timeSpans[0].textContent = days;
    timeSpans[1].textContent = hours < 10 ? "0" + hours : hours;
    timeSpans[2].textContent = minutes < 10 ? "0" + minutes : minutes;
    timeSpans[3].textContent = seconds < 10 ? "0" + seconds : seconds;
}

// تشغيل العداد كل ثانية
setInterval(updateTimer, 1000);

// تشغيل مبدئي عشان القيم تتحدث فوراً
updateTimer();