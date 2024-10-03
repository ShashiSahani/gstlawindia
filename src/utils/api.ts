// utils/api.ts
export const fetchNewsData = async () => {
    const response = await fetch('https://greendesks.in/gstlaws/api/newsviews.php');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    return data.News; // Return the "News" array from the response
  };
  

