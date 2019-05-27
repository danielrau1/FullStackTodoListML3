<?php

class Pages extends Controller
{


    public function __construct()
    {

        $this->todoModel = $this->model('Todo');
    }


    // [1.1]
    public function index(){

        $todos = $this->todoModel->getTodos();

//        $data = [
//            'todos'=> $todos
//        ];

        echo json_encode($todos); // [1.1a]
        //$this->view('pages/index', $data);
    }


    // [2.2a]
    public function addTodo(){
        $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
        $title = trim($_POST['title']);
        $completed = trim($_POST['completed']);
        echo json_encode($this->todoModel->addTodo($title, $completed));
    }

    // [3.2a]
    public function deleteTodo(){
        $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
        $id = trim($_POST['id']);

        echo json_encode($this->todoModel->deleteTodo($id));
    }

    // [4.2a]
    public function editTodo(){
        $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
        $id = trim($_POST['id']);
        $title = trim($_POST['title']);
        echo json_encode($this->todoModel->editTodo($id, $title));
    }

}
