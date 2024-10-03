import{
    createContext,
    useContext,
    ReactNode,
    useState,
    // useEffect
} from "react";

interface IHydroProps {
    trees: number;
    updateTrees: (trees: number) => void;
    cuttedTrees: number;
    updateCuttedTrees: (cuttedTrees: number) => void;
}


const initialState = {
    trees: 100,
    cuttedTrees: 0,
}

const HydroContext = createContext<IHydroProps | undefined>(undefined);

export const HydroProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [trees, setTrees] = useState(initialState.trees);
    const [cuttedTrees, setCuttedTrees] = useState(initialState.cuttedTrees);

    const updateTrees = (trees: number) => {
        setTrees(trees);
    }
    const updateCuttedTrees = (cuttedTrees: number) => {
        setCuttedTrees(cuttedTrees);
    }

    return (
        <HydroContext.Provider
            value={{
                trees,
                updateTrees,
                cuttedTrees,
                updateCuttedTrees
            }}
        >
            {children}
        </HydroContext.Provider>
    )
}

export const useHydro = () => {
    const context = useContext(HydroContext);
    if (context === undefined) {
        throw new Error('useHydro must be used within a HydroProvider');
    }
    return context;
}