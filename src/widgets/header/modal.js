export default (options) => {
    var defaultParam, innerDialog, ops;
    defaultParam = {
        parentContainer: $('body'),
        dialogName: '', //必传项
        dialogTitle: null,
        noFooter: false,
        button_text: '确 定',
        innerHtml: '',
        zIndex: 1500,
        top: 45,
        init: null,
        api: null,
        close: null,
        closeThen: null,
        returnThen: null,
        _clearModal: null
    };
    ops = {};
    ops = $.extend({}, defaultParam, options);
    
    innerDialog = '<div class="popupdialog-container ' + ops.dialogName + '" style="z-index:' + ops.zIndex + ';">\
                        <div class="popupdialog" style="top:' + ops.top + 'px;">\
                            <div class="popupdialog-content">\
                                <div class="popup-header">\
                                    <h4 class="modal-title">' + ops.dialogTitle + '</h4> </div>\
                                <div class="popup-content clearfix">' + ops.innerHtml + '</div>\
                                <div class="modal-info"></div>\
                                <div class="popup-footer">\
                                    <button type="button" class="popup-return btn btn-default" data-dismiss="modal">取 消</button>\
                                    <button type="button" class="popup-confirm btn btn-primary">' + ops.button_text + '</button>\
                                </div>\
                                <div class="popup-close">×</div>\
                            </div>\
                        </div>\
                    </div>';
    ops.parentContainer.append(innerDialog);
    if (ops.noFooter) {
        $('.popup-footer').addClass('hidden');
    }
    if (ops.init != null) {
        ops.init();
    }
    $('.'+ ops.dialogName + ' .popup-close').click(function (e) {
        if (ops.closeThen != null) {
            ops.closeThen();
        }
        return $("." + ops.dialogName).remove();
    });
    $('.'+ ops.dialogName + ' .popup-return').click(function (e) {
        if (ops.returnThen != null) {
            ops.returnThen();
        }
        return $("." + ops.dialogName).remove();
    });
    $('.'+ ops.dialogName + ' .popup-confirm').click(function (e) {
        if ($(e.target).hasClass('btn-disabled')) {
            return;
        }
        $(e.target).removeClass('btn-primary').addClass('btn-disabled');
        return ops.api();
    });
};