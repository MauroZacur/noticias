import React ,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listado from './components/Listado';


function App() {




  const [categoria, setCategoria]= useState('');
  const [noticias,setNoticias]= useState ([]);

  useEffect(() => {


    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=81d8d3c5798547439f1b85ab2897bedc`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      


      setNoticias(noticias.articles);
    }

    consultarAPI();
  }, [categoria]);


  return (
    <Fragment>
        <Header
          titulo = "Noticias"
        />

      <div className="container white">
            <Formulario
              setCategoria={setCategoria}
            ></Formulario>

            <Listado
              noticias = {noticias}
            />
      </div>
    </Fragment>
   
  );
}

export default App;
