function OlaComponente({nome='', idade=0}) {

    let mensagemAviso;
    if (idade>100){
        mensagemAviso = <>Como estás vivo?</>
    }
    if (nome.length==0){
        mensagemAviso = <>Não tens nome?</>
    }

    return <>
    <hr/>
    Olá <b>{nome}</b> com idade <b>{idade}</b>
    <br/>
    {mensagemAviso}
    </>   
}

export default OlaComponente;