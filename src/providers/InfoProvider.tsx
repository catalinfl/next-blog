import { Dispatch, SetStateAction, createContext, useState } from "react";

export type Info = {
    name: string,
    email: string,
    image: string
}

export interface InfoContextInterface {
    info: Info,
    setInfo: Dispatch<SetStateAction<Info>>
}

type ProvideProps = {
    children: React.ReactNode
}

const defaultState = {
    info: {
        name: "",
        email: "",
        image: ""
    },
    setInfo: (info: Info) => {}
} as InfoContextInterface

export const InfoContext = createContext(defaultState)

export default function InfoProvider({ children }: ProvideProps) {

    const [info, setInfo] = useState<Info>({
        name: "",
        email: "",
        image: ""
    })

    return (
    <InfoContext.Provider value={{ info, setInfo }}>
        {children}
    </InfoContext.Provider>
    )
}