function init(){
    
    new Vue ({
        
        el: "#app",

        data:{
            todos:[
              "spesa",
              "mangiare"  
            ],
            task:"",
            

        },

        methods:{
            addTodo: function(){
                this.todos.push(this.task);
            }
        }
    })
}

$(init);