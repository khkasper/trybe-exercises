import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPersonalValue } from '../redux/action/action';
import TextInput from '../components/TextInput';
import Select from '../components/Select';
import Button from '../components/Button';

const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
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
    history.push('/professionalForm');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;

    return (
      <fieldset>
        <TextInput
          label="Nome: "
          type="text"
          name="nome"
          value={ nome }
          onChange={ this.handleChange }
        />

        <TextInput
          label="E-mail: "
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />

        <TextInput
          label="CPF: "
          type="text"
          name="cpf"
          value={ cpf }
          onChange={ this.handleChange }
        />

        <TextInput
          label="Endereço: "
          type="text"
          name="endereco"
          value={ endereco }
          onChange={ this.handleChange }
        />

        <TextInput
          label="Cidade: "
          type="text"
          name="cidade"
          value={ cidade }
          onChange={ this.handleChange }
        />

        <Select
          label="Estado: "
          name="estado"
          value={ estado }
          id="estado"
          onChange={ this.handleChange }
          options={ estados }
          defaultOption="Selecione"
        />

        <Button type="button" label="Enviar" onClick={ this.handleSubmit } />
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (valueAndName) => dispatch(setPersonalValue(valueAndName)),
});
const mapStateToProps = (state) => ({
  personalInputs: state.reducer.personalInputs,
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
