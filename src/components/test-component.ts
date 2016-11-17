import * as ko from 'knockout';

class TestComponent {
    public static html = require("raw-loader!./test-component.html");
    public text = ko.observable("tesztecske");
}

ko.components.register("testcomponent", {
    viewModel: TestComponent,
    template: "<div>helloka</div>"
});

export = TestComponent;