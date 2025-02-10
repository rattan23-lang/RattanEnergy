export function getImageUrl(driveUrl: string) {
    // If it's not a Google Drive URL, return as is
    if (!driveUrl.includes('drive.google.com')) {
      return driveUrl;
    }
  
    // Extract the file ID from the URL
    const fileId = driveUrl.split('id=')[1];
    if (!fileId) return driveUrl;
  
    // Construct the direct download URL
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }