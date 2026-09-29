import { useState } from "react";
import Rose from "./components/Rose";
import "./App.css";

function App() {
  const [giftOpened, setGiftOpened] = useState(false);

  const openGift = () => {
    setGiftOpened(true);
  };

  return (
    <main className={`birthday-page ${giftOpened ? "gift-opened" : ""}`}>
      {/* ==================================================
          PORTADA
      ================================================== */}

      <section className={`intro-scene ${giftOpened ? "scene-hidden" : ""}`}>
        {/* Corazones decorativos */}
        <div className="corner-decoration heart-top-left">♡</div>
        <div className="corner-decoration heart-top-right">♡</div>
        <div className="corner-decoration heart-middle-left">♡</div>
        <div className="corner-decoration heart-middle-right">♡</div>
        <div className="corner-decoration heart-bottom-left">♡</div>
        <div className="corner-decoration heart-bottom-right">♡</div>

        {/* Pétalos decorativos */}
        <div className="floating-petals" aria-hidden="true">
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </div>

        {/* Contenido principal */}
        <section className="hero">
          <div className="birthday-label">
            <span>✣</span>
            <p>Happy Birthday</p>
            <span>✣</span>
          </div>

          <h1>
            To My Beautiful
            <span>Girlfriend</span>
          </h1>

          <p className="subtitle">
            The love of my life, my best friend, my everything
          </p>

          <div className="main-heart">♥</div>

          <p className="description">
            Today is your special day, and I wanted to create something as
            unique and beautiful as you are.
          </p>

          <div className="actions">
            <button
              className="primary-button"
              onClick={openGift}
              type="button"
            >
              Explore Your Birthday Gift
              <span>♥</span>
            </button>
          </div>
        </section>
      </section>

      {/* ==================================================
          JARDÍN DE ROSAS
      ================================================== */}

      {giftOpened && (
        <section className="flower-scene">
          {/* Iluminación de fondo */}
          <div className="flower-glow" />

          {/* Destellos */}
          <div className="flower-sparkles" aria-hidden="true">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>

          {/* Mensaje */}
          <div className="flower-message">
            <p className="flower-eyebrow">For you, my love</p>

            <h2>
              Happy Birthday
              <span>Babe.</span>
            </h2>

            <p className="flower-copy">
              I could have bought you flowers... (I will)
              <br />
              but I'm a developer, so I coded them for you.
            </p>

            <p className="never-wilt">
              These flowers will never wilt. <span>♥</span>
            </p>
          </div>

          {/* Ramo */}
          <div className="garden" aria-hidden="true">
            {/* Capullo izquierdo */}
            <Rose
              className="rose-1"
              delay="0.1s"
              variant="bud"
            />

            {/* Rosa izquierda */}
            <Rose
              className="rose-2"
              delay="0.3s"
            />

            {/* Rosa principal */}
            <Rose
              className="rose-3"
              delay="0.5s"
            />

            {/* Rosa derecha */}
            <Rose
              className="rose-4"
              delay="0.7s"
            />

            {/* Rosa inferior izquierda */}
            <Rose
              className="rose-5"
              delay="0.9s"
            />

            {/* Rosa inferior derecha */}
            <Rose
              className="rose-6"
              delay="1.1s"
            />

            {/* Capullo derecho */}
            <Rose
              className="rose-7"
              delay="1.3s"
              variant="bud"
            />

            {/* Capullo central */}
            <Rose
              className="rose-8"
              delay="1.5s"
              variant="bud"
            />
          </div>
        </section>
      )}

      {/* ==================================================
          DEVELOPER DETAIL
      ================================================== */}

      <div
        className={`developer-detail ${
          giftOpened ? "developer-hidden" : ""
        }`}
      >
        Crafted with <span>♥</span> + React + Vite & an unreasonable amount of
        CSS
      </div>
    </main>
  );
}

export default App;