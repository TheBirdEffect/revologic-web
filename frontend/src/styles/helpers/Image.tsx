interface ImageProps {
    weight?: string;
    height?: string;
    padding?: string;
    objectFit?: string;
    src?: string;
    alt?: string;
    className?: string;
    children?: React.ReactNode;
    hasGradient?: boolean;
}

export const CustomImage: React.FC<ImageProps> = ({className, src, alt}) => {
    return (
        <img className={className} src={src} alt={alt}/>
    );
}
    