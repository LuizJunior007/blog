<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Maincontroller extends Controller
{
    public function authLogin(Request $request){

        return $request->input('email');

    }
}
