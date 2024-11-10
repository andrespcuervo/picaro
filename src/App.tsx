import React from 'react';
import { Image } from './components/Image';
import { Video } from './components/Video';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Your Site
        </h1>
        
        {/* Example usage of Image component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            publicId="your-image-public-id"
            alt="Description"
            className="rounded-lg shadow-lg overflow-hidden"
          />
          
          <Video
            publicId="your-video-public-id"
            className="rounded-lg shadow-lg overflow-hidden"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;