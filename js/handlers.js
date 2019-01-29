function showModalHandler(event){
    event.data.form.find('input[name="title"]').focus();
    
    //$('[name="title"]',$formAddTask).focus();
};

function addFormSubmitHandler(event){
    event.preventDefault();
        let task={
        title:$('[name="title"]', this).val(),
        description:$('[name="description"]', this).val(),
        time:$('[name="time"]', this).val(),
        status:1 // 1-todo, 2-inprogress, 3-done
    };

   if(!task.title) return;

    let id= new Date().getTime();
    localStorage.setItem(id,JSON.stringify(task));

    $('<li>')
        addTask(task,id);
        $modalAddTask.modal('hide');
        this.reset();
};
function removeAllTasks(event){
    event.preventDefault();
    localStorage.clear();
    $removeTasks.modal('hide');
    $('li.list-group-item').remove();
    counter('.panel-warning');
    counter('.panel-danger');
    counter('.panel-success');    
}

function deleteTaskHandler(event){
    event.preventDefault();

    let $parent = $(this).parents('[data-id]'),
        id=$parent.attr('data-id');

    localStorage.removeItem(id);
    $parent.remove();
    
    counter('.panel-warning');
    counter('.panel-danger');
    counter('.panel-success');
}

function editTaskHandler(event){
    event.preventDefault();

    let $parent = $(this).parents('[data-id]'),
        id=$parent.attr('data-id');
       

        $modalEditTask.modal('show');
    
    let task=JSON.parse(localStorage.getItem(id))

    

    for(let key in task){
        $formEditTask.find(`[name="${key}"]`).val(task[key])
    }
    $formEditTask.find('[name=id]').val(id)


    counter('.panel-warning');
    counter('.panel-danger');
    counter('.panel-success')
}

function editFormSubmitHandlers(event){
    event.preventDefault()

    let task={
        title: $('[name="title"]',this).val(),
        status: +$('[name="status"]',this).val(),
        description:$('[name="description"]', this).val(),
        time:$('[name="time"]', this).val(),
    };
     let id = $('[name="id"]',this).val();
     let oldTask=JSON.parse(localStorage.getItem(id));
     if(task.status===oldTask.status){
        updateTask(task,id);
     } else {
        $(`[data-id="${id}"]`).remove();
        addTask(task,id);
     }
     $modalEditTask.modal('hide');
     localStorage.setItem(id,JSON.stringify(task));
     counter('.panel-warning');
    counter('.panel-danger');
    counter('.panel-success')
     
     
    // $(`[data-id="${id}"]`).remove();
    // addTask(task,id);
}

