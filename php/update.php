<?php

$ret->msg = exec("git pull");

print json_encode($ret);