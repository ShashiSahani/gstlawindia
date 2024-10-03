// utils/imageExtractor.ts

export const extractImagesFromHTML = (html: string): { images: string[]; sanitizedHTML: string } => {
    // Extract all image URLs from the HTML string
    const imgTags = html.match(/<img\s+[^>]*src="([^"]*)"[^>]*>/g);
    
    const images = imgTags ? imgTags.map(tag => {
      const match = tag.match(/src="([^"]*)"/);
      return match ? match[1] : '';
    }).filter(Boolean) : [];
  
    // Remove all <img> tags from the HTML string
    const sanitizedHTML = html.replace(/<img[^>]*>/g, '');
  
    return { images, sanitizedHTML };
  };
          