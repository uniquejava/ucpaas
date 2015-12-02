# ucpaas
## 云之讯nodejs版本SDK

最近用到云之讯平台的短信和语音验证码功能，因为没有在他们官网上发现nodejs版本的SDK，所以我按照他们的PHP版本实现了一个nodejs版本的SDK供大家使用。原版PHPSDK也一并上传了，方便大家对比，另外就是XML协议部分并未实现。

用 npm install https://github.com/uniquejava/ucpaas.git --save 进行安装

### Example

```js
var Uc = require('ucpaas-sdk');
var options = {
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
ucpaas.templateSMS(appId, to, templateId, param, function (status, responseText) {
    console.log('code: ' + status + ', text: ' + responseText);
});
```


More examples, see: http://phonegap.me/post/23.html