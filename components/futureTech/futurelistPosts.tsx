/* eslint-disable @next/next/no-img-element */
// components/NewsList.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DateFormatter from '../dateFormat';
import Article from '../../interface/type';

interface Props {
  articles: Article[];
}

const FutureListPosts: React.FC<Props> = ({ articles }) => {
  return (
    <div className='font-bebas-neue w-2/3' >
      <h2 className='text-2xl font-bold tracking-tight md:tracking-tighter leading-tight ml-5 mb-2 mt-2'>Bài viết khác</h2>
      <nav>
        <ul>
          {articles.map((article) => (
            <li key={article.url}>
              <Link className='hover:text-blue-700' href={article.url}>
                <div className='flex'>
                  <img className='mb-10 ml-4 h-40' src={article.urlToImage} alt="ImageCover" width={"250"} />
                  <div className='pl-5'>
                    <h3 className=' font-bold line-clamp-2'>{article.title}</h3>
                    <DateFormatter dateString={article.publishedAt} />
                    <p className='text-gray-400 text-sm line-clamp-3'>{article.content}</p>
                  </div>
                </div>
              </Link>
            </li>

          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FutureListPosts;

