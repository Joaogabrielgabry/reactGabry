const Aluno = ({ nome, media, frequencia, cor, esporte }) => {
  var teste = undefined;

  return (
    <>
      <div style={{ backgroundColor: cor }}>
        <h2>{nome}</h2>
        <h3>Média: {media}</h3>
        <h3>Frequência: {frequencia}%</h3>
        <h3>Cor preferida: {cor}</h3>
        {teste ?? 'Ooops'}
        {esporte !== '' && <h3>Esporte: {esporte}</h3>}
      </div>
      <hr />
    </>
  );
};

export default Aluno;
