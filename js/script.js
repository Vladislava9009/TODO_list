(()=>{
    'use strict';


    $modalAddTask.on('shown.bs.modal',{form:$formAddTask},showModalHandler);
    $removeTasks.on('shown.bs.modal',{form:$removeTasks},showModalHandler);
    $modalEditTask.on('shown.bs.modal',{form:$formEditTask},showModalHandler);
    $formAddTask.on('submit',addFormSubmitHandler);
    $('body').on('click','.btn-delete-task',deleteTaskHandler);
    $('body').on('click','.btn-warning-task',editTaskHandler);
    $formEditTask.on('submit',editFormSubmitHandlers);
    $formRemoveTask.on('submit',removeAllTasks);


    for (let key in localStorage){
        if (!localStorage.hasOwnProperty(key)) continue;
        let task= JSON.parse(localStorage[key]);
        addTask(task,key);
    }
    
    
   
    $('.input-group.date').datepicker(
        { autoclose: true
        }).on('changeDate', function(ev){                 
            $('#selectDate').datepicker('hide');
        });
    

})();
