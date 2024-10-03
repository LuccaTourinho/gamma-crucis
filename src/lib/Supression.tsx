import { 
    createContext, 
    useContext, 
    ReactNode, 
    useState, 
} from "react";

interface ISupressionProps {
    trees: number;
    updateTrees: (trees: number) => void;
    wood: number;
    updateWood: (wood: number) => void;
    tempeture: number;
    updateTempeture: (tempeture: number) => void;
    money: number;
    updateMoney: (money: number) => void;
}

const initialState = {
    wood: 0,
    trees: 100,
    tempeture: 25,
    money: 0,
  };

const SupressionContext = createContext<ISupressionProps | undefined>(undefined);

export const SupressionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [wood, setWood] = useState(initialState.wood);
    const [trees, setTrees] = useState(initialState.trees);
    const [tempeture, setTempeture] = useState(initialState.tempeture);
    const [money, setMoney] = useState(initialState.money);

    

    const updateWood = (wood: number) => {
        setWood(wood);
    };

    const updateTrees = (trees: number) => {
        setTrees(trees);
    };

    const updateTempeture = (tempeture: number) => {
        const roundedTempeture = Math.round(tempeture * 100) / 100; // Round to 2 decimal places
        setTempeture(roundedTempeture);
    };

    const updateMoney = (money: number) => {
        setMoney(money);
    };

    return (
        <SupressionContext.Provider
            value={{
                wood,
                updateWood,
                trees,
                updateTrees,
                tempeture,
                updateTempeture,
                money,
                updateMoney
            }}
        >
            {children}
        </SupressionContext.Provider>
    );
};

export const useSupression = (): ISupressionProps => {
    const context = useContext(SupressionContext);
    if (context === undefined) {
        throw new Error("useSupression must be used within a SupressionProvider");
    }

    return context;
}