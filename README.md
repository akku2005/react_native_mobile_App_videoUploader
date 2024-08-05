# Video App

This repository contains the source code for a video app built with React Native. The app includes features like video uploads, playback, and a favorites system.

## Features

- **Video Upload:** Users can upload videos with titles, thumbnails, and AI prompts.
- **Video Playback:** Users can play videos with native controls.
- **Favorites System:** Users can add or remove videos from their favorites.
- **Responsive UI:** Designed with Tailwind CSS for responsive and adaptive layouts.

## Components

### `VideoCard`

The `VideoCard` component displays video details and allows users to play the video or interact with it through a popup menu.

#### Props

- `video`: An object containing video details like `title`, `thumbnail`, `videoUrl`, and `creator`.

#### Example

```jsx
import { VideoCard } from './components/VideoCard';

// Example video data
const video = {
  title: "Sample Video",
  thumbnail: "https://example.com/thumbnail.jpg",
  video: "https://example.com/video.mp4",
  creator: {
    username: "CreatorName",
    avatar: "https://example.com/avatar.jpg",
  },
};

<VideoCard video={video} />;
Create
The Create component allows users to upload videos. It includes fields for the video title, thumbnail, and AI prompt.

Home
The Home component displays a list of videos, including a section for the latest videos with a carousel effect.

1) Installation
Clone the repository:
git clone https://github.com/yourusername/video-app.git
cd video-app
2) Install dependencies:
npm install
3) Start the development server:
npm start

Usage
Running the App
Ensure you have Expo CLI installed.
Run npm start to start the development server.
Use the Expo Go app on your mobile device to scan the QR code and run the app.
Adding Videos
Navigate to the upload screen.
Fill in the video title, thumbnail, and AI prompt.
Submit the form to upload the video.
Managing Favorites
Use the menu button on the VideoCard component to add or remove videos from your favorites.
File Structure
.
├── components
│   ├── VideoCard.js
│   ├── Create.js
│   ├── Home.js
│   ├── EmptyState.js
│   ├── SearchInput.js
│   └── Trending.js
├── context
│   └── GlobalProvider.js
├── constants
│   └── icons.js
├── lib
│   ├── appwrite.js
│   └── useAppwrite.js
├── App.js
└── README.md
Contact
If you have any questions or feedback, please feel free to contact us at asakashsahu20@gmail.com

Feel free to customize the sections as needed, especially the contact information, repository URL, and any additional details specific to your project.

