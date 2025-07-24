export default function ({ ...props }) {
    return (<div className="filter-container">
        <span>Show Spouse Data? :</span>
        <label className="checkbox_wrap">
            <input type="checkbox" name="spouse_checkbox" className="checkbox_inp" onChange={(e) => props.current ? props.set(false) : props.set(true)} />
            <span className="checkbox_mark"></span>
        </label>
    </div>)
}