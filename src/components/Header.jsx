export default function Header() {
    return (
        <header className="bg-gov-primary py-4 px-6 shadow-md" role="banner">
            <div className="max-w-7xl mx-auto flex items-center gap-6">
                {/* Logo placeholders */}
                <div className="flex items-center gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded">
                        <span className="text-white text-sm font-medium">
                            Logo Policlínico San Luis
                        </span>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded">
                        <span className="text-white text-sm font-medium">
                            Logo Ministerio de Salud
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
