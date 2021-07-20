//EXECUTAR AO CARREGAR A PÁGINA
window.onload = function() {
    
   
};

//DATA DE HOJE
function hoje(id) {

    // Obtém a data/hora atual
	var data = new Date();
	
    // Guarda cada pedaço em uma variável
    var dia = data.getDate();           // 1-31
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear();      // 4 dígitos
    
    // Formata a data e a hora (note o mês + 1)

    if(mes > 9) {
        if (dia > 9) {
            var str_data = dia + '/' + (mes+1) + '/' + ano4;
        }
        var str_data = '0' + dia + '/' + (mes+1) + '/' + ano4;
    }
    else if (dia < 9) {
        var str_data = '0' + dia + '/' + '0' + (mes+1) + '/' + ano4;
    }
    else {
        var str_data = dia + '/' + '0' + (mes+1) + '/' + ano4;
    }

    $('#'+id).val(str_data);
    return str_data;

};

//Automação de preenchimento dos campos da norma

$(document).on('change', "#norma",

function autoPreenc() {

    var norma = $('#norma').val();

    var c1 = DatasetFactory.createConstraint("idenCod", norma[0], norma[0], ConstraintType.MUST);
    var constraints = new Array(c1);
    var dataset = DatasetFactory.getDataset("DSFormulariodeCadastrodeNorma", null, constraints, null);

    $('#typeDocR').val(dataset.values[0].typeDoc);
    $('#idenCodR').val(dataset.values[0].idenCod);
    $('#RevisaoR').val(dataset.values[0].Revisao);
    $('#OrgRespR').val(dataset.values[0].OrgResp);
    $('#dateEmiR').val(dataset.values[0].dateEmi);
    $('#titleR').val(dataset.values[0].title);
    $('#resumoEscR').val(dataset.values[0].resumoEsc);

});

// Listagem de registro
var count = 0;
function pushTable() {
    count++;
    wdkAddChild('tb_registro');

    var norma = $('#idenCodR').val();
    var registro = $('#requisito').val();
    var aplic = $('#aplic').val();
    var titulo = $('#titleReq').val();
    var desc = $('#descRequisito').val();
    var orien = $('#orient').val();

    if (aplic == 1) {
        aplic = 'Mandatório'
    }
    else {
        aplic = 'Opcional'
    }

    $('#tb_norma___'+count).val(norma);
    $('#tb_req___'+count).val(registro);
    $('#tb_aplic___'+count).val(aplic);
    $('#tb_title___'+count).val(titulo);
    $('#tb_desc___'+count).val(desc);
    $('#tb_ori___'+count).val(orien);

    $('#requisito').val('');
    $('#aplic').val('');
    $('#titleReq').val('');
    $('#descRequisito').val('');
    $('#orient').val('');

    if (count == 1) {
        $('#div_panel1').addClass('off');
    }
}