const CALCULUS_QUESTIONS = [
  {
    category: "Gioi han",
    question: "lim(x→0) sin(x)/x = ?",
    options: ["0", "1", "∞", "Khong ton tai"],
    correct: 1
  },
  {
    category: "Gioi han",
    question: "lim(x→∞) (1 + 1/x)^x = ?",
    options: ["1", "∞", "e", "0"],
    correct: 2
  },
  {
    category: "Gioi han",
    question: "lim(x→0) (1 - cos(x))/x² = ?",
    options: ["0", "1", "1/2", "∞"],
    correct: 2
  },
  {
    category: "Gioi han",
    question: "lim(x→0) tan(x)/x = ?",
    options: ["0", "1", "∞", "-1"],
    correct: 1
  },
  {
    category: "Gioi han",
    question: "lim(x→0) (eˣ - 1)/x = ?",
    options: ["0", "e", "1", "∞"],
    correct: 2
  },
  {
    category: "Gioi han",
    question: "lim(x→∞) x/eˣ = ?",
    options: ["∞", "1", "0", "e"],
    correct: 2
  },
  {
    category: "Dao ham",
    question: "d/dx (x³) = ?",
    options: ["x²", "3x²", "3x", "x³/3"],
    correct: 1
  },
  {
    category: "Dao ham",
    question: "d/dx (sin(x)) = ?",
    options: ["-cos(x)", "cos(x)", "sin(x)", "-sin(x)"],
    correct: 1
  },
  {
    category: "Dao ham",
    question: "d/dx (eˣ) = ?",
    options: ["xeˣ⁻¹", "eˣ", "eˣ⁺¹", "ln(x)"],
    correct: 1
  },
  {
    category: "Dao ham",
    question: "d/dx (ln(x)) = ?",
    options: ["x", "1/x", "ln(x)/x", "eˣ"],
    correct: 1
  },
  {
    category: "Dao ham",
    question: "d/dx (x² · sin(x)) = ?",
    options: ["2x·sin(x)", "x²·cos(x)", "2x·sin(x) + x²·cos(x)", "2x·cos(x)"],
    correct: 2
  },
  {
    category: "Dao ham",
    question: "Dao ham cua f(x) = √x la?",
    options: ["1/(2√x)", "2√x", "√x/2", "1/√x"],
    correct: 0
  },
  {
    category: "Tich phan",
    question: "∫ x² dx = ?",
    options: ["x³/3 + C", "2x + C", "x² + C", "ln(x)"],
    correct: 0
  },
  {
    category: "Tich phan",
    question: "∫ cos(x) dx = ?",
    options: ["-sin(x) + C", "sin(x) + C", "cos(x) + C", "tan(x) + C"],
    correct: 1
  },
  {
    category: "Tich phan",
    question: "∫ 1/x dx = ?",
    options: ["x² + C", "ln|x| + C", "-1/x² + C", "eˣ + C"],
    correct: 1
  },
  {
    category: "Tich phan",
    question: "∫ eˣ dx = ?",
    options: ["xeˣ + C", "eˣ + C", "eˣ/x + C", "ln(eˣ) + C"],
    correct: 1
  },
  {
    category: "Tich phan",
    question: "∫₀¹ 2x dx = ?",
    options: ["0", "1", "2", "1/2"],
    correct: 1
  },
  {
    category: "Tich phan",
    question: "∫ sin(x) dx = ?",
    options: ["cos(x) + C", "-cos(x) + C", "sin(x) + C", "-sin(x) + C"],
    correct: 1
  },
  {
    category: "Chuoi",
    question: "Tong chuoi Σ(n=0→∞) xⁿ hoi tu khi?",
    options: ["|x| < 1", "|x| > 1", "x > 0", "∀x"],
    correct: 0
  },
  {
    category: "Chuoi",
    question: "Σ(n=0→∞) 1/2ⁿ = ?",
    options: ["1", "2", "∞", "1/2"],
    correct: 1
  },
  {
    category: "Chuoi",
    question: "Chuoi Σ(n=1→∞) 1/n la chuoi gi?",
    options: ["Hoi tu", "Phan ky", "Dao dong", "Hoi tu co dieu kien"],
    correct: 1
  },
  {
    category: "Chuoi",
    question: "Khai trien Taylor cua eˣ tai x=0, he so cua x² la?",
    options: ["1", "1/2", "2", "1/3"],
    correct: 1
  },
  {
    category: "Ma tran",
    question: "Det |2 3; 1 4| = ?",
    options: ["5", "11", "8", "-5"],
    correct: 0
  },
  {
    category: "Ma tran",
    question: "Ma tran don vi I₂ co dang?",
    options: ["[[1,1],[1,1]]", "[[1,0],[0,1]]", "[[0,1],[1,0]]", "[[2,0],[0,2]]"],
    correct: 1
  },
  {
    category: "Ma tran",
    question: "Neu A la ma tran 2×3 va B la 3×4, thi A·B co kich thuoc?",
    options: ["2×4", "3×3", "2×3", "4×2"],
    correct: 0
  },
  {
    category: "Logarit",
    question: "ln(e²) = ?",
    options: ["e²", "2", "2e", "1/2"],
    correct: 1
  },
  {
    category: "Logarit",
    question: "log₁₀(1000) = ?",
    options: ["2", "3", "10", "100"],
    correct: 1
  },
  {
    category: "Logarit",
    question: "ln(1) = ?",
    options: ["1", "e", "0", "∞"],
    correct: 2
  },
  {
    category: "Logarit",
    question: "ln(a·b) = ?",
    options: ["ln(a) · ln(b)", "ln(a) + ln(b)", "ln(a) - ln(b)", "ln(a)/ln(b)"],
    correct: 1
  },
  {
    category: "Toi uu",
    question: "Ham f(x) = x² - 4x + 3 dat cuc tieu tai x = ?",
    options: ["0", "2", "3", "-2"],
    correct: 1
  },
  {
    category: "Toi uu",
    question: "f''(x) > 0 tai diem dung x₀ nghia la?",
    options: ["Cuc dai", "Cuc tieu", "Diem uon", "Khong xac dinh"],
    correct: 1
  },
  {
    category: "Toi uu",
    question: "Diem dung cua f(x) = x³ - 3x la?",
    options: ["x = 0", "x = ±1", "x = 3", "x = ±√3"],
    correct: 1
  },
  {
    category: "Toi uu",
    question: "Gia tri nho nhat cua f(x) = x² + 2x + 1 la?",
    options: ["0", "1", "-1", "2"],
    correct: 0
  },
  {
    category: "Toi uu",
    question: "Ham f(x) = -x² + 6x - 5 dat cuc dai tai x = ?",
    options: ["5", "3", "6", "1"],
    correct: 1
  }
];

function getRandomQuestion() {
  const pool = CALCULUS_QUESTIONS;
  return pool[Math.floor(Math.random() * pool.length)];
}
