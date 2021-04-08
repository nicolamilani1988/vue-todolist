function init(){
    
    new Vue ({
        
        el: "#app",

        data:{
            todos:[
              "spesa",
              "mangiare",
              
            ],
            task:"",
            

        },

        methods:{
            addTodo: function(){
                if(this.task.length > 0){
                this.todos.push(this.task);
                this.task = "";
                }
            },
            myRemoveTodo: function(index){
                this.todos.splice(index,1);
            }
        }
    })
}

$(init);