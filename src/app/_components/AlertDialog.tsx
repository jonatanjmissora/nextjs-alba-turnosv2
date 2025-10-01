import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  export function AlertDialogComponent( {children}: {children: React.ReactNode} ) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild className="cursor-pointer h-full w-full p-4">
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#333] text-balance">¿ Albana, estas segura de eliminar este turno ?</AlertDialogTitle>
            <AlertDialogDescription>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="tracking-wider font-semibold bg-pink-50/80" >Cancelar</AlertDialogCancel>
            <AlertDialogAction className="tracking-wider font-semibold bg-black/80 shadow" onClick={() => {console.log("SIIIIIIIIIIIII")}}>Confirmar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }