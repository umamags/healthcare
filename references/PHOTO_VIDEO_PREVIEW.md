# Photo & Video Preview Feature

## Overview
A photo and video preview feature has been implemented for your healthcare app. When users click on photos or videos in question content, a modal preview opens displaying the media with zoom functionality for images and playback controls for videos.

## What Was Added

### 1. **MediaPreview Component** (`src/components/MediaPreview.jsx`)
A reusable modal component that displays images and videos with the following features:
- **Images**: Clickable to zoom in/out, displays alt text
- **Videos**: Autoplay with native HTML5 video controls
- **Close button**: Top-right corner button to close the preview
- **Keyboard support**: Press ESC to close the modal
- **Click outside**: Click outside the media to close (doesn't apply to close button area)
- **Responsive**: Scales to fit viewport with max height of 90vh

#### Features:
- **Image zoom**: Click on images to zoom in/out (cursor changes to indicate zoom mode)
- **Video controls**: Full HTML5 video player with play/pause/fullscreen/volume controls
- **Alt text display**: Shows descriptive text about the media at the bottom
- **Smooth transitions**: CSS transitions for zoom effects

### 2. **Updated QuestionDetail Component** (`src/pages/QuestionDetail.jsx`)
Enhanced the question detail page to:
- Import and use the MediaPreview component
- Manage selected media state
- Pass media click handler to markdown parser
- Render the preview modal when media is clicked

### 3. **Enhanced Markdown Parser**
Updated the markdown content parser to support image and video syntax:
- **Syntax**: `![alt text](image-or-video-url)`
- **Image formats supported**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`
- **Video formats supported**: `.mp4`, `.webm`, `.ogg`, `.mov`
- **Styling**: Images/videos are clickable buttons with hover effects
- **Video indicator**: Shows a play button overlay on video thumbnails

## How to Use

### Adding Images/Videos to Questions
Edit the `content` field in a question to include media using markdown syntax:

```markdown
![Patient being examined](https://example.com/image.jpg)

Some text here...

![Surgery video demonstration](https://example.com/surgery.mp4)
```

The parser automatically detects the file extension and renders accordingly:
- Images: Display as clickable image thumbnails
- Videos: Display with a play button overlay

### Examples in the Code
A sample image has been added to Question 1 to demonstrate the feature:
```markdown
![Sample patient journey diagram](https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80)
```

## User Interactions

### For Images:
1. User sees a clickable image thumbnail on the page
2. Clicking the image opens a modal preview
3. User can click the image again to zoom in/out
4. Close with ESC key, close button (✕), or by clicking outside the media
5. Alt text appears at the bottom of the preview

### For Videos:
1. User sees a video thumbnail with a play button overlay
2. Clicking opens the video in a modal preview
3. Full video player controls available (play, pause, fullscreen, volume)
4. Close with ESC key, close button (✕), or by clicking outside the media
5. Video description appears at the bottom

## Features

✅ **Keyboard Navigation**: ESC key closes the preview
✅ **Image Zoom**: Click to zoom in/out with visual feedback
✅ **Video Playback**: Full HTML5 video controls
✅ **Responsive Design**: Works on desktop and mobile
✅ **Accessibility**: Proper ARIA labels and semantic HTML
✅ **Touch Friendly**: Works with click and tap events
✅ **Visual Feedback**: Cursor changes, hover effects
✅ **Alt Text Support**: Descriptive captions for accessibility

## File Structure
```
src/
├── components/
│   └── MediaPreview.jsx          (New - Preview modal component)
├── pages/
│   └── QuestionDetail.jsx         (Updated - Added preview integration)
└── data/
    └── questions.js              (Updated - Added sample image)
```

## Testing the Feature

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Open the app** in your browser:
   - Navigate to `http://localhost:5173/healthcare/`

3. **Test the preview**:
   - Click on "What happens when I get sick?" question
   - Look for the patient journey image
   - Click the image to open the preview modal
   - Try zooming in/out by clicking the image in the preview
   - Click ESC or the close button (✕) to close

4. **Test with videos**:
   - Add a video to any question using: `![Description](video.mp4)`
   - Click the video to preview it
   - Use video player controls to play/pause

## Browser Compatibility
- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Adding Your Own Images/Videos

### From URLs:
Simply use external URLs in the markdown syntax:
```markdown
![Medical professionals discussing](https://example.com/healthcare-team.jpg)
```

### From Local Files:
Place files in your `public/` directory (create if it doesn't exist):
```markdown
![Local image](healthcare-process.png)
```

## CSS Classes Used
- `fixed inset-0 bg-black bg-opacity-75`: Full-screen dark overlay
- `rounded-lg`: Rounded corners for modal
- `max-w-4xl max-h-[90vh]`: Responsive sizing
- `transition-all`: Smooth animations for zoom

## Future Enhancements
- Add image gallery with arrows to navigate between multiple images
- Add lightbox effects with fade-in animation
- Support for image captions with custom formatting
- Lazy loading for better performance
- EXIF data display for medical images
- Screenshot capability within the modal

## Troubleshooting

**Preview not opening?**
- Check browser console for errors
- Ensure media file URLs are valid and accessible
- Verify image/video format is supported

**Images not displaying?**
- Check if URL is accessible (CORS issues with some URLs)
- Try hosting on a CORS-enabled service like Unsplash, Imgur, or your own domain
- Local files should be in the `public/` directory

**Video not playing?**
- Ensure video file format is supported (mp4, webm, ogg, mov)
- Check if video URL is accessible
- Verify browser supports the video codec
