
interface ITextProps {
    size?: string;
    color?: string;
    weight?: string;
    bold?: boolean;
    italic?: boolean;
    className?: string;
    align?: "left" | "right" | "center";
    children?: React.ReactNode;
    lineHeight?: string;
}

export const CustomText: React.FC<ITextProps> = ({className, children}) => {
    return (
        <p className={className}>{children}</p>
    );
}

