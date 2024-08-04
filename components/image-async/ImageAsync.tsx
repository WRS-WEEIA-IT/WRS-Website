import Image from 'next/image';
import { ComponentProps } from 'react';

interface ImageAsyncProps extends Omit<ComponentProps<typeof Image>, 'src'> {
    src: Promise<string>;
}

const ImageAsync = async ({ src, alt, ...props }: ImageAsyncProps) => {
    const imageUrl = await src;

    return <Image src={imageUrl} alt={alt} {...props} />;
};

export default ImageAsync;
