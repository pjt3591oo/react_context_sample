import React, {useState, createContext, useContext} from 'react';
import LangPack from './LangPack'

const LangContext = createContext({lang: LangPack['kr']})

function Button({toggleLang}) {
  let lang = useContext(LangContext)

  return (
    <button onClick={toggleLang}>{lang === 'en'? '한국어': '영어'}로 바꾸기</button>
  )
}

function Title1() {
  let lang = useContext(LangContext)
  
  return (
    <h1>{lang.lang.title1}</h1>
  )
}

function Message1() {
  let lang = useContext(LangContext)
  return (
    <p>{lang.lang.message1}가 선택되었습니다.</p>
  )
}

function App() {
  let [ lang, setLang ] = useState('en')
  
  const toggleLang = () => {
    setLang(lang === 'en' ? 'kr' : 'en')
  }
  return (
    <div>
      <LangContext.Provider value={{lang: LangPack[lang]}}>
        <Button toggleLang={toggleLang}></Button>
        <Title1></Title1>
        <Message1></Message1>
      </LangContext.Provider>
    </div>
  )
}

export default App;
