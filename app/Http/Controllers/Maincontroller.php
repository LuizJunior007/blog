<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Maincontroller extends Controller
{
    public function authLogin(Request $request){

        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ], [
            "email.required" => "Email não preenchido",
            "email.email" => "Email inválido",
            "password.required" => "Senha não foi preenchida"
        ]);

        return "OK";

    }
}
