/**
 * Custom igCheckboxEditor.
 * Add disabled option.
 */
class DisabledSupportHandler {
    init: any;
    update: any;
    constructor(name: string) {
        var self = this;
        var extensionName = name;
        var extension = eval('ko.bindingHandlers.' + name);
        eval('ko.bindingHandlers.' + name + '= this;');

        self.init = function(element: any, valueAccessor: any, allBindingsAccessor: any, viewModel: any) {
            //var self = this;
            extension.init(element, valueAccessor, allBindingsAccessor, viewModel);
        };
    
        self.update = function(element: any, valueAccessor: any, allBindingsAccessor: any, viewModel: any) {
            var disabled: any, current: any, editor = $(element);
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
}

var addDisabledSupport = (function(name: string) {
    var newHandler = new DisabledSupportHandler(name);
});

addDisabledSupport('igCheckboxEditor');
addDisabledSupport('igTextEditor');
addDisabledSupport('igDatePicker');
