
interface TextWrapperProps {
    id?: string;
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    className?: string;
    children: React.ReactNode;
}

export const TextWrapper: React.FC<TextWrapperProps> = ({className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
}