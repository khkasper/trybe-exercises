import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setProfessionalValue } from '../redux/action/action';
import TextArea from '../components/TextArea';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/formdisplay');
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          name="curriculo"
          value={ curriculo }
          onChange={ this.handleChange }
        />

        <TextInput
          label="Cargo: "
          type="text"
          name="cargo"
          value={ cargo }
          onChange={ this.handleChange }
        />

        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          value={ descricao }
          onChange={ this.handleChange }
        />

        <Button
          label="Enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (valueAndName) => dispatch(setProfessionalValue(valueAndName)),
});
const mapStateToProps = (state) => ({
  professionalInputs: state.reducer.professionalInputs,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalForm);
