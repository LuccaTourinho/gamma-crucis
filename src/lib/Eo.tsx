import{
    createContext,
    useContext,
    ReactNode,
    useState,
    // useEffect
} from "react";


interface IEoProps {
    trees: number;
    cuttedTrees: number;
    updateCuttedTrees: () => void;
    zone1: boolean;
    zone2: boolean;
    zone3: boolean;
    updateZ1: () => void;
    updateZ2: () => void;
    updateZ3: () => void;
}


export const EoContext = createContext<IEoProps>({} as IEoProps);


export const EoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //const [trees, setTrees] = useState(40);

    const trees = 40;
    const [cuttedTrees, setCuttedTrees] = useState(0);
    const [zone1, setZone1] = useState(false);
    const [zone2, setZone2] = useState(false);
    const [zone3, setZone3] = useState(false);

    const updateCuttedTrees = () => {
        setCuttedTrees(cuttedTrees+1);
    }

    const updateZ1 = () => {
        setZone1(true);
    }

    const updateZ2 = () => {
        setZone2(true);
    }

    const updateZ3 = () => {
        setZone3(true);
    }

    return (
        <EoContext.Provider
            value={{
                trees,
                cuttedTrees,
                updateCuttedTrees,
                zone1,
                zone2,
                zone3,
                updateZ1,
                updateZ2,
                updateZ3
            }}
        >
            {children}
        </EoContext.Provider>
    )
}


export const useEo = () => {
    const context = useContext(EoContext);
    if (context === undefined) {
        throw new Error('useEo must be used within a EoProvider');
    }

    return context;
}
