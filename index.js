function simular()
{
    
    // Informacoes do emprestimo
    let vrestsj = document.querySelector('form.white-part div input.input-valor').value;
    let vsal = document.querySelector('form.white-part div input.input-salario').value;
    var selec_jur = document.getElementById('escolha_juros');
    var vjur = selec_jur[selec_jur.selectedIndex].value;

    // Teste de preenchimento campo Juros
    if (vrestsj == "")
    {
        console.log("Favor preencher o campo \'Valor para Empréstimo\'..");
        return (0);
    }
    if (vsal == "")
    {
        console.log("Favor preencher o campo \'Salário\'..");
        return (0);
    }
    if (vjur == "")
    {
        alert("ATENÇÃO!!\n\nFavor preencher o campo \'Juros\'..");
        event.preventDefault();
        return (0);
    }

    // Transformacao para inteiro
    vrestsj = parseFloat(vrestsj);
    vsal = parseFloat(vsal);
    vjur = parseFloat(vjur);

    // Declaracao de Variaveis
    let vrestcj = +vrestsj * (1 + +vjur);
    let emprestvmax = +vrestsj / +vsal;
    let vmesformat;
    let vmes = 0;
    let vmaxmes;
    let i = 1;

    // Teste de viabilidade
    if (vjur == 0.2) {
        vmaxmes = 3.3255;
    }
    else if (vjur == 0.25) {
        vmasxmes = 2.95142;
    }
    else if (vjur == 0.3) {
        vmaxmes = 2.642745;
    }
    else {
        alert("ERROR!\n\nValor inválido para juros..");
        return (0);
    }
    if (emprestvmax > vmaxmes)
    {
        alert("Não foi possível completar esta ação, pois a simulação ultrapassa o quantitativo de 6 meses de parcelas.\n\nAumente o valor de \'Salário\' ou diminua o campo \'Valor para Emprestimo\'!");
        return (0);
    }

    // Geracao das parcelas
    while (vrestcj != 0)
    {
        if (vrestcj <= vsal)
        {
            vmes = vrestcj;
            vrestcj = 0;
            vmesformat = vmes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            document.getElementById("input-mes" + i).value = vmesformat;
        }
        else
        {
            vmes = vsal;
            vmesformat = vmes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            document.getElementById("input-mes" + i).value = vmesformat;
            vrestsj = vrestcj - vmes;
            vrestcj = vrestsj * (1 + vjur);
            i++;
            if (i > 6)
            {
                alert("ERROR!!\n\nLooping encontrado.\n\nContactar desenvolvedor!!");
                return (0);
            }
        }
    }
    alert("Simulção realizada com sucesso!");

    event.preventDefault();
    return (0);
}

function emprestimo()
{
    // Informacoes do usuario
    let selec_name = document.getElementById('escolha_cliente');
    let uname = selec_name[selec_name.selectedIndex].value;
    let ucpf = document.querySelector('form.white-part div input.input-cpf');

    // Informacoes do emprestimo
    let vrestsj = document.querySelector('form.blue-part-inner div input.input-valor').value;
    let vsal = document.querySelector('form.blue-part-inner div input.input-salario').value;
    let vencimento = document.querySelector('form.blue-part-inner div input.input-venc').value;
    let selec_jur = document.getElementById('escolha_juros');
    let vjur = selec_jur[selec_jur.selectedIndex].value;
    
    // Teste de preenchimento dos campos
    if (vrestsj == "")
    {
        console.log("Favor preencher o campo \'Valor para Empréstimo\'..");
        return (0);
    }
    if (vsal == "")
    {
        console.log("Favor preencher o campo \'Salário\'..");
        return (0);
    }
    if (vjur == "")
    {
        alert("ATENÇÃO!!\n\nFavor preencher o campo \'Juros\'..");
        event.preventDefault();
        return (0);
    }
    if (vencimento == "")
    {
        console.log("Favor preencher o campo \'Vencimento da Primeira Parcela\'..");
        return (0);
    }

    // Transformacao para inteiro
    vrestsj = parseFloat(vrestsj);
    vsal = parseFloat(vsal);
    vjur = parseFloat(vjur);

    // Declaracao de Variaveis
    let vrestcj = +vrestsj * (1 + +vjur);
    let emprestvmax = +vrestsj / +vsal;
    let vmesformat;
    let vmes = 0;
    let vmaxmes;
    let i = 1;

    // Teste de viabilidade
    if (vjur == 0.2) {
        vmaxmes = 3.3255;
    }
    else if (vjur == 0.25) {
        vmasxmes = 2.95142;
    }
    else if (vjur == 0.3) {
        vmaxmes = 2.642745;
    }
    else {
        alert("ERROR!\n\nValor inválido para juros..");
        return (0);
    }
    if (emprestvmax > vmaxmes)
    {
        alert("Não foi possível completar esta ação, pois a simulação ultrapassa o quantitativo de 6 meses de parcelas.\n\nAumente o valor de \'Salário\' ou diminua o campo \'Valor para Emprestimo\'!");
        event.preventDefault();
        return (0);
    }

    // Geracao das parcelas
    while (vrestcj != 0)
    {
        if (vrestcj <= vsal)
        {
            vmes = vrestcj;
            vrestcj = 0;
            vmesformat = vmes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            //document.getElementById("input-mes" + i).value = vmesformat;
            console.log("mes: " + i + "  |  vmes = " + vmes);
        }
        else
        {
            vmes = vsal;
            vmesformat = vmes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            //document.getElementById("input-mes" + i).value = vmesformat;
            console.log("mes: " + i + "  |  vmes = " + vmes);
            vrestsj = vrestcj - vmes;
            vrestcj = vrestsj * (1 + vjur);
            i++;
            if (i > 6)
            {
                alert("ERROR!!\n\nLoop encontrado.\n\nContactar desenvolvedor!!");
                return (0);
            }
        }
    }
    alert("Simulção realizada com sucesso!");

    event.preventDefault();
    return (0);
}

function limparformulario() {
    document.getElementById('simulacao_form').clear();
}