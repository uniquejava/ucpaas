/**
 * Created by zmx on 2015/11/10.
 */

var ucpaasClass = require('./lib/ucpaasClass');

var options = {
    accountsid: 'XXXX193c69eaXXXXXXbe89017fcXXXXX',
    token: 'XXXXXXdfe88a37XXXXXX288ccaXXXXXX'
};

var ucpaas = new ucpaasClass(options);

//�������˺���Ϣ��ѯ
ucpaas.getDevinfo(function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//������֤��
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//var verifyCode = '1256';
//var to = '18612345678';
//ucpaas.voiceCode(appId, verifyCode, to, function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});

//������֤��
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//var to = '18612345678';
//var templateId = '16021';
//var param = '1256,5';
//ucpaas.templateSMS(appId, to, templateId, param, function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});

//˫��ز�
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//var fromClient = '63314039999129';
//var to = '13412345678';
//var fromSerNum = '4008800800';
//var toSerNum = '18612345678';
//ucpaas.callBack(appId, fromClient, to, fromSerNum, toSerNum, function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});

//����client�˺�
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//var clientType = '0';
//var charge = '0';
//var friendlyName = '';
//var mobile = '13412345678';
//ucpaas.applyClient(appId, clientType, charge, friendlyName, mobile, function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});

//�ͷ�client�˺�
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//var clientNumber = '63314039999129';
//ucpaas.releaseClient(clientNumber, appId, function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});

//��ҳ��ȡClient�б�
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//ucpaas.getClientList(appId, '0', '100', function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});

//��Client�˺ŷ�ʽ��ѯClient��Ϣ
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//ucpaas.getClientInfo(appId, '63314039999129', function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});

//���ֻ����뷽ʽ��ѯClient��Ϣ
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//ucpaas.getClientInfoByMobile(appId, '18612345678', function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});

//Ӧ�û�������
//var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
//ucpaas.getBillList(appId, 'week', function (status, responseText) {
//    console.log('code: ' + status + ', text: ' + responseText);
//});