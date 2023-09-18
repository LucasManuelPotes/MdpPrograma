/*declarion de componentes usando React (components)
1pro importar component desde react
2do declaracion en forma de class
3ro props datos que recibes del component padre
4to todo los hook que comienen con Use no funciona dentro del React.component
5to state setState*/

import { Component } from "react";



export default class Button extends Component{
    state = {
        nombre: "Juan",
        edad: 10 
    }

   handleChangeEdad = () => {
      this.setState({
        edad:40
      });
   }

   handleChangeName = (e) => {
    this.setState({
      nombre: e.target.value
    });
 }



 render(){
  return (<>
  {this.props.children}
          <h3>Hola {this.props.name} = {this.props.valor}</h3>
          <h4> El nombre: {this.state.nombre} Edad: {this.state.edad}</h4>
          <input value={this.state.nombre} onChange={this.handleChangeName} />
          <button onClick={this.handleChangeEdad}> Cambiar Datos</button>
          </>
  );
}
}