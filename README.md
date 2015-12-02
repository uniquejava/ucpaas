# ucpaas
## 云之讯nodejs版本SDK

最近用到云之讯平台的短信和语音验证码功能，因为没有在他们官网上发现nodejs版本的SDK，所以我按照他们的PHP版本实现了一个nodejs版本的SDK供大家使用。原版PHPSDK也一并上传了，方便大家对比，另外就是XML协议部分并未实现。

用 `npm install https://github.com/uniquejava/ucpaas.git --save` 进行安装

### Example

```js
var Uc = require('ucpaas-sdk');
var options = {gi
    accountsid: 'xxx',
    token: 'xxxxxxxxxx'
};

var uc = new Uc(options);

uc.getDevinfo(function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
var to = '18612345678';
var templateId = '16021';
var param = '1256,5';
uc.templateSMS(appId, to, templateId, param, function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});
```


More examples, see: http://phonegap.me/post/23.html

原文：

最近用到云之讯平台的短信和语音验证码功能，因为没有在他们官网上发现nodejs版本的SDK，所以我按照他们的PHP版本实现了一个nodejs版本的SDK供大家使用。原版PHPSDK也一并上传了，方便大家对比，另外就是XML协议部分并未实现。

在您的nodejs项目中用 npm install ucpaas-sdk --save 命令进行安装。

示例代码如下：
```js
var ucpaasClass = require('ucpaas-sdk/lib/ucpaasClass');
var options = {
    accountsid: 'XXXX193c69eaXXXXXXbe89017fcXXXXX',
    token: 'XXXXXXdfe88a37XXXXXX288ccaXXXXXX'
};
var ucpaas = new ucpaasClass(options);

//开发者账号信息查询
ucpaas.getDevinfo(function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//语音验证码
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
var verifyCode = '1256';
var to = '18612345678';
ucpaas.voiceCode(appId, verifyCode, to, function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//短信验证码
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
var to = '18612345678';
var templateId = '16021';
var param = '1256,5';
ucpaas.templateSMS(appId, to, templateId, param, function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//双向回拨
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
var fromClient = '63314039999129';
var to = '13412345678';
var fromSerNum = '4008800800';
var toSerNum = '18612345678';
ucpaas.callBack(appId, fromClient, to, fromSerNum, toSerNum, function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//申请client账号
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
var clientType = '0';
var charge = '0';
var friendlyName = '';
var mobile = '13412345678';
ucpaas.applyClient(appId, clientType, charge, friendlyName, mobile, function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//释放client账号
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
var clientNumber = '63314039999129';
ucpaas.releaseClient(clientNumber, appId, function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//分页获取Client列表
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
ucpaas.getClientList(appId, '0', '100', function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//以Client账号方式查询Client信息
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
ucpaas.getClientInfo(appId, '63314039999129', function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//以手机号码方式查询Client信息
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
ucpaas.getClientInfoByMobile(appId, '18612345678', function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});

//应用话单下载
var appId = 'XXXXXX2fd25eXXXXb8XXXbaXXXXXXX7a';
ucpaas.getBillList(appId, 'week', function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});
```

代码已经提交到github上，您可以在如下地址访问到：
https://github.com/phonegapX/ucpaas

同时也已经发布到了npmjs.com上，可以直接在node中用 npm install ucpaas-sdk 命令进行安装。

这次具体改写过程也比较简单，没有太多好说的，唯一一个小知识点就是如何用JS中的闭包来模拟php类中的私有变量和私有函数
比如php中：
```php
<?php
class Ucpaas
{
    private $timestamp;
    public function __construct()
    {
        $this->timestamp = 100;
    }
    private function getResult()
    {
        return $this->timestamp;
    }
    public function getDevinfo()
    {
        return getResult();
    }
}
?>
```
这个PHP类包含了一个私有变量$timestamp，一个构造函数，一个public函数，一个private函数，那么对应JS怎么写比较好呢，如下：
```js
(function () {
    //模拟PHP中的私有变量
    var timestamp;
    //构造函数
    function Ucpaas() {
        timestamp = 100;
    }
    //模拟private函数
    function getResult() {
        return timestamp;
    }
    //模拟public函数
    Ucpaas.prototype.getDevinfo = function() {
        return getResult();
    };
    //导出类
    module.exports = Ucpaas;
}());
```
这样就很好的利用了JS中闭包的特性来模拟了一个PHP类。

最后附上云之讯的网址：
http://www.ucpaas.com/


模板文档。
http://docs.ucpaas.com/doku.php?id=%E5%B9%B3%E5%8F%B0%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83%E6%8C%87%E5%8D%97#四_短信审核标准