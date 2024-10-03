'use client';

import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsData } from '@/utils/api'; // Adjust the path as needed
import { extractImagesFromHTML } from '@/utils/imageExtractor';

interface NewsItem {
  NewsID: string;
  UserID: string;
  RefNo: string;
  Year: string;
  Volume: string;
  Page: string;
  Author: string;
  Journal: string;
  Type: string;
  Others: string;
  Title: string; // Assuming Title contains HTML with image tags
  profile: string; // You can use this if needed
}

const ProfileComponent: React.FC<{ item: NewsItem }> = ({ item }) => {
  const [sanitizedTitle, setSanitizedTitle] = useState<string>('');
  const [profileImages, setProfileImages] = useState<string[]>([]);

  useEffect(() => {
    if (item && item.Title) {
      const { images, sanitizedHTML } = extractImagesFromHTML(item.Title);
      setProfileImages(images);
      setSanitizedTitle(DOMPurify.sanitize(sanitizedHTML));
    }
  }, [item]);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>{item.Author}</h1>
      <p>Year: {item.Year}</p>
      <p>Ref No: {item.RefNo}</p>

      {/* Render all extracted profile images */}
      {profileImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${item.Author}'s profile ${index + 1}`}
          style={{ width: '200px', height: '165px', margin: '5px' }}
        />
      ))}

      {/* Display the sanitized title content without the images */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
    </div>
  );
};

const Page: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['newsData'],
    queryFn: fetchNewsData, // Fetch the news data
  });

  if (isLoading) return <p>Loading... ⏳</p>;
  if (error) return <p>Error loading data: {error.message} 😢</p>;

  return (
    <div>
      {data?.map((i: NewsItem, index: number) => (
        <ProfileComponent key={index} item={i} />
      ))}
    </div>
  );
};

export default Page;
