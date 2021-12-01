import logo from './logo.svg';
import './App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql
} from "@apollo/client";

// const client = new ApolloClient({
//   uri: 'http://localhost:9092/graphql',
//   cache: new InMemoryCache()
// });



function App() {

  // const Usuarios = () => {
  /* const user = { form };
  console.log("Usergql:", form); */
  const USUARIOS = gql`
      query {
        usuarios{
            nombre
            identificacion
            email
            perfil
            estado
          }
      }
  `;

  const cedula = 11223344

  //   const GET_DOG_PHOTO = gql`
  //   query Dog($breed: String!) {
  //     dog(breed: $breed) {
  //       id
  //       displayImage
  //     }
  //   }
  // `;

  const MIPERFIL = gql`
      query Usuario($identificacion: Int){
        usuario(identificacion:$identificacion){
            nombre
            identificacion
            email
            perfil
            estado
          }
      }
  `;


  /* const user = { form };
  console.log("Usergql:", form); */
  const CREARUSUARIO = gql`
      mutation 
      CreateUser($nombre:String,
                 $identificacion:Int,
                 $clave:String,
                 $perfil:String,
                 $email:String
                 )
      {
        createUser(
          user:{
            nombre:$nombre
            identificacion:$identificacion
            clave:$clave
            perfil:$perfil
            email:$email
          })
      }
  `;
  // const { loading, error, data} = useQuery(USUARIOS)

  // const { loading, error, data } = useQuery(MIPERFIL, {
  //   variables: { identificacion: cedula },
  // });
  // }

  const { loading, error, data } = useMutation(CREARUSUARIO, {
    variables: {
      nombre: "WiRaMi",
      identificacion: 124598789,
      clave: "dsfsdfg",
      perfil: "ESTUDIANTE",
      email: "wafinorecargado@hotmail.com"
    }
  })
  if (loading) return "<h1>Cargando</h1>"
  console.log("USUARIOS:", CREARUSUARIO);
  console.log("reponse servidor usuario creado:", data);

  // if (loading) return "<h1>Cargando</h1>"
  // console.log("USUARIOS:", USUARIOS);
  //console.log("data:", data1);
  //console.log("dataPerfil:", data);




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



      </header>
    </div>
  );
}

export default App;
