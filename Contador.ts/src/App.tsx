import './App.module.css';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [sentence, setSentence] = useState('');
  const [numberOfChars, setNumberOfChars] = useState(0);
  const [numberOfSentences, setNumberOfSentences] = useState(0);

  useEffect(() => {
    const size = sentence.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").length;
    setNumberOfChars(size);
  })

  useEffect(() => {                                            

    const size = sentence.split(/\s+/).length;
    setNumberOfSentences(size -1);
  })

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Contador de palavras</h1>
        <div className={styles.divSpace}>
          <span className={styles.spanStyle}>Digite uma frase abaixo</span>
        </div>
        <input className={styles.inputText} value={sentence}type="text" id="" onChange={(e) => setSentence(e.target.value)} placeholder='Digite aqui'/>
        <div className={styles.divSpace}>
          <span className={styles.spanStyle}>Quantidade de caracteres: </span>
          <span className={styles.spanStyle}>{numberOfChars}</span>
        </div>
        <div className={styles.divSpace}>
          <span className={styles.spanStyle}>Quantidade de palavras: </span>
          <span className={styles.spanStyle}>{numberOfSentences}</span>
        </div>
      </div>
    </>
  )
}

export default App;
