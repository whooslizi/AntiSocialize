const ROAST_MESSAGES = [
  "Con chó này lại nghiện này",
  "Mới học 5 phút đã vào Facebook?",
  "Đồ dopamine addict",
  "Não mày đang bị short-form content phá hủy",
  "Mày mở TikTok lần thứ 37 hôm nay",
  "Lại vào đây à? Sách giáo khoa đang khóc kìa",
  "Mày nghĩ GPA tự lên à?",
  "Não mày đang smooth hơn trứng luộc rồi",
  "Deadline ngày mai mà mày đang ở đây?",
  "1 phút trên Reels = 1 điểm GPA bay đi",
  "Mày scroll được bao nhiêu thì điểm rớt bấy nhiêu",
  "Concentration span: đã hết",
  "Bố mẹ đang cày cuốc nuôi mày lướt mạng đó",
  "Mày đang contribute vào brainrot toàn cầu",
  "Thay vì mở Instagram, mở sách Giải tích đi",
];

const MOTIVATION_QUOTES = [
  "Stay hard! Đóng cái tab này lại!",
  "They don't know me, son. Mày cũng không biết mày ngu cỡ nào đâu.",
  "You're not gonna die from studying. Nhưng mày sẽ die từ cái GPA này.",
  "Con nhà người ta đang học, con mình đang xem meme",
  "Mày nghĩ người giỏi đang làm gì? Không phải xem Reels đâu.",
  "Thằng khác đang cày còn mày đang xem meme",
  "Bao giờ mày mới làm bố mẹ tự hào?",
  "Hồi đó bố mẹ đâu có Facebook mà vẫn đỗ đại học",
  "Mày không cần Facebook, mày cần kỷ luật",
  "Dopamine level: CRITICAL",
  "Mày lướt 1 tiếng = người khác giải xong 20 bài toán",
  "Attention span remaining: 3 seconds",
  "Nếu mày giỏi như mày nghĩ, giải bài Giải tích đi",
  "Mỗi lần mày vào đây, có 1 neuron chết đi",
  "GPA của mày đang cry for help",
];

const AI_JUDGE_MESSAGES = [
  "AI Judge: Mày không cần Facebook, mày cần kỷ luật",
  "AI Judge: Dopamine level critical - recommend immediate studying",
  "AI Judge: Scanning brain... brainrot detected at 87%",
  "AI Judge: Phân tích: Mày đang waste 99.7% potential",
  "AI Judge: Mày nên đổi nghề thành professional scroller",
  "AI Judge: IQ drop rate: 3 points per hour of scrolling",
  "AI Judge: Mày đang trở thành NPC phiên bản Việt Nam",
  "AI Judge: Bộ não mày đang gửi SOS signal",
  "AI Judge: Social media usage = academic self-destruction",
  "AI Judge: Predicted GPA based on screen time: 0.3",
];

const SCANNER_MESSAGES = [
  { scanning: "Đang quét kết quả học tập...", result: "GPA detected: nguy hiểm" },
  { scanning: "Scanning academic performance...", result: "Status: ĐANG TRƯỢT" },
  { scanning: "Analyzing brain activity...", result: "Brainrot level: EXTREME" },
  { scanning: "Kiểm tra dopamine levels...", result: "NGHIỆN NẶNG - cần cai ngay" },
  { scanning: "Đang đánh giá tương lai...", result: "Future: đang loading... rất chậm" },
];

const FBI_WARNINGS = [
  "CẢNH BÁO: Bộ Giáo dục đã phát hiện bạn đang trốn học!",
  "WARNING: Your academic record is being monitored!",
  "THÔNG BÁO: GPA của bạn đang ở mức báo động đỏ!",
  "FBI (Facebook Brain Inspector): Não bạn đã bị compromise!",
  "KHẨN CẤP: Phát hiện hành vi lướt mạng trong giờ học!",
];

const PUNISHMENT_MESSAGES = [
  "KHÔNG QUA MÔN GIẢI TÍCH THÌ KHÔNG ĐƯỢC XEM REELS",
  "SAI RỒI! Mày nghĩ Giải tích dễ à?",
  "TRƯỢT! Thêm 30 giây suy nghĩ về cuộc đời đi",
  "WRONG! GPA -0.5 (ảo nhưng đau thật)",
  "Mày không xứng đáng vào mạng xã hội",
];

const MEME_GIFS = [
  "https://media.tenor.com/NdyTDbwj2LIAAAAM/crying-dog.gif",
  "https://media.tenor.com/STjTuyHNVmwAAAAM/dog-crying-meme-doggo-crys.gif",
  "https://media.tenor.com/WPVDmrCGWlMAAAAM/soucis.gif",
  "https://media.tenor.com/3q5i3iBjLqQAAAAM/criying-dog-sad.gif",
  "https://media.tenor.com/Gvfyz2zkN4sAAAAM/crash-out.gif",
  "https://media.tenor.com/ZPJ9Cv3KiKwAAAAM/dog-crying-meme-doggo-crys.gif",
  "https://media.tenor.com/Nu77sMjXsX0AAAAM/pepe-why-pepe.gif",
  "https://media.tenor.com/SMSOQv36OH0AAAAM/pepe-hold.gif",
  "https://media.tenor.com/vbFbEEXZZvkAAAAM/pepocry-pepe.gif",
  "https://media.tenor.com/hMn2g7TfBpcAAAAM/pepe-sad-pepe-cry.gif",
  "https://media.tenor.com/xD5L-EvTKqIAAAAM/crying.gif",
  "https://media.tenor.com/pd4dz9_XgLsAAAAM/pepocry-pepe.gif",
  "https://media.tenor.com/5YrUft9OXfUAAAAM/bonk-doge.gif",
  "https://media.tenor.com/xwr8VeKiiEsAAAAM/bonk.gif",
  "https://media.tenor.com/vC9eFmx2a0wAAAAM/bonk-doge.gif",
  "https://media.tenor.com/zdcbh9URQCsAAAAM/bonk-doge.gif",
  "https://media.tenor.com/oHjfWJorYB8AAAAM/bonk.gif",
];

const RAGE_GIFS = [
  "https://media.tenor.com/xwr8VeKiiEsAAAAM/bonk.gif",
  "https://media.tenor.com/ieL54OVXn1UAAAAM/bonk-meme.gif",
  "https://media.tenor.com/Gvfyz2zkN4sAAAAM/crash-out.gif",
  "https://media.tenor.com/5YrUft9OXfUAAAAM/bonk-doge.gif",
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomRoast() {
  return getRandomItem(ROAST_MESSAGES);
}

function getRandomMemeGif() {
  return getRandomItem(MEME_GIFS);
}

function getRandomMotivation() {
  return getRandomItem(MOTIVATION_QUOTES);
}

function getRandomJudge() {
  return getRandomItem(AI_JUDGE_MESSAGES);
}
