import { createContext, useContext } from "react"

// Contexto para el CustomSheet
interface CustomSheetContextValue {
    closeSheet: () => void
}

export const CustomSheetContext = createContext<CustomSheetContextValue | undefined>(
    undefined
)

export const useCustomSheet = (): CustomSheetContextValue => {
  const context = useContext(CustomSheetContext)
  if (!context) {
    throw new Error(
      "useCustomSheet must be used within a CustomSheetContext provider"
    );
  }
  return context
}
