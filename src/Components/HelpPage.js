import React from "react";
import ReactDOM from "react-dom";
import FAQ from "./FAQ";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <FAQ>
        <FAQ.QAItem>
          <FAQ.Question answerId="q1">
            {(isOpen, onToggle) => {
              return (
                <h1>
                  {isOpen ? "Open " : "Close "}
                  <span>What is Armando?</span>
                </h1>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q1"> Armando app is a network in charge of offering a private service,
                            through a mobile application which can be downloaded through
                            any electronic device. 
         </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q2">
            {(isOpen, onToggle) => {
              return (
                <h1>
                  {isOpen ? "Open " : "Close "}
                  <span>How does Armando work?</span>
                </h1>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q2"> This application connects all the people who are looking for a service in the construction area, with all the professionals in each specific area who are nearby to provide them with a service, this is because the bidders can only see a potential client when he is find close but not
                            They have information about him. 
          </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <h1>
                  {isOpen ? "Open " : "Close "}
                  <span>How is the process of a service with Armando?</span>
                </h1>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> A client registers and enters his data, searches for the type of service he wants (carpentry, plumbing, etc.), then arming him connects him with the people who offer this service in a radius close to his location, the provider, which in this case is the person offering the service must already be previously registered and with their current membership. The user will be able to see the qualifications and feedbacks of each person and thus be able to choose the one he wants and considers best, once he chooses the person he wants, the provider will receive a notification with the client's data and in this way he will be able to communicate with the client, they quote prices according to the work and at the end of the work the client has to give a rating and feedback from the person who performed the service. </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q4">
            {(isOpen, onToggle) => {
              return (
                <h1>
                  {isOpen ? "Open " : "Close "}
                  <span>What difference does armando have over other similar applications?</span>
                </h1>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q4"> Currently there is a wide variety of applications that offer services, for example mobility, food, shipping services, but the differentiation that Armando makes is that it is exclusively linked to the construction and related areas. 
         </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q5">
            {(isOpen, onToggle) => {
              return (
                <h1>
                  {isOpen ? "Open " : "Close "}
                  <span>Why is Armando born?</span>
                </h1>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q5"> Many times we have an arrangement or we need a service related to construction, for example we need someone to install an outlet for us and we do not know anyone who can do it and we end up hiring a person who recommended someone totally blindly without knowing any recommendation of their work, this has generated multiple disagreements with the people who request these services, creating economic and personal discomfort.
         </FAQ.Answer>
        </FAQ.QAItem>
        
      </FAQ>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
 export default App;