import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      name: '',
      array: [],
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveData = this.saveData.bind(this);
    this.stateHandler = this.stateHandler.bind(this);
  }

  componentDidMount() {
    if (localStorage.namedDogURL) {
      stateHandler();
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevState) {
    const { data } = this.state;
    if (prevState.data !== data) {
      const dogBreed = data.message.split('/')[4];
      alert(dogBreed);
    }
  }

  stateHandler() {
    const parseStorage = JSON.parse(localStorage.namedDogURL);
    const lastDog = parseStorage[parseStorage.length - 1].message;
    this.setState({
      array: parseStorage,
      data: { message: lastDog },
    });
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }

  saveData() {
    const {
      data: { message },
      name,
      array,
    } = this.state;
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: '' });
    localStorage.setItem('namedDogURL', JSON.stringify(newArray));
  }

  render() {
    const { data, name } = this.state;
    if (data === '') return 'Loading...';
    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <input
            type="text"
            value={ name }
            onChange={ (e) => this.setState({ name: e.target.value }) }
            placeholder="digite o nome do doguinho"
          />
          <button type="button" onClick={ this.saveData }>Salvar doguinho!</button>
        </div>
        <div>
          <img src={ data.message } alt={ data.message } />
        </div>
      </div>
    );
  }
}

export default App;
