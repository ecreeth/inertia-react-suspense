<?php

use Illuminate\Support\Facades\{Config, Route};
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Inertia::share('name', Config::get('app.name'));

Route::get('/', fn () => inertia('Welcome'));

Route::get('/about', fn () => inertia('About'));

Route::get('/contact', fn () => inertia('Contact'));
