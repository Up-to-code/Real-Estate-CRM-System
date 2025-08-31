export const chartData = {
    "7 أيام": [
      { name: "الأحد", value: 40 },
      { name: "الإثنين", value: 30 },
      { name: "الثلاثاء", value: 50 },
      { name: "الأربعاء", value: 20 },
      { name: "الخميس", value: 70 },
      { name: "الجمعة", value: 60 },
      { name: "السبت", value: 90 },
    ],
    "30 يوم": Array.from({ length: 30 }, (_, i) => ({
      name: `${i + 1}`, // ✅ أرقام فقط (1, 2, 3...)
      value: Math.floor(Math.random() * 100) + 10,
    })),
    "12 شهر": [
      { name: "يناير", value: 400 },
      { name: "فبراير", value: 300 },
      { name: "مارس", value: 500 },
      { name: "أبريل", value: 200 },
      { name: "مايو", value: 350 },
      { name: "يونيو", value: 600 },
      { name: "يوليو", value: 250 },
      { name: "أغسطس", value: 450 },
      { name: "سبتمبر", value: 300 },
      { name: "أكتوبر", value: 700 },
      { name: "نوفمبر", value: 400 },
      { name: "ديسمبر", value: 550 },
    ],
  }
  