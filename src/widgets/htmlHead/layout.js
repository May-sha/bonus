module.exports = function (option) {
    return `
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="applicable-device" content="pc,mobile">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta http-equiv="Cache-Control" content="no-transform" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="keyword" content="${option.keyword}">
        <meta name="description" content="${option.description}">
        <!--[if lt IE 9]>
        <meta http-equiv="Refresh" content="0; url=/browsers">
        <![endif]-->
        
        <title>BonusCloud: The next generation computing system.</title>
        <link rel="shortcut icon" href="/maincloud/img/sigma.ico" />
        <link rel="stylesheet" href="/maincloud/css/base.css">

        <script src="/maincloud/preload.js"></script>
    </head>`
}