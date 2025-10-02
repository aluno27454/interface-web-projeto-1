function RegrasComponente({nome='', idade=0, email=''}){
    let tituloCalc;
    let mailCalc = "";
    let mensagemErroMail = "Mail inválido";
    let mensagemMailCorreto = "Mail válido";

    if (nome.includes('-')){
        const tituloArray = nome.split("-");
        if (tituloArray[1].length!=0){
            tituloCalc=tituloArray[1];
        }
    }

    if (email.includes('@')){
        debugger;
        const mailArray = email.split("@");
        if (mailArray[1].includes('.')){
            const linkArray = mailArray[1].split(".");
            if (linkArray[0].length!=0 && linkArray[1].length!=0)
                mailCalc=email;
        } 
    } 



    
    return<><hr/>
    {mailCalc}
    <br/>
    {mailCalc.length==0?mensagemErroMail:mensagemMailCorreto}
    <br/>
    {tituloCalc}
    </>
    

}
export default RegrasComponente;