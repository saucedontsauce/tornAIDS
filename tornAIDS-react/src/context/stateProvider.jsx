import stateContext from './stateContext.jsx';
import { useState, useRef, useEffect } from "react";
import items from '../util/items.json';
import fetchJSON from '../util/fetchJSON.js';
import formatProfileData from '../util/formatProfileData.js';
import mergeDisplays from '../util/mergeDisplays.js'

const StateContextProvider = ({ children }) => {
    const isInitialMount = useRef(true);
    const isInitialSpouseDataMount = useRef(true);
    const isInitialMyDataMount = useRef(true);
    const [key, setKey] = useState('');
    const [my_data, setMyData] = useState();
    const [spouse_data, setSpouseData] = useState();
    const [merged_display, setMergedDisplay] = useState();




    useEffect(() => {
        async function getData() {
            const mydata = await fetchJSON(`https://api.torn.com/user/?selections=profile,display,timestamp&key=${localKey}&comment=tornAIDS`)
            const formattedMyData = await formatProfileData(mydata)
            setMyData(formattedMyData)
            if (formattedMyData.married.spouse_id) {
                if (formattedMyData.married.spouse_id) {
                    const spousedata = await fetchJSON(`https://api.torn.com/user/${formattedMyData.married.spouse_id}?selections=profile,display,timestamp&key=${localKey}&comment=tornAIDS`)
                    const formattedSpouseData = await formatProfileData(spousedata)
                    setSpouseData(formattedSpouseData)
                }
            }
        }
        //Runs only on the first render
        const localKey = localStorage.getItem("key");
        const localMyData = localStorage.getItem("my_data");
        const localSpouseData = localStorage.getItem("spouseData");
        if (!localKey) {
        } else {
            setKey(localKey);
            if (!localMyData) {
                getData()
            } else if (!my_data) {
                setMyData(JSON.parse(localMyData));
                if (localSpouseData) {
                    setSpouseData(JSON.parse(localSpouseData));
                }
            } else if (my_data.timestamp <= (Math.floor(Date.now() / 1000) - 900)) {
                getData
            }
            var merged = mergeDisplays(my_data, spouse_data);
            setMergedDisplay(merged);
        }
    }, []);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const localKey = localStorage.getItem("key");
            if (key !== localKey) {
                console.log("key changed:", key)
                if (key === "") {
                } else {

                    localStorage.setItem("key", key)

                }
            }

        }
    }, [key]);

    useEffect(() => {
        if (isInitialMyDataMount.current) {
            isInitialMyDataMount.current = false;
        } else {
            const localMyData = localStorage.getItem("my_data");
            if (JSON.stringify(localMyData) !== JSON.stringify(my_data)) {
                console.log("my_data changed:", my_data)
                if (Object.keys(my_data).length === 0) {
                } else {
                    localStorage.setItem("my_data", JSON.stringify(my_data));
                    var merged = mergeDisplays(my_data, spouse_data);
                    setMergedDisplay(merged);
                }
            }

        }
    }, [my_data]);
    useEffect(() => {
        if (isInitialSpouseDataMount.current) {
            isInitialSpouseDataMount.current = false;
        } else {
            const localSpouseData = localStorage.getItem("spouse_data");
            if (JSON.stringify(localSpouseData) !== JSON.stringify(spouse_data)) {
                console.log("spouse_data changed:", spouse_data)
                if (Object.keys(spouse_data).length === 0) {
                } else {
                    localStorage.setItem("spouse_data", JSON.stringify(spouse_data));
                    var merged = mergeDisplays(my_data, spouse_data);
                    setMergedDisplay(merged);
                }
            }

        }
    }, [spouse_data])




    return <stateContext.Provider value={{ key, setKey, items, my_data, spouse_data, merged_display }} >
        {children}
    </stateContext.Provider>
};
export default StateContextProvider;