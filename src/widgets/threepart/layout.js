module.exports = function (option) {
    return `
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="//www.googletagmanager.com/gtag/js?id=UA-123196088-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'UA-123196088-1');
        </script>
    `;
}