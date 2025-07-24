import { useContext, useState } from 'react';
import stateContext from '../context/stateContext.jsx';

import SpouseCheckRow from './displaytable/SpouseCheckRow.jsx';
import EmptyCheckRow from './displaytable/SpouseCheckRow.jsx';


export default function DisplayTable() {
    const { merged_display, items, my_display, spouse_display } = useContext(stateContext);
    const [showSpouse, setShowSpouse] = useState(false);
    const [showEmpty, setShowEmpty] = useState(false);
    const [typeFilters, setTypeFilters] = useState(["Flower"])


    return (
        <div className="table-container">
            <SpouseCheckRow set={setShowSpouse} current={showSpouse} />
            <EmptyCheckRow set={setShowEmpty} current={showEmpty} />


            <div className="filter-container">
                <h2>Filter Items</h2>
                <div className="filter-options">
                    <div className="filter-group">
                        <h3>Categories</h3>
                        <div className="filter-item">
                            <input type="checkbox" id="flowers" name="flowers" value="Flower"></input>
                            <label htmlFor="flowers">Flowers</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" id="plushies" name="plushies" value="Plushie"></input>
                            <label htmlFor="plushies">Plushies</label>
                        </div>
                        <div className="filter-item">
                            <input type="checkbox" id="drugs" name="drugs" value="Drug"></input>
                            <label htmlFor="drugs">Drugs & Temps</label>
                        </div>
                    </div>
                </div>
            </div>

            <table>
                <thead>
                    <tr id="display-head">
                        <th>Item</th>
                        <th>Image</th>
                        <th>Location</th>
                        <th>You</th>
                        <th id="display-spouse-head">Spouse</th>
                        <th id="display-total-head">Total</th>
                    </tr>
                </thead>
                <tbody id="itemsContainer">
                </tbody>
            </table>

        </div>
    )


}