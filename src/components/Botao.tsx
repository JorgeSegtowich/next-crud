"use client";

interface BotaoProps {
    cor?: 'blue' | 'green' | 'gray';
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Botao({ children, cor = 'blue', className, onClick }: BotaoProps) {
    return (
        <button onClick={onClick} className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md cursor-pointer ${className}`}>
            {children}
        </button>
    );
}