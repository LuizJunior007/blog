<?php

    use App\Http\Controllers\Maincontroller;
    use Illuminate\Support\Facades\Route;

    Route::post('/authLogin', [Maincontroller::class, 'authLogin']);

?>
