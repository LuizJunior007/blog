<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{

    public $timestamps = false;
    protected $table = 'users';

    protected $fillable = [
        'name', 
        'lastname', 
        'email', 
        'password', 
        'updated_at',
        'is_admin'
    ];

    protected $hidden = [
        'password', 
        'remember_token',
    ];

}
