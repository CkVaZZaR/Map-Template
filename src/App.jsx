import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import Settings from "./components/Settings/Settings"; // Добавляем компонент настроек
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import "./styles/themes.css";

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`;

const MapWrapper = styled.div`
  flex: 1;
  display: block;
  // flex-direction: column;
  gap: 1rem;
`;

export default function App() {
  const [markers, setMarkers] = useState([]);
  const [tab, setTab] = useState("home");
  const [click, setClick] = useState(false);

  const handleConfirm = () => {
    console.log("Метки отправлены: " + JSON.stringify(markers));
  };

  async function handleClick(current) {
    setTab(current);
    setClick(true);
    await new Promise((resolve) => setTimeout(resolve, 1));
    setClick(false);
  }

  return (
    <Router className='data-theme'>
      <Header active={tab} />

      <Container>
        {tab === "account" && (
          <>
            <Profile />
            <MapWrapper>
              <Map
                onMarkerAdd={(marker) => setMarkers((p) => [...p, marker])}
              />
              <div className='centeralign'>
                <button className='confirmbtn' onClick={handleConfirm}>
                  Подтвердить
                </button>
              </div>
            </MapWrapper>
          </>
        )}

        {tab === "home" && <Home />}

        {tab === "settings" && <Settings />}
      </Container>

      <Footer
        active={tab}
        onChange={(current) => handleClick(current)}
        click={click}
      />
    </Router>
  );
}
