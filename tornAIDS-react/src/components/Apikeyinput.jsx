import { useState, useContext } from "react";
import stateContext from "../context/stateContext.jsx";
export default function Apikeyinput() {
    const { setKey } = useContext(stateContext)
    const [apiKey, setApiKeyS] = useState("");



    const handleApiKeySubmit = (key) => {
        setKey(key)
    }
    return (
        <form className="api-key-field" id="apikeyfield" onSubmit={(e) => { e.preventDefault(); handleApiKeySubmit(apiKey); }}>
            <input type="text" name="apikey" id="apikey" placeholder="API key" onChange={(e) => { setApiKeyS(e.target.value) }} />
            <button className="btn" type="submit">Add</button>
        </form>
    )
}