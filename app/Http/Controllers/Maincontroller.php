<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

        if(Auth::attempt([
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'is_admin' => 1
        ])){

            $request->session()->regenerate();

            return redirect()->intended('dashboard');

        } else if(Auth::attempt([
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'is_admin' => 0
        ])){

            $request->session()->regenerate();
            return redirect('/');
        }

        return back()->withErrors([
            'email' => 'Email ou senha inválidos',
        ])->onlyInput('email');
    }

    public function signup(Request $request){

        $request->validate([
            'name' => 'required|min:3',
            'lastname' => 'required|min:3',
            "email" => "required|email|unique:users,email",
            "password" => "required|min:6"
        ], [
            'name.required' => 'Nome não foi preenchido',
            'lastname.required' => 'Sobrenome não foi preenchido',
            'name.min' => 'Mínimo 3 caracters',
            'lastname.min' => 'Mínimo 3 caracters',
            "email.required" => "Email não preenchido",
            "email.email" => "Email inválido",
            'email.unique' => 'Email já está em uso',
            "password.required" => "Senha não foi preenchida",
            'password.min' => 'Mínimo 6 caracters'
        ]);

        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return to_route('signup');
    }

    public function logout(Request $request){

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
