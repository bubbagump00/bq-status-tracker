import React from 'react';
import monocle from './../1f9d0.svg';
import expressionless from './../1f611.svg';
import mindblown from './../1f92f.svg';
import xeyes from './../1f635.svg';
import nerd from './../1f913.svg';
import party from './../1f973.svg';
import clapping from './../1f44f-1f3fc.svg';

const qualifyDate = new Date(2020, 0, 19);
const numVersesToQualify = 130;

function CalculatorResultLogo(props) {
  if (props.numVersesMemorized === '') {
    return <img src={monocle} className="App-logo" alt="moncole" />;
  }
  else if (props.numVersesMemorized ==0) {
    const numDaysUntilQualify = daysUntilQualify(qualifyDate);
    const versesToMemorizePerWeek = Math.ceil((numVersesToQualify-props.numVersesMemorized)/numDaysUntilQualify*7);
    return <img src={xeyes} className="App-logo" alt="xeyes" />;
  }
  else if (props.numVersesMemorized >=1 && props.numVersesMemorized <130) {
    const numDaysUntilQualify = daysUntilQualify(qualifyDate);
    const versesToMemorizePerWeek = Math.ceil((numVersesToQualify-props.numVersesMemorized)/numDaysUntilQualify*7);
    return <img src={nerd} className="App-logo" alt="nerd" />;
  }
  else if (props.numVersesMemorized < 0) {
    return <img src={expressionless} className="App-logo" alt="expressionless" />;
  }
  else if (props.numVersesMemorized >= 130 && props.numVersesMemorized <550) {
    return <img src={mindblown} className="App-logo" alt="mindblown" />;
  }
  else if (props.numVersesMemorized >= 550) {
    return <img src={clapping} className="App-logo" alt="clapping" />;
  }
  return <img src={monocle} className="App-logo" alt="moncole" />
}

function CalculatorResultText(props) {
  if (props.numVersesMemorized === '') {
    return null;
  }
  else if (props.numVersesMemorized >=0 && props.numVersesMemorized <130) {
    const numDaysUntilQualify = daysUntilQualify(qualifyDate);
    const versesToMemorizePerWeek = Math.ceil((numVersesToQualify-props.numVersesMemorized)/numDaysUntilQualify*7);
    return <p className="hot">You need to memorize {versesToMemorizePerWeek} verses per week to qualify for the tournament!</p>;
  }
  else if (props.numVersesMemorized < 0) {
    return <p className="normal">No. Just no. We're not doing this right now.</p>;
  }
  else if (props.numVersesMemorized >= 130 && props.numVersesMemorized <550) {
    return <p className="normal">...what is happening right now? Is this even real life? You qualified, kid.</p>;
  }
  else if (props.numVersesMemorized >= 550) {
    return <p className="normal">Congratulations, you're grounded for lying.</p>;
  }
  return null;
}

function daysUntilQualify(qualifyDate) {
    // One day Time in ms (milliseconds)
    const oneDayInMS = 1000 * 60 * 60 * 24;
    const presentDate = new Date();
    return Math.round(qualifyDate.getTime() - presentDate.getTime()) / (oneDayInMS);
  }

class VerseCalculator extends React.Component {

  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {numVersesMemorized: ''};
    }

  handleChange(e) {
      this.setState({numVersesMemorized: e.target.value});
    }

  render() {
    const numVersesMemorized = this.state.numVersesMemorized;
    return (
      <header className="App-header">
        <CalculatorResultLogo numVersesMemorized={numVersesMemorized} />
        <br />
        <h5>You need to memorize 130 verses by January 19, 2020 to qualify for the next tournament.</h5>
        <div>
          <fieldset>
            <legend>Enter the number of verses you have already memorized:</legend>
            <input
              value={numVersesMemorized}
              onChange={this.handleChange} />

            <CalculatorResultText numVersesMemorized={numVersesMemorized} />

          </fieldset>
        </div>
      </header>
    );
  }
}

export default VerseCalculator;
