import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';
import type { ComponentProps } from 'react';

interface CloudinaryImageProps extends Omit<ComponentProps<'div'>, 'children'> {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Image({ publicId, alt, width, height, className, ...props }: CloudinaryImageProps) {
  const cldImage = new CloudinaryImage(publicId, { cloudName: 'dm2fsaaqj' })
    .setDeliveryType('upload');

  if (width) cldImage.resize().width(width);
  if (height) cldImage.resize().height(height);

  return (
    <div className={className} {...props}>
      <AdvancedImage
        cldImg={cldImage}
        plugins={[responsive(), placeholder()]}
        alt={alt}
      />
    </div>
  );
}