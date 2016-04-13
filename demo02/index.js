/**
 * Created by Administrator on 2016/2/20.
 */

//Vue.use('VueResource') ;
Vue.http.options.emulateJSON = true;
new Vue({
    el:"#app",
    ready: function () {
        this.$http.get('index.json', function (data) {
            console.info(data) ;
            this.$set('books', data);
        }).error(function (error) {
            console.info(error) ;
        }) ;
    },
    methods:{
        doSomething:function(){
            console.info('你点击了doSomething.....') ;
        },
        addBook: function() {
            //计算书的id
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            //将input中的数据重置
            this.book = '';
        },
        delBook:function(book){
            this.books.$remove(book);
        }
    },
    computed: {
        sum: function() {
            var result = 0;
            for (var i = 0; i < this.books.length; i++) {
                result = Number(this.books[i].price) + result;
            };
            return result;
        }
    },
    data: {
        name:'yicj',
        dept:'B',
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
        books: []
    }
}) ;

