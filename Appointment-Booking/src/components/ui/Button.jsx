export default function Button({ children, className = "", ...props}){
    return (
        <button
        className={`px-4 py-2 rounded-mb font-medium transition ${className}`}
        {...props}
        >
            {children}
        </button>
    );
}