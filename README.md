# Interactive English Lesson Presentation 🌟

A colorful, interactive, and classroom-ready educational presentation designed specifically for Primary School English learners (8–11 years old). Built with modern web technologies, this presentation offers a seamless and engaging learning experience.

## ✨ Features

- **Interactive Navigation:** Smooth transitions between slides using mouse clicks, arrow keys, or touch navigation.
- **Child-Friendly Design:** Cheerful color palette, rounded shapes, soft shadows, and engaging emojis/icons to keep young learners focused.
- **Responsive Layout:** Perfectly adapts to desktop screens for classroom projectors and mobile screens for individual learning.
- **Image Integration:** Built-in image uploaders allowing teachers to seamlessly insert their own textbook images, story dialogues, and reading questions directly into the slides.
- **Gamified Elements:** Interactive vocabulary quizzes and a Kahoot! integration slide.

## 🖼️ How to Add Your Textbook Images

This presentation is designed to work with your existing teaching materials. You can add your textbook images in two ways:

### 1. Direct Upload in the App
On slides 4, 5, and 6, you will see a dashed placeholder area (or the default image). Simply click on it to upload the corresponding image from your device. The image will be saved **permanently** in your browser using IndexedDB, meaning it will persist even if you refresh or close the browser. You can replace an uploaded image by clicking it again, or delete it using the trash icon.

### 2. Add to the `public/images` Folder
To make the images permanent, you can upload them directly to the `public/images/` directory in your project files. Ensure the filenames match the following:

- **Slide 4 (Textbook Image):** `public/images/textbook-image-1.jpg` (or `.png`)
- **Slide 5 (Story Dialogue):** `public/images/story-dialogue.jpg` (or `.png`)
- **Slide 6 (Reading Questions):** `public/images/textbook-questions.jpg` (or `.png`)

*Note: The story dialogue image provided in your request has already been saved to `public/images/story-dialogue.jpg`.*

## 🚀 Technologies Used

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Motion (Framer Motion)** for smooth animations
- **Lucide React** for icons
