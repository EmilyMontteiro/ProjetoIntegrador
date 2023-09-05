<?php

    require_once("conexao.php");
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    $sql = "INSERT INTO cadastro (nome, email, telefone, mensagem) VALUES ('$nome', '$email', '$telefone', '$mensagem')";
    $result = $mysqli->query($sql);
   
    
    ?>
