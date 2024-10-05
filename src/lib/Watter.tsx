import{
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";

interface IWatterProps{
    money: number;
    updateMoney: (money: number) => void;
    quality: number;
    updateQuality: (quality: number) => void;
    death: number;
    updateDeath: (death: number) => void;
    days: number;
    updateDays: (days: number) => void;
    daysWithOutTreatment: number;
    updateDaysWithOutTreatment: (daysWithOutTreatment: number) => void;
    on: boolean;
    updateOn: (gameon: boolean) => void;
    gameover: boolean;
    updateGameOver: (gameover: boolean) => void;
}

const initialState = {
    money: 182500,
    quality: 10,
    death: 0,
    days: 1,
    daysWithOutTreatment: 0,
    on: true,
    gameover: false,
};

const WatterContext = createContext<IWatterProps | undefined>(undefined);

export const WatterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [money, setMoney] = useState(initialState.money);
    const [quality, setQuality] = useState(initialState.quality);
    const [death, setDeath] = useState(initialState.death);
    const [days, setDays] = useState(initialState.days);
    const [daysWithOutTreatment, setDaysWithOutTreatment] = useState(initialState.daysWithOutTreatment);
    const [on, setOn] = useState(initialState.on);
    const [gameover, setGameOver] = useState(initialState.gameover);

    const updateGameOver = (gameover: boolean) => {
        setGameOver(gameover);
    };

    const updateMoney = (money: number) => {
        setMoney(money);
    };
    const updateQuality = (quality: number) => {
        setQuality(quality);
    };
    const updateDeath = (death: number) => {
        setDeath(death);
    };
    const updateDays = (days: number) => {
        setDays(days);
    };
    const updateDaysWithOutTreatment = (daysWithOutTreatment: number) => {
        setDaysWithOutTreatment(daysWithOutTreatment);
    };
    const updateOn = (gameon: boolean) => {
        setOn(gameon);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDays((prevDays) => {
                const newDays = prevDays + 1;
                if (newDays >= 365) {
                    clearInterval(interval);
                    updateGameOver(true);
                }
                return newDays;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        
        if (!on) {
            setDaysWithOutTreatment((prevDays) => prevDays + 1);
            const deathsToAdd = calculateDeaths(daysWithOutTreatment);
            if (deathsToAdd > 0 && death < 50000) {
                setDeath((prevDeath) => prevDeath + deathsToAdd);
            }
        }else{
            setMoney((prevMoney) => prevMoney - 500);
        }
        
        
    }, [days]);

    const calculateDeaths = (daysWithoutTreatment: number) => {
        if (daysWithoutTreatment % 10 === 0 && daysWithoutTreatment > 0) {
            // Calculate exponential deaths based on the number of treatment days
            return Math.pow(3, daysWithoutTreatment / 10);
        }
        return 0;
    };

    return (
        <WatterContext.Provider
            value={{
                money,
                updateMoney,
                quality,
                updateQuality,
                death,
                updateDeath,
                days,
                updateDays,
                daysWithOutTreatment,
                updateDaysWithOutTreatment,
                on,
                updateOn,
                gameover,
                updateGameOver
            }}
        >
            {children}
        </WatterContext.Provider>
    );
}

export const useWatter = () => {
    const context = useContext(WatterContext);
    if (context === undefined) {
        throw new Error("useWatter must be used within a WatterProvider");
    }
    return context;
}
