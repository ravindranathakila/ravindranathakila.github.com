Polymer({
    is: 'my-index',
    properties: {
        route: Object
    },
    ready: function () {
        this.files = [
            {name: 'index.md'}
        ];
    }
});