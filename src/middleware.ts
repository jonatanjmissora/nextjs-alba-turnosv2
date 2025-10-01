// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Lista de rutas que no deben ser redirigidas
const publicPaths = ["/api", "/_next", "/favicon.ico"];

// Rutas protegidas que requieren autenticación de administrador
const protectedAdminPaths = [
  "/admin",
  "/mobil/admin"
];

// Rutas de login para redireccionar según el dispositivo
const loginPaths = {
  desktop: "/admin/login",
  mobile: "/mobil/admin/login"
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const userAgent = request.headers.get("user-agent") || "";
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            userAgent,
        );

    // Verificar si la ruta actual es una ruta protegida de administración
    const isAdminPath = protectedAdminPaths.some(path => 
        pathname.startsWith(path) && 
        !pathname.includes("/login")
    );

    // Si es una ruta de administración protegida, verificar la cookie
    if (isAdminPath) {
        const isAdmin = request.cookies.get("admin")?.value === "true";
        
        if (!isAdmin) {
            // Redirigir al login correspondiente según el dispositivo
            const loginPath = isMobile ? loginPaths.mobile : loginPaths.desktop;
            const url = request.nextUrl.clone();
            url.pathname = loginPath;
            url.search = `?redirect=${encodeURIComponent(pathname)}`;
            return NextResponse.redirect(url);
        }
    }

    // Si la ruta ya está en /mobil o es una ruta pública, no hacemos nada
    if (
        pathname.startsWith("/mobil") ||
        publicPaths.some((path) => pathname.startsWith(path))
    ) {
        return NextResponse.next();
    }

    // Si es un dispositivo móvil, redirigir a /mobil
    if (isMobile) {
        // Asegurarnos de no duplicar /mobil en la ruta
        const newPathname = pathname.startsWith("/mobil")
            ? pathname
            : `/mobil${pathname}`;
        const url = request.nextUrl.clone();
        url.pathname = newPathname;
        return NextResponse.redirect(url);
    }

    // Para escritorio, redirigir a la versión sin /mobil
    if (pathname.startsWith("/mobil")) {
        const newPathname = pathname.replace(/^\/mobil/, "");
        const url = request.nextUrl.clone();
        url.pathname = newPathname || "/";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
