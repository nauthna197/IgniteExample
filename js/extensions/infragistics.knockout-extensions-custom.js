var DisabledSupportHandler = (function () {
    function DisabledSupportHandler(name) {
        var self = this;
        var extensionName = name;
        var extension = eval('ko.bindingHandlers.' + name);
        eval('ko.bindingHandlers.' + name + '= this;');
        self.init = function (element, valueAccessor, allBindingsAccessor, viewModel) {
            extension.init(element, valueAccessor, allBindingsAccessor, viewModel);
        };
        self.update = function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var disabled, current, editor = $(element);
            extension.update(element, valueAccessor, allBindingsAccessor, viewModel);
            disabled = ko.utils.unwrapObservable(valueAccessor().disabled);
            if (disabled != undefined) {
                current = eval('editor.' + name + '("option", "disabled")');
                if (current !== disabled) {
                    current = eval('editor.' + name + '("option", "disabled", disabled)');
                }
            }
        };
    }
    return DisabledSupportHandler;
}());
var addDisabledSupport = (function (name) {
    var newHandler = new DisabledSupportHandler(name);
});
addDisabledSupport('igCheckboxEditor');
addDisabledSupport('igTextEditor');
addDisabledSupport('igDatePicker');
