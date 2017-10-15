<?php

namespace Models;
use Illuminate\Database\Capsule\Manager as Capsule;

class Database {
    private $connection;
    private $capsule;
    private $def;

    function __construct($def='mysql') {
        $this->capsule = new Capsule;
        $this->def = $def;

        $this->connection = array();
        $this->connection['mysql'] = array();
        $this->connection['mysql']['driver'] = DBDRIVER;
        $this->connection['mysql']['host'] = DBHOST;
        $this->connection['mysql']['database'] = DBNAME;
        $this->connection['mysql']['username'] = DBUSER;
        $this->connection['mysql']['password'] = DBPASS;
        $this->connection['mysql']['charset'] = "utf8";
        $this->connection['mysql']['collation'] =  "utf8_unicode_ci";
        $this->connection['mysql']['prefix'] = "";

        $this->connection['sqlserver'] = array();
        $this->connection['sqlserver']['driver'] = SQLSRV_DBDRIVER;
        $this->connection['sqlserver']['host'] = SQLSRV_DBHOST;
        $this->connection['sqlserver']['database'] = SQLSRV_DBNAME;
        $this->connection['sqlserver']['username'] = SQLSRV_DBUSER;
        $this->connection['sqlserver']['password'] = SQLSRV_DBPASS;
        $this->connection['sqlserver']['charset'] = "utf8";
        $this->connection['sqlserver']['collation'] =  "utf8_unicode_ci";
        $this->connection['sqlserver']['prefix'] = "";



        $this->capsule->addConnection($this->connection['mysql']);
        $this->capsule->addConnection($this->connection['sqlserver'],'sqlserver');

        // Setup the Eloquent ORM… 
        $this->capsule->setAsGlobal();
        $this->capsule->bootEloquent();

    }
    function getCapsule(){
        return $this->capsule;
    }

}