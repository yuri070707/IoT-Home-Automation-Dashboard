# IoT Home Automation Dashboard

## プロジェクトの目的
このプロジェクトは、家庭内の温度と湿度をリアルタイムでモニタリングし、簡単に制御するためのダッシュボードを提供します。

## 使用技術
- フロントエンド: React
- バックエンド: Flask (Python)
- その他: GitHub、Git、HTML、CSS、JavaScript

## セットアップ方法
### 必要なもの
- Node.js
- Python
- Git

### クローンとセットアップ
1. リポジトリをクローンします:
    ```bash
    git clone https://github.com/yuri070707/IoT-Home-Automation-Dashboard.git
    cd IoT-Home-Automation-Dashboard
    ```

2. バックエンドのセットアップ:
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # Windowsでは `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. フロントエンドのセットアップ:
    ```bash
    cd ../frontend
    npm install
    ```

## 使い方
### バックエンドの起動
```bash
cd backend
source venv/bin/activate  # Windowsでは `venv\Scripts\activate`
python app.py






# Home Automation Dashboard

This project is a simple home automation dashboard that displays and updates temperature and humidity data.

## Technologies Used

- Frontend: React
- Backend: Flask
- State Management: React hooks (useState, useEffect)
- API Communication: fetch API
- CORS Handling: flask-cors

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
