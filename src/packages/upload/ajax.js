export default function ajax (options) {
    //创建xhr对象
    const xhr = new XMLHttpRequest()
    const action = options.action

    const fd = new FormData() //h5上传文件的api
    fd.append(options.filename,options.file)
    xhr.onerror = function (err) {
        options.onError(err) //触发错误回调
    }
    xhr.onload = function () {
        let text = xhr.responseText || xhr.response
        options.onSuccess(JSON.parse(text))
    }
    xhr.upload.onprogress = function (e) {
        console.log(e)
        if(e.total > 0) {
            e.percent = e.loaded /e.total * 100
        }
        options.onProgress (e)
    }

    //开启请求
    xhr.open('post',action,true)
    //发送请求
    xhr.send(fd)
    return xhr
}