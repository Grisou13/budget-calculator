import { render } from "@testing-library/react";
import React from "react";

interface IncomeInterface {
    rows: [number];
    onIncomeChange: ( rows: [number] ) => void
}

class Income extends React.Component<IncomeInterface> {
    constructor(props: IncomeInterface){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(newRows){
        this.props.onIncomeChange(newRows)
    }
    addRow( type ){
        
    }
    render(){
        return (
            <div>
                <p>Expenses</p>
                <button>+</button>
            </div>
        )
    }
}

export default Income;