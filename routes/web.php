<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', fn() => inertia('Welcome', [
  'page' => 'Home',
  'foo'  => 'This is the home page',
]));

Route::get('/about', fn() => inertia('About', [
  'page' => 'About',
  'foo'  => 'This is the about page',
]));

Route::get('/contact', fn() => inertia('Contact', [
  'page' => 'Contact',
  'foo'  => 'This is the contact page',
]));
