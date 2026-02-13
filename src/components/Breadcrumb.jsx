import { ChevronRight } from 'lucide-react'

export default function Breadcrumb() {
    return (
        <nav aria-label="Navegación de ruta" className="text-sm text-gov-text-secondary py-3">
            <ol className="flex items-center gap-2">
                <li>
                    <a href="/" className="hover:text-gov-primary transition-colors">
                        Inicio
                    </a>
                </li>
                <li aria-hidden="true">
                    <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                    <a href="/tramites" className="hover:text-gov-primary transition-colors">
                        Trámites
                    </a>
                </li>
                <li aria-hidden="true">
                    <ChevronRight className="w-4 h-4" />
                </li>
                <li aria-current="page" className="text-gov-text font-medium">
                    Discapacidad
                </li>
            </ol>
        </nav>
    )
}
