import { 
    createContext, 
    useContext, 
    ReactNode, 
    useState,
    useEffect, 
} from "react";

interface IMineProps {
    totalTaxes: number;
    updateTributes: (tributes: number) => void;
    days: number;
    contamination: number;
    updateContamination: (contamination: number) => void;
    naturalDisaster: number;
    updateNaturalDisaster: (naturalDisaster: number) => void;
    metalActives: number;
    updateMetalActives: (metalActives: number) => void;
    gameOver: boolean;
    gameOn: boolean;
}

const initialState = {
    totalTaxes: 0,
    days: 1,
    contamination: 0,
    naturalDisaster: 0,
    metalActives: 0,
    gameOver: false,
    gameOn: false,
}

const MineContext = createContext<IMineProps | undefined>(undefined);

export const MineProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [totalTaxes, setTotalTaxes] = useState(initialState.totalTaxes);
    const [days, setDays] = useState<number>(initialState.days);
    const [contamination, setContamination] = useState<number>(initialState.contamination);
    const [naturalDisaster, setNaturalDisaster] = useState(initialState.naturalDisaster);
    const [metalActives, setMetalActives] = useState(initialState.metalActives);
    const [gameOver, setGameOver] = useState(initialState.gameOver);
    const [gameOn, setGameOn] = useState(initialState.gameOn);
    const [randomNumber, setRandomNumber] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            if (gameOver) {
              clearInterval(interval); // Para o intervalo se gameOver for true
              return;
            }
        
            setDays((prevDays) => {
              if (prevDays < 365 && !gameOver) {
                return prevDays + 1;
              } else {
                clearInterval(interval);  
                setGameOn(true);
                return prevDays;
              }
            });
        
            setRandomNumber(Math.random() * 100);
            
          }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (randomNumber < naturalDisaster){
            setGameOver(true);
        }
    }, [days]);

    const updateTributes = (tributes: number) => {
        setTotalTaxes(totalTaxes + tributes);
    };

    const updateMetalActives = (metal: number) => {
        setMetalActives(metalActives + metal);
    }

    const updateNaturalDisaster = (disaster: number) => {
        setNaturalDisaster(disaster);
    }

    const updateContamination = (addContamination: number) => {
        setContamination(contamination + addContamination);
    }

    return (
        <MineContext.Provider value={{
            days, 
            totalTaxes,
            contamination,
            naturalDisaster,
            metalActives,
            updateTributes,
            gameOver,
            updateMetalActives,
            updateNaturalDisaster,
            gameOn,
            updateContamination
        }}>
            {children}
        </MineContext.Provider>
    )
};

export const useMine = () => {
    const context = useContext(MineContext);
    if (context === undefined) {
        throw new Error('useMine must be used within a MineProvider');
    }
    return context;
}