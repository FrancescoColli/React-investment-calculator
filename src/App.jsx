import Footer from "./components/footer";
import { useState } from "react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Log from "./components/Log";




function App() {

  const [outcome, setOutcome] = useState ([]);

  return (
    <main>
  <Header />
<Calculator onCalculate={setOutcome}/>
<Log outcome={outcome}/>
  <Footer />  
  </main>
  );
}

export default App
