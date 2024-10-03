
import{
    createContext,
    useContext,
    ReactNode,
    useState,
    // useEffect
} from "react";

interface INuclearProps {
    trees: number;
    updateTrees: (trees: number) => void;
    cuttedTrees: number;
    updateCuttedTrees: () => void;
}

const initialState = {
    trees: 40,
    cuttedTrees: 0,
}

const NuclearContext = createContext<INuclearProps | undefined>(undefined);

export const NuclearProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [trees, setTrees] = useState(initialState.trees);
    const [cuttedTrees, setCuttedTrees] = useState(initialState.cuttedTrees);

    const updateTrees = (trees: number) => {
        setTrees(trees);
    }
    const updateCuttedTrees = () => {
        setCuttedTrees(cuttedTrees + 1);
    }

    return (
        <NuclearContext.Provider
            value={{
                trees,
                updateTrees,
                cuttedTrees,
                updateCuttedTrees,
            }}
        >
            {children}
        </NuclearContext.Provider>
    )
}


export const useNuclear = () => {
    const context = useContext(NuclearContext);
    if (context === undefined) {
        throw new Error('useNuclear must be used within a NuclearProvider');
    }
    return context;
}