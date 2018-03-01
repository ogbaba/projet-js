<?php
class MaBD extends SQLite3
{
    function __construct()
    {
        $this->open ("../bd.sqlite");
    }
}