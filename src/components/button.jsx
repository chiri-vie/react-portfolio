
export const Button = ({className="", size="medium", children}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium bg-burgundy-500 focus:outline-none focus:bg-burgundy-600 transition-colors duration-200 hover:bg-burgundy-600 hover:text-burgundy-50 focus:text-burgundy-50 text-burgundy-50";
    const sizeClasses = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg",
    };
    const Classes = `${baseClasses} ${sizeClasses[size]}`;
    return <button className={Classes}>
        <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>;
}