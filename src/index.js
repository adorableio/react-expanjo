import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TEXT_INPUT = 'text';
const DROPDOWN_INPUT = 'dropdown';
const OPTION_SHAPE = PropTypes.shape({
  label: PropTypes.string,
  selected: PropTypes.bool,
  value: PropTypes.string
});

export default class Expanjo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      expanded: true,
      selectedProperty: null,
      selectedMatcher: 'is',
      selectedValue: null,
    };
  }

  static propTypes = {
    propertyInputType: PropTypes.oneOf(TEXT_INPUT, DROPDOWN_INPUT),
    propertyInputValues: PropTypes.arrayOf(OPTION_SHAPE),
    matcherInputType: PropTypes.oneOf(TEXT_INPUT, DROPDOWN_INPUT),
    matcherInputValues: PropTypes.arrayOf(OPTION_SHAPE),
    valueInputType: PropTypes.oneOf(TEXT_INPUT, DROPDOWN_INPUT),
    valueInputValues: PropTypes.arrayOf(OPTION_SHAPE),
  };

  static defaultProps = {
    propertyInputType: DROPDOWN_INPUT,
    propertyInputValues: [
      {label: 'Change me', selected: true, value: 'change-me'},
      {label: 'Change me 2', selected: false, value: 'change-me-2'},
    ],
    matcherInputType: DROPDOWN_INPUT,
    matcherInputValues: [
      {label: 'is', selected: true, value: 'is'},
    ],
    valueInputType: TEXT_INPUT,
  };

  generateOptions (options) {
    return options.map((opt, key) => (
      <option key={key} value={opt.value} selected={opt.selected}>{opt.label}</option>
    ));
  }

  handleChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(`${name} was changed to ${value}`);
  }

  render () {
    let property, matcher, value;

    if (this.state.expanded) {

      if (this.props.propertyInputType === TEXT_INPUT) {
        property = <input type='text' />
      } else {
        property = (
          <Select name='property' onChange={this.handleChange}>
            {this.generateOptions(this.props.propertyInputValues)}
          </Select>
        );
      }

    } else {
      // render collapsed control
    }

    return (
      <Wrapper>
        {property}
        {matcher}
        {value}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid red;
  border-radius: 5px;
`;

const Select = styled.select`
  background-color: red;
`;
