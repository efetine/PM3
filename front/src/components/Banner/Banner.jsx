import "./Banner.css";
export function Banner() {
  return (
    <div className="banner-rectangular">
      <div
        className="banner-content"
        style={{
          backgroundImage:
            "url(https://www.mydynamics.co.za/wp-content/uploads/2023/10/Mental-Health-Blog-Banner-1.jpg)",
        }}
      >
        <div className="banner-internal">
          <div className="banner-title">
            <h1>Bienvenido a Nuestra Clínica de Saud Mental</h1>
            <p className="banner-intro">
              La salud mental es una parte esencial de nuestro bienestar
              general. Aquí puedes encontrar ayuda profesional para mejorar tu
              bienestar emocional y mental.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
