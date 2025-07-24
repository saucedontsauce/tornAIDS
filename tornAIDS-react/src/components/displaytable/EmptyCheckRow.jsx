export default function ({ ...props }) {
    return (<div className="filter-container">
        <span>Show Empty Data? :</span>
        <label className="checkbox_wrap">
            <input type="checkbox" name="empty_checkbox" className="checkbox_inp" onChange={(e) => props.current ? props.set(false) : props.set(true)} />
            <span className="checkbox_mark"></span>
        </label>
    </div>)
}