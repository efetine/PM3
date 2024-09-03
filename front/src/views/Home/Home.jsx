import React from "react";
import "./Home.css";
import { Banner } from "../../components/Banner/Banner";

export function Home() {
  return (
    <>
      <Banner />
      <div className="home-background">
        <div className="home-container">
          <div className="internal-section">
            <h1>Conoce sobre tu salud mental </h1>
            <div className="internal-item hover-shadow">
              <img
                src="https://www.lasalle.edu.co/wcm/connect/f9125da4-9168-4666-a1d3-cf572e52d9af/Banner-El-arte-de-cuidar-tu-salud-mental+1.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f9125da4-9168-4666-a1d3-cf572e52d9af-oHtpAzG"
                alt="Consejo 1"
                className="image"
              />
              <div className="internal-item-content">
                <h2>Consejo de Salud Mental</h2>
                <p>
                  Mantén una rutina diaria que incluya ejercicio físico, buena
                  alimentación y tiempo para el descanso y la relajación. La
                  práctica regular de estas actividades puede ayudarte a reducir
                  el estrés y mejorar tu bienestar general.
                </p>
              </div>
            </div>

            <div className="internal-item hover-shadow">
              <img
                src="https://ayuda-psicologica-en-linea.com/wp-content/uploads/2016/01/mejorar-salud-mental.png"
                alt="Importancia de la salud mental"
                className="image"
              />
              <div className="internal-item-content">
                <h2>Importancia de la Salud Mental</h2>
                <p>
                  El cuidado de la salud mental es crucial para llevar una vida
                  equilibrada y plena. Una buena salud mental nos permite
                  enfrentar los desafíos de la vida, mantener relaciones
                  saludables y experimentar la vida de manera más satisfactoria.
                </p>
              </div>
            </div>

            <div className="internal-item hover-shadow">
              <img
                src="https://i0.wp.com/reportarsinmiedo.org/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-19-at-17.45.32.jpeg?resize=1167%2C613&ssl=1"
                alt="Beneficios de la Terapia"
                className="image"
              />
              <div className="internal-item-content">
                <h3>Beneficios de la Terapia</h3>
                <p>
                  La terapia puede ayudarte a comprender mejor tus emociones,
                  mejorar tus habilidades de comunicación y aprender técnicas
                  para gestionar el estrés. Es una herramienta efectiva para el
                  crecimiento personal y el desarrollo emocional, permitiéndote
                  enfrentar desafíos de manera saludable.
                </p>
              </div>
            </div>

            <div className="internal-item hover-shadow">
              <img
                src="https://enaltavoz.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-19-at-17.43.25.jpeg"
                alt="Mindfulness y Meditación"
                className="image"
              />
              <div className="internal-item-content">
                <h3>Mindfulness y Meditación</h3>
                <p>
                  Practicar mindfulness y meditación no solo reduce el estrés,
                  sino que también mejora la concentración y la claridad mental.
                  Estas prácticas fomentan un estado de calma, ayudan a regular
                  las emociones y promueven un enfoque más consciente y positivo
                  hacia la vida.
                </p>
              </div>
            </div>

            <div className="internal-item hover-shadow">
              <img
                src="https://blogs.iadb.org/desarrollo-infantil/wp-content/uploads/sites/18/2019/11/SPH_Blog_PP_NOV2019-05-POST_PP_POSTEO.png"
                alt="Importancia del Sueño"
                className="image"
              />
              <div className="internal-item-content">
                <h3>Importancia del Sueño</h3>
                <p>
                  Un buen descanso es esencial para la salud mental y física.
                  Dormir lo suficiente ayuda a regular el estado de ánimo,
                  mejora la memoria y la capacidad de aprendizaje, y fortalece
                  el sistema inmunológico, contribuyendo a un bienestar
                  integral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
