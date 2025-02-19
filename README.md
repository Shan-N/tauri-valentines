# Valentine's Tauri App

A beautiful **Valentine's-themed** desktop application built using **Tauri** and **Next.js**. Express love through interactive messages, animations, and personalized notes!

## Features
- ❤️ **Romantic UI**: A visually appealing Valentine's theme
- 💌 **Personalized Messages**: Send and save heartfelt notes
- ✨ **Animated Effects**: Smooth transitions and festive animations
- 📦 **Lightweight**: Efficient and optimized with Tauri

## Tech Stack
- **Tauri**: Lightweight, fast, and secure desktop app framework
- **Next.js**: React-based web framework for UI development
- **Tailwind CSS**: Beautiful styling with utility-first approach

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites/)

### Clone the Repository
```bash
git clone https://github.com/Shan-N/tauri-valentines.git .
```

### Install Dependencies
```bash
npm install  # or yarn install
```

### Run the App in Development Mode
```bash
npm run dev  # Starts Next.js
```

### Build and Run the Tauri App
```bash
npm run tauri dev
```

## Building for Production
To package the app as a standalone executable:
```bash
npm run tauri build
```
Find the generated build in the `src-tauri/target/release/` directory.

## Customization
- Modify `pages/index.tsx` for UI tweaks
- Customize styles in `styles/globals.css`
- Adjust Tauri settings in `src-tauri/tauri.conf.json`

## Contributing
Pull requests are welcome! Feel free to open an issue for feature requests or bug reports.

## License
This project is licensed under the [MIT License](LICENSE).

