function addTask(task,id){
    let $btnDelete = $('<a>').addClass('btn btn-danger btn-delete-task btn-xs pull-right  btn-space').append('<i class="glyphicon glyphicon-trash">')
    let $btnEdite = $('<a>').addClass('btn btn-warning btn-warning-task btn-xs pull-right  btn-space').append('<i class="glyphicon glyphicon-pencil">')
    let $text=$('<span>').text(task.title).addClass('single-task').attr('data-toggle','popover').attr('data-content',task.description+' '+task.time).attr('data-trigger','hover')

    $('<li>')
        .appendTo(`[data-status="${task.status}"]`)  //обратные кавычки!!!
        .addClass('list-group-item')
        .attr('data-id',id)
        //.text(task.title)
        .append($text)
        .append($btnDelete)
        .append($btnEdite)
        
        
 counter('.panel-danger');
 
 $('[data-toggle="popover"]').popover();    
};

function updateTask(task,id){
    $(`[data-id="${id}"] .single-task`)
                .text(task.title)
                .attr('data-content',task.description+' '+task.time)
       
};

//функция счетчик......не смогла разобраться как её сделать самовызывающейся без входящего параметра, так как у нас блоки разные и для каждого надо вызывать свой счетчик
function counter(block){
    let count = 0;
    let $deal = +$(block).attr('data-deal');
       
    
        for (let key in localStorage){
            if (!localStorage.hasOwnProperty(key)) continue;
            let task= JSON.parse(localStorage[key]).status
            
        if ($deal===task)   
            count++;     
        }
        $(block).children('.panel-body').text(`Tasks count `).append('<span>').children('span').addClass('badge').text(`${count}`)
       
    }
 counter('.panel-warning');
 counter('.panel-danger');
 counter('.panel-success');

 

        