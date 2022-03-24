import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isLightTheme, setisLightTheme] = useState(true);

    const light = {syntax: '#555', ui:'#ddd', bg:'#eee'};

    const dark = {syntax: '#ddd', ui:'#333', bg:'#555'};

    const toggleTheme = () => {
        setisLightTheme(!isLightTheme);
    }

    return ( 
        <ThemeContext.Provider value={{isLightTheme, light, dark, toggleTheme:toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;





//import React, { createContext } from 'react';

//create context

//export const ThemeContext =createContext();

//create class Component

//class ThemeContextProvider extends React.Component {
    //state created in cc
    //state =  {
         //isLightTheme: true,
         //light: {syntax: '#555', //ui:'#ddd', bg:'#eee'},
         //dark: {syntax: '#ddd', //ui:'#333', bg:'#555'}   
 //   };

 //   toggleTheme = () => {
 //      this.setState({isLightTheme: !this.state.isLightTheme})
  //  }

    //render() { 
        
        //return (
            //state passed into themeContext
            //this.props.children refers to the children in which the theme context wraps #navbar and booklist.
            //the children are attached to the props
        //    <ThemeContext.Provider //value={{...this.state, toggleTheme: this.toggleTheme}}>
        //        {this.props.children}
        //    </ThemeContext.Provider>
//        )
//    }
//}
 
//export default ThemeContextProvider;