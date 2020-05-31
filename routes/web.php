<?php

use Illuminate\Support\Facades\{Auth, Config, Route};
use Illuminate\Support\Facades\Session;
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

// Auth
Auth::routes();

// Global Shared Data
Inertia::share([
  'name', Config::get('app.name'),
  'errors' => function () {
    return Session::get('errors')
      ? Session::get('errors')->getBag('default')->getMessages()
      : (object) [];
  }
]);

// Admin Routes
Route::middleware('auth')->group(function () {

  Route::get('/', fn () => inertia('Welcome'));

  Route::get('/about', fn () => inertia('About'));

  Route::get('/contact', fn () => inertia('Contact'));

  Route::get('/config/users', fn () => inertia('Config/Users'));
});
