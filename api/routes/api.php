<?php

use App\Http\Controllers\Api\AfterInjectionController;
use App\Http\Controllers\Api\AuthenticateController;
use App\Http\Controllers\Api\RegisterJinjectionController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\VaccinationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group([], function () {
    Route::apiResources([
        'users' => UserController::class,
    ]);
    Route::post(
        '/users/login',
        [AuthenticateController::class, 'login']
    );
    Route::post(
        '/after-injections',
        [AfterInjectionController::class, 'registerSymptom']
    );
    Route::apiResources([
        'vaccinations' => VaccinationController::class,
    ]);
    Route::apiResources([
        'register-vaccinations' => RegisterJinjectionController::class,
    ]);
});

