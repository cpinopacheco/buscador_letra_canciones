import Formulario from "./Formulario";
import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Letra from "./Letra";
import Spinner from "./Spinner";

const AppLetras = () => {
  const { alerta, letra, cargando } = useLetras();

  return (
    <>
      <header>Búsqueda de letras de canciones</header>
      <Formulario />
      <main>
        {/* operador ternario con triple evaluación */}
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : cargando ? (
          <Spinner />
        ) : (
          <p className="text-center">Busca letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
