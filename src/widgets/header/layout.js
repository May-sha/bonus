import headerStr from './index.tpl';
import _ from 'lodash';

export default (option) => {
    // let mobileTransType = '';
    // if (option && typeof option.mobileTransType !== 'undefined' && !option.mobileTransType) {
    //     mobileTransType = '';
    // } else if (option && option.mobileTransType) {
    //     mobileTransType = 'mobile-trans';
    // }
    let param = {
        curPage: option && option.page || 'index', 
        transparentType: option && option.transparent ? 'transparent' : '',
        mobileTransType: option && option.mobileTransType ? 'mobile-trans' : 'mobile-white',
        responseType: option && option.response ? 'response' : '',
        bgcolorType: option && option.bgcolor ? 'bgcolor' : ''
    };
    return _.template(headerStr)(param);
}