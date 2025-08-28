<?php

use App\Http\Controllers\Maincontroller;
use App\Http\Middleware\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/login', function(){
    return Inertia::render('Login');
})->name('login');

Route::post('/authLogin', [Maincontroller::class, 'authLogin'])->name('authLogin');

Route::get('/signup', function(){
    return Inertia::render('Signup');
})->name('signup');

Route::post('/signup', [Maincontroller::class, 'signup'])->name('signup.cadastrar');
Route::get('/dashboard',function(){

    return Inertia::render('Dashboard');
    
})->middleware(Auth::class);

