import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode
}

type DetailContextType = {
  detail: string[] | null,
  setDetail: React.Dispatch<React.SetStateAction<string[] | null>>
  title: string | null,
  setTitle: React.Dispatch<React.SetStateAction<string | null>>
}

export const DetailContext = createContext<DetailContextType>({
  detail: null,
  setDetail: () => {},
  title: "",
  setTitle: () => {}
});

const Context: React.FC<Props> = ({ children }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [detail, setDetail] = useState<string[] | null>(null);
  return (
    <DetailContext.Provider value={{ detail, setDetail, title, setTitle }}>
      {children}
    </DetailContext.Provider>
  )
}

export default Context;
