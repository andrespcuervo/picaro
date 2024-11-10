import { AdvancedVideo } from '@cloudinary/react';
import { CloudinaryVideo } from '@cloudinary/url-gen';
import type { ComponentProps } from 'react';

interface CloudinaryVideoProps extends Omit<ComponentProps<'div'>, 'children'> {
  publicId: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export function Video({ 
  publicId, 
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className,
  ...props 
}: CloudinaryVideoProps) {
  const cldVideo = new CloudinaryVideo(publicId, { cloudName: 'dm2fsaaqj' })
    .setDeliveryType('upload');

  return (
    <div className={className} {...props}>
      <AdvancedVideo
        cldVid={cldVideo}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
      />
    </div>
  );
}