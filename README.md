# 💸 PaySmart – Financial Stability Coach

**Live Demo:** [https://paysmart-delta.vercel.app](https://paysmart-delta.vercel.app)  
**YouTube Demo:** *(Coming Soon — add your video link here)*  

---

## 🧭 Overview

PaySmart helps users with irregular income plan their bill payments smartly — predicting when to pay bills based on income dates to avoid overdrafts or late fees.

This project was built entirely using open-source technologies and deployed on Vercel (free tier) for hackathon submission purposes.

---

## 🚀 Features

### 🏠 Home Page
- Add and manage income entries (amount, date, description)
- Add and manage bill entries (bill name, amount, due date)
- View added entries in clean tables
- One-click “Generate Schedule” button to calculate optimal payment dates

### 🧮 Smart Scheduling (Core Logic)
- Matches each bill with the latest income before its due date
- Marks each bill as:
  - ✅ Safe — Income available before due date
  - ⚠️ Risk — No income before due date
- Saves results to LocalStorage (`scheduleData`)

### 📅 Schedule Page
- Displays generated schedule in a responsive table:
  | Bill | Due Date | Recommended Pay Date | Status |
- Color‑coded statuses:
  - 🟢 Safe → Green
  - 🟠 Risk → Orange
- Navigation buttons:
  - Back to Home
  - View Impact Summary

### 💡 Impact Summary Page
- Displays:
  - Total Safe Bills
  - Total At‑Risk Bills
  - Estimated savings (`₹500 × Safe Bills`)
- Includes a progress bar or simple visual indicator (built using Tailwind)
- Buttons for navigation between pages

### 💾 Data Persistence
- All user data (incomes, bills, schedules) stored using browser LocalStorage
- Includes Clear All Data option on the Home page

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite + TypeScript) |
| Styling | Tailwind CSS |
| Routing | React Router |
| Data Storage | Browser LocalStorage |
| Deployment | Vercel (Free Tier) |
| Version Control | GitHub (Public Repo) |
| License | MIT |

---

## 📁 Project Structure

```
paysmart/
│
├── src/
│   ├── components/
│   │   ├── IncomeForm.tsx
│   │   ├── BillsForm.tsx
│   │   ├── ScheduleTable.tsx
│   │   └── ImpactSummary.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Schedule.tsx
│   │   └── Impact.tsx
│   ├── utils/
│   │   └── scheduler.ts
│   ├── App.tsx
│   └── index.tsx
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── README.md
└── LICENSE
```

---

## ⚙️ Setup Instructions

1. **Clone this repository**
   ```
   git clone https://github.com/azmil666/paysmart.git
   cd paysmart
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Start development server**
   ```
   npm run dev
   ```

4. **Open in browser**  
   [http://localhost:3000](http://localhost:3000)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License — see the LICENSE section below for details.

—-

## 📄 LICENSE

MIT License

Copyright (c) 2025 <Your Name>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
