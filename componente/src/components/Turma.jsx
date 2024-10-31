const Turma = (props) => {
    return (
      <>
        <h1>Turma: {props.numero}</h1>
        {props.children}
      </>
    );
  };
  
  export default Turma;
  