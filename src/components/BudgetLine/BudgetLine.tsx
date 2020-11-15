import React from "react";
import ToggleOff from "@material-ui/icons/ToggleOff";
import ToggleOn from "@material-ui/icons/ToggleOn";
import {Slider} from "@material-ui/core";
import {generateRange, monateryDisplay, NUMBER_STEPS} from "../../utils";

interface BudgetLineProps {
    min: number,
    max: number
}

interface BudgetLineState {
    sliderToggled: boolean
}

const defaultProps: BudgetLineProps = {
    min: 0,
    max: 1000
}

class BudgetLine extends React.Component<BudgetLineProps, BudgetLineState> {
    constructor(props: BudgetLineProps = defaultProps) {
        super(props);
        this.state = {
            sliderToggled: false
        }
    }
    toggleSlider = () => {
        this.setState({
            sliderToggled: !this.state.sliderToggled
        })
    }

    renderSlider() {
        const { min, max } = this.props;
        const marks = generateRange(min, max, NUMBER_STEPS).map( x => ({ label: monateryDisplay(x), value: x }))
        return (
            <Slider
                track={false}
                aria-labelledby="track-false-slider"
                getAriaValueText={monateryDisplay}
                defaultValue={30}
                valueLabelDisplay="on"
                marks={marks}
            />
        )
    }
    renderToggleButton() {
        const { sliderToggled } = this.state

        return (
            <button onClick={(e) => this.toggleSlider()}>
                { sliderToggled ? <ToggleOff /> : <ToggleOn /> }
            </button>
        )
    }
    render() {
        const { sliderToggled } = this.state
        return (
            <div className="budget-line">
                { sliderToggled ? this.renderSlider() : "" }
                { this.renderToggleButton() }
            </div>
        )
    }
}

export default BudgetLine;