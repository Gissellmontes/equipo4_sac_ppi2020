import React from "react";
import "../styles/Quiz1.css";
import { Preguntas1 } from "./Preguntas1";

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    myRespuesta: null,
    opciones: [],
    puntaje: 0,
    disabled: true,
    isEnd: false
  };

  mostrarQuiz1 = () => {
    this.setState(() => {
      return {
        pregunta: Preguntas1[this.state.currentQuestion].pregunta,
        respuesta: Preguntas1[this.state.currentQuestion].respuesta,
        opciones: Preguntas1[this.state.currentQuestion].opciones
      };
    });
  };

  componentDidMount() {
    this.mostrarQuiz();
  }

  nextQuestionHandler = () => {
    const { myRespuesta, respuesta, puntaje } = this.state;

    if (myRespuesta === respuesta) {
      this.setState({
        puntaje: puntaje + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          pregunta: Preguntas1[this.state.currentQuestion].pregunta,
          opciones: Preguntas1[this.state.currentQuestion].opciones,
          respuesta: Preguntas1[this.state.currentQuestion].respuesta
        };
      });
    }
  }

  checkAnswer = (respuesta) => {
    this.setState({ myRespuesta: respuesta, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === Preguntas1.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myRespuesta === this.state.respuesta) {
      this.setState({
        puntaje: this.state.puntaje + 1
      });
    }
  };
  render() {
    const { opciones, myRespuesta, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>Tu puntaje final es {this.state.puntaje} puntos </h3>
          {/*   <div>
                La respuesta correcta para las preguntas es
                <ul>
                  {Preguntas.map((item, index) => (
                    <li className="ui floating message options" key={index}>
                      {item.answer}
                    </li>
                  ))}
                </ul>
              </div> */}
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>{this.state.pregunta} </h1>
          <span>{`Preguntas ${currentQuestion}  de ${
            Preguntas1.length - 1
          } Restastes `}</span>
          {opciones.map((option) => (
            <p
              key={option.id}
              className={`ui floating message options
               ${myRespuesta === option ? "selected" : null}
               `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < Preguntas1.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Siguiente
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === Preguntas1.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Enviar Quiz
            </button>
          )}
        </div>
      );
    }
  }
}

export default Quiz;
