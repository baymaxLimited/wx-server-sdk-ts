declare namespace cloud {
    interface WXContextResult {
        OPENID: string
        APPID: string
        UNIONID: string
    }
    function getWXContext() : WXContextResult;
    function init();
}