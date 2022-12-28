import styled from 'styled-components'
import MainPage from "./MainPage"
import NewsPage from './NewsPage';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    margin: auto;
    background-color: aliceblue;
`


  return (
    <Wrapper>
      <Routes>
        <Route>
            <Route index element={<MainPage />} />
            <Route path="Hsinchu" element={<NewsPage />} />
        </Route>
      </Routes>
    </Wrapper>
  )
}

export default App;
