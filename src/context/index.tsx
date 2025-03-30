import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode
}

type DetailContextType = {
  detail: string,
  setDetail: React.Dispatch<React.SetStateAction<string>>
}

export const DetailContext = createContext<DetailContextType>({
  detail: "",
  setDetail: () => {}
});

const Context: React.FC<Props> = ({ children }) => {
  const [detail, setDetail] = useState<string>("");
  return (
    <DetailContext.Provider value={{ detail, setDetail }}>
      {children}
    </DetailContext.Provider>
  )
}

export default Context;
