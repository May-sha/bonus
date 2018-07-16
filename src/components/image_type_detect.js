export var imageTypeDetect = {
    _getDevicePixelRatio: function() {
        return window.devicePixelRatio > 1 ? 2 : 1;
    },
    // javascript could not detect network
    // _getNetworkType: () => {
    //     return navigator.connection.type || null;
    // },
    _getDeviceType: function() {
        let clientWidth = document.documentElement.clientWidth || window.innerWidth;
        
        // Confirm mobile images size and pixel 
        return clientWidth > 640 ? "pc" : "mobile";
    },
    _getRecommendImgType: function() {
        let hasWebP = false;
        let img = new Image();
        img.onload = () => {
            hasWebP = !!(img.height > 0 && img.width > 0);
        };
        img.onerror = () => {
            hasWebP = false;
        };
        img.src = 'one 1px*1px webp image url';
        
        return hasWebP ? 'webp' : '';
    },
    init: function() {
        let deviceTypeSizeChange = this._getDeviceType === 'mobile' ? 0.6 : 1;

        let imagePercentStr = `${(100 / this._getDevicePixelRatio) * deviceTypeSizeChange}p`;
        // set image type
        let imageTypeStr = this._getRecommendImgType ? `.${this._getRecommendImgType}` : '';

        return `@${imagePercentStr}|${imageTypeStr}`;
    }
};
// module.exports = imageTypeDetect;