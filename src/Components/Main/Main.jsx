// Funcion Llave
//const Main = () => {
//}


const titleStyle = {
    color: 'white'
}

//Funcion Normal
function Main({name, age}){



    return(
        <>
            <h1 style={titleStyle}>
        
                Welcome, {name}
       
            </h1>
                
            <h3 style={{
                    color:'aqua'
                }}
            >
                {age}
                
            </h3>
        </>
    )
}


export default Main; 