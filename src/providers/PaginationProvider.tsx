"use client"
import { Dispatch, SetStateAction, createContext, useState } from "react";


type PaginationContext = {
    page: number,
    setPage: Dispatch<SetStateAction<any>>
}

type PaginationProvideProps = {
    children: React.ReactNode
}

const defaultPagination = {
    page: 1,
    setPage: (page: number) => {}
} as PaginationContext

export const PaginationContext = createContext(defaultPagination);

export const PaginationProvider = ({ children }: PaginationProvideProps) => {
    
    const [page, setPage] = useState<number>(1)
    
    return (
        <PaginationContext.Provider value={{page, setPage}}>
            {children}
        </PaginationContext.Provider>
    )
}