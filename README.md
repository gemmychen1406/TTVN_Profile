# Portfolio — Trần Thị Vân Ngọc

Website portfolio cá nhân của **Trần Thị Vân Ngọc**, sinh viên ngành An toàn thông tin định hướng **Malware Analysis**, **Reverse Engineering** và **Cybersecurity Research**.

Website giới thiệu thông tin cá nhân, học vấn, kỹ năng chuyên môn, dự án, chứng nhận và các hoạt động nổi bật. Giao diện được thiết kế theo phong cách cybersecurity hiện đại, hỗ trợ tốt trên cả máy tính và thiết bị di động.

## Demo

Sau khi triển khai, bạn có thể đặt đường dẫn website tại đây:

```text
https://ten-du-an.vercel.app
```

## Tính năng

- Giao diện portfolio một trang, responsive trên desktop và mobile.
- Điều hướng nhanh giữa các phần của website.
- Giới thiệu định hướng nghề nghiệp và thông tin học vấn.
- Trình bày kỹ năng lập trình, hệ điều hành, Reverse Engineering và Malware Analysis.
- Giới thiệu các dự án nghiên cứu nổi bật.
- Timeline hoạt động, cuộc thi và thành tích.
- Hiển thị chứng nhận và giải thưởng.
- Liên kết email, số điện thoại và GitHub.
- Sao chép nhanh địa chỉ email.
- Tải CV trực tiếp từ website.
- Tôn trọng thiết lập giảm chuyển động của hệ điều hành (`prefers-reduced-motion`).

## Công nghệ sử dụng

- [React](https://react.dev/) — xây dựng giao diện người dùng.
- [Vite](https://vite.dev/) — development server và công cụ build.
- [Lucide React](https://lucide.dev/) — bộ icon giao diện.
- CSS thuần — responsive layout, animation và thiết kế giao diện.
- [Vercel](https://vercel.com/) — hosting và tự động triển khai.
- [GitHub](https://github.com/) — lưu trữ và quản lý mã nguồn.

## Cấu trúc dự án

```text
web/
├── public/
│   ├── assets/
│   │   └── avatar.png
│   └── Tran-Thi-Van-Ngoc-CV.pdf
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Yêu cầu hệ thống

Trước khi cài đặt, máy cần có:

- [Node.js](https://nodejs.org/) phiên bản 20 trở lên.
- npm — được cài kèm theo Node.js.
- Git — cần thiết nếu muốn đưa mã nguồn lên GitHub.

Kiểm tra phiên bản đã cài:

```bash
node --version
npm --version
git --version
```

## Cài đặt và chạy trên máy

### 1. Tải mã nguồn

Nếu dự án đã có trên GitHub:

```bash
git clone https://github.com/TEN_GITHUB/van-ngoc-portfolio.git
cd van-ngoc-portfolio
```

Nếu đang sử dụng thư mục source có sẵn trên máy, mở Terminal hoặc PowerShell tại thư mục đó:

```powershell
cd "C:\Users\Admin\Downloads\web"
```

### 2. Cài dependency

```bash
npm install
```

### 3. Khởi động development server

```bash
npm run dev
```

Vite sẽ hiển thị địa chỉ truy cập, thông thường là:

```text
http://localhost:5173
```

Giữ Terminal hoạt động trong khi xem hoặc chỉnh sửa website.

## Build production

Tạo phiên bản tối ưu dùng để triển khai:

```bash
npm run build
```

Các file production sẽ được tạo trong thư mục `dist`.

Để kiểm tra bản production trên máy:

```bash
npm run preview
```

## Đưa mã nguồn lên GitHub

### 1. Tạo repository

1. Đăng nhập [GitHub](https://github.com/).
2. Chọn **New repository**.
3. Đặt tên repository, ví dụ `van-ngoc-portfolio`.
4. Chọn **Public** nếu muốn mọi người có thể xem mã nguồn.
5. Không cần tạo sẵn `README`, `.gitignore` hoặc license vì dự án đã có source.
6. Chọn **Create repository**.

### 2. Kiểm tra `.gitignore`

Dự án đã có file `.gitignore` tại thư mục gốc với nội dung:

```gitignore
node_modules/
dist/
.vercel/
.env
.env.*
!.env.example
.DS_Store
```

Không đưa `node_modules`, thư mục build hoặc file chứa thông tin bí mật lên GitHub.

### 3. Khởi tạo Git và push source

Chạy các lệnh sau tại thư mục dự án:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/TEN_GITHUB/van-ngoc-portfolio.git
git push -u origin main
```

Thay `TEN_GITHUB` bằng username GitHub và thay `van-ngoc-portfolio` nếu repository sử dụng tên khác.

Nếu Git yêu cầu cấu hình danh tính:

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

Sau đó chạy lại lệnh `git commit` và `git push`.

## Public website bằng Vercel

Vercel sẽ kết nối với GitHub, build dự án và cung cấp một đường dẫn công khai. Những lần push tiếp theo lên nhánh `main` sẽ tự động cập nhật website.

### 1. Import dự án

1. Truy cập [vercel.com](https://vercel.com/).
2. Chọn **Sign Up** hoặc **Log In** bằng tài khoản GitHub.
3. Cho phép Vercel truy cập repository cần triển khai.
4. Tại Dashboard, chọn **Add New → Project**.
5. Tìm repository `van-ngoc-portfolio` và chọn **Import**.

### 2. Kiểm tra cấu hình build

Vercel thường tự nhận diện Vite. Nếu cần nhập thủ công, sử dụng:

| Thiết lập | Giá trị |
| --- | --- |
| Framework Preset | `Vite` |
| Root Directory | `./` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Không cần thêm biến môi trường cho phiên bản hiện tại của website.

### 3. Triển khai

Chọn **Deploy** và chờ Vercel hoàn tất quá trình build. Sau khi thành công, website sẽ có địa chỉ dạng:

```text
https://van-ngoc-portfolio.vercel.app
```

Bạn có thể đổi tên miền `.vercel.app` trong phần **Project Settings → Domains** hoặc kết nối tên miền riêng.

## Cập nhật website sau khi đã deploy

Sau khi chỉnh sửa source, kiểm tra website trên máy và chạy build:

```bash
npm run dev
npm run build
```

Commit và push thay đổi lên GitHub:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel sẽ tự động tạo deployment mới. Khi build thành công, đường dẫn website hiện tại sẽ được cập nhật mà không cần deploy thủ công.

## Nội dung có thể chỉnh sửa

- Nội dung portfolio: `src/main.jsx`.
- Màu sắc, bố cục và responsive: `src/styles.css`.
- Ảnh đại diện: `public/assets/avatar.png`.
- File CV tải xuống: `public/Tran-Thi-Van-Ngoc-CV.pdf`.
- Tiêu đề và mô tả cho trình duyệt: `index.html`.

Khi thay CV, nên giữ nguyên tên file hoặc cập nhật lại đường dẫn trong `src/main.jsx`.

## Lưu ý trước khi public

Website đang hiển thị email, số điện thoại, vị trí, ảnh cá nhân và file CV. Hãy kiểm tra lại những thông tin bạn thực sự muốn công khai trước khi deploy.

Nếu repository là public, toàn bộ file trong repository — bao gồm CV — có thể được người khác tải xuống. Tuyệt đối không commit mật khẩu, API key, access token hoặc thông tin đăng nhập.

## Liên hệ

- **Họ tên:** Trần Thị Vân Ngọc
- **Email:** [gemmychen0611hd@gmail.com](mailto:gemmychen0611hd@gmail.com)
- **GitHub:** [github.com/gemmychen1406](https://github.com/gemmychen1406)
- **Định hướng:** Malware Analysis, Reverse Engineering và Cybersecurity Research

---

Nếu thấy dự án hữu ích, bạn có thể đánh dấu ⭐ repository trên GitHub.
