# react-native-http-fetch

使用：

1、在终端进入到项目目录：npm i react-native-http-fetch --save

2、实例：

    import Http from 'react-native-http-fetch'


        Http.send(url, {
                body: {
                    PlatformNo: platformNo,
                    ChannelNo: channelNo,
                    VersionNo: versionNo
                }
            },
            (result) => {
                if (callback) {
                    callback(result);
                }
            },
            (error) => {
            });


3、

    url:fetch url
    options
       method:default POST
       headers: default 'application/json'
       timeout: default 5s
       body: json format

    successCallback (result, status): callback when response.ok is true
    errorCallback (result, status): callback when an error occurred
