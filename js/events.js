function applyFilter() {
    // 1. نجيب القيم اللي المستخدم اختارها
    const selectedMonth = document.getElementById('monthFilter').value;
    const selectedType = document.getElementById('typeFilter').value;
    
    // 2. نمسك كل الكروت اللي في الصفحة
    const cards = document.querySelectorAll('.event-card');
    let visibleCount = 0;

    cards.forEach(card => {
        // نقرأ البيانات  اللي حطيناها في الخطوة الأولى
        const cardMonth = card.getAttribute('data-month');
        const cardType = card.getAttribute('data-type');

        // اختبار الشهر: هل هو "الكل"؟ أو هل الشهر مطابق؟
        const monthMatch = (selectedMonth === 'all' || cardMonth === selectedMonth);
        
        // اختبار النوع: هل هو "الكل"؟ أو هل النوع مطابق؟ (بنشوف لو الكلمة موجودة جوه الـ data-type)
        const typeMatch = (selectedType === 'all' || cardType.includes(selectedType));

        // لو نجح في الاختبارين
        if (monthMatch && typeMatch) {
            card.style.display = "block"; // اظهر
            visibleCount++;
        } else {
            card.style.display = "none";  // اخفي
        }
    });

    // تحديث العداد
    document.getElementById('count').innerText = visibleCount;
}