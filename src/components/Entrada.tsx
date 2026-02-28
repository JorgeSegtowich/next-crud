"use client";

interface EntradaProps {
    tipo?: 'text' | 'number';
    texto: string;
    valor: any;
    className?: string;
    somenteLeitura?: boolean;
    valorMudou?: (valor: any) => void;
}

export default function Entrada({ tipo = 'text', texto, valor, className, somenteLeitura = false, valorMudou }: EntradaProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className="mb-2">{texto}</label>
            <input 
                type={tipo} 
                value={valor} 
                readOnly={somenteLeitura} 
                suppressHydrationWarning
                onChange={e => valorMudou?.(e.target.value)} 
                className={`border-2 border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 ${somenteLeitura ? '' : 'focus:bg-white'}
                `}/>
        </div>
    );
}