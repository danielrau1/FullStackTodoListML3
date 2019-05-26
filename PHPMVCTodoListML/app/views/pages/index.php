<?php foreach($data['todos'] as $todo): ?>

    <div>
        ID: <?php echo $todo->id; ?> <br>
        TITLE: <?php echo $todo->title; ?> <br>
        Completed <?php echo $todo->completed; ?> <br>
    </div>



<?php endforeach;?>
