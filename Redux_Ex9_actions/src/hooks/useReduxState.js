import {useContext, useEffect, useState} from "react";
import ReduxContext from "../contexts/ReduxContext";

export default function useReduxState(){
    const store = useContext(ReduxContext);
    const [state,setState] = useState(store.getState());

    useEffect(() => {
        const unsubsribe = store.subscribe(()=> {
            setState(store.getState());
        });
        return () => {
            unsubsribe();
        };
    }, [store]);

    return state;
}