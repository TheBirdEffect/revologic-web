
interface ITextProps {
    size?: string;
    color?: string;
    weight?: string;
    bold?: boolean;
    italic?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const CustomText: React.FC<ITextProps> = ({className, children}) => {
    return (
        <p className={className}>{children}</p>
    );
}

