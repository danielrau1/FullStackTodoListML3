<?php
class Todo
{
    private $db;

    public function __construct()
    {
        $this->db = new Database;
    }


    public function getTodos(){
        $this->db->query('SELECT * FROM todos'); // gives an array of objects

        $results = $this->db->resultSet(); // used to return more than 1 row
        return $results;
    }



    // [2.2b]
    public function addTodo($title, $completed){
        $this->db->query( 'INSERT INTO todos (title, completed) VALUES (:title, :completed)');
        $this->db->bind(':title',$title);
        $this->db->bind(':completed',$completed,PDO::PARAM_BOOL); // makes the completed boolean


        //Execute
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }



   // [3.2b]
    public function deleteTodo($id){
        $this->db->query( 'DELETE FROM todos WHERE id=:id');
        $this->db->bind(':id',$id);

        //Execute
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }

    // [4.2b]
    public function editTodo($id,$title){
        $this->db->query( 'UPDATE todos SET title=:title WHERE id=:id');
        $this->db->bind(':id',$id);
        $this->db->bind(':title',$title);


        //Execute
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }


}
