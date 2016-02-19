/**
 * Created by yicj on 2016/2/19.
 */
Vue.directive('select', {
    twoWay: true,
    priority: 1000,
    params: ['options'],
    bind: function () {
        var self = this
        $(this.el)
            .select2({
                data: this.params.options
            })
            .on('change', function () {
                self.set(this.value)
            })
    },
    update: function (value) {
        console.info('value : ' + value) ;
        $(this.el).val(value).trigger('change')
    },
    unbind: function () {
        $(this.el).off().select2('destroy')
    }
}) ;

var vm = new Vue({
    el: '#el',
    data: {
        selected: 0,
        options: [
            { id: 1, text: 'hello' },
            { id: 2, text: 'what' }
        ]
    }
}) ;