'use client'

import { Share2 } from 'lucide-react';

export default function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } catch (error) {
        // User cancelled sharing or error occurred
        if (error.name !== 'AbortError') {
          console.log('Error sharing:', error);
        }
      }
    } else {
      // Fallback to copying URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        // Better user feedback
        const button = document.activeElement;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      } catch (error) {
        console.log('Error copying to clipboard:', error);
        alert('Link copied to clipboard!');
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors"
      aria-label="Share this page"
      title="Share this page"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  );
}
