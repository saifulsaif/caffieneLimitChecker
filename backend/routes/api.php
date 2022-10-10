<?php
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ProductController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'Test API'
    ]);
});


Route::get('/user',[UserController::class,'user']);

Route::get('/products',[ProductController::class,'getProducts']);

Route::get('/wish_list', [ProductController::class, 'getWishList']);

Route::post('/store_wish', [ProductController::class, 'storeWish']);


