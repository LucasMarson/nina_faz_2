import Link from "next/link";

export function Footer () {
    return (
        <div className="w-full py-3 items-center justify-center bg-[#80E1F7]">
            <div className="text-center">
                <span>
                    Desenvolvido por <Link href="https://lmsolution.com.br" target="_blank" className="text-[#3D5AD0]">LM Solution.</Link>
                </span>
            </div>
        </div>
    )
}