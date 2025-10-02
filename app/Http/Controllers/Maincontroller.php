<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

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

        if($user){

            return redirect()->back()->with('success', 'Cadastro realizado com sucesso');
        } else{

            return redirect()->back()->with('error', 'Erro ao tentar realizar cadastro');
        }

        
    }

    public function users(){

        $users = User::orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('Users', [
            'users' => $users
        ]);

    }

    public function getUser($id){

        $user = User::findOrFail($id);

        return response()->json($user);

    }

    public function editUser(Request $request){

        $request->validate([
            'name' => 'required|min:3',
            'lastname' => 'required|min:3',
            "email" => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($request->id)
            ],
            'is_admin' => 'required'
        ], [
            'name.required' => 'Nome não foi preenchido',
            'lastname.required' => 'Sobrenome não foi preenchido',
            'name.min' => 'Mínimo 3 caracters',
            'lastname.min' => 'Mínimo 3 caracters',
            "email.required" => "Email não preenchido",
            "email.email" => "Email inválido",
            'email.unique' => 'Email já está em uso',
            'is_admin.required' => 'Preencha esse campo'
        ]);

        $user = User::find($request->id);

        $user->update([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'is_admin' => $request->is_admin,
            'updated_at' => date('Y-m-d H:i:s')
        ]); 

        return redirect()->back()->with('success', 'Usuário atualizado com sucesso!');
    }

    public function deleteUser(Request $request){

        $user = User::findOrFail($request->id);

        if($user->delete()){

            return redirect()->back()->with('success', 'Usuário removido com sucesso');

        } else{

            return redirect()->back()->with('error', 'Erro ao tentar remover usuário');
        }

    }

    public function categorias(){

        return Inertia::render('Categories');

    }

    public function logout(Request $request){

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
