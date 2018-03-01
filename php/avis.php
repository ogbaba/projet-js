<?php

class MaBD extends SQLite3
{
    function __construct()
    {
        $this->open ("../bd.sqlite");
    }
}
$bd = new MaBD();
$result = $bd->query ("SELECT * FROM REVIEWS");
$tout = array();
$i = 0;
while ($res = $result->fetchArray()){
      if(!isset($res['id'])) continue;
      $tout[$i]['id'] = $res['id'];
      $tout[$i]['auteur'] = $res['auteur'];
      $tout[$i]['titre'] = $res['titre'];
      $tout[$i]['texte'] = $res['texte'];
      $i++;
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($tout);