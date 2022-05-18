<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\ServiceProvider;
use Log;
use Exception;
use Illuminate\Support\Facades\Response;

class ResponseServiceProvider extends ServiceProvider
{

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerSuccessResponse();
        $this->registerErrorResponse();
        $this->registerNotFoundResponse();
    }

    /**
     * Register success response
     *
     * @return void
     */
    private function registerSuccessResponse()
    {
        Response::macro('success', function ($message, $data = [], $statusCode = 200, $headers = []) {
            return response()->json([
                'status_code' => $statusCode,
                'message' => $message,
                'data' => $data,
            ], $statusCode, $headers);
        });
    }

    /**
     * Register error response
     *
     * @return void
     */
    private function registerErrorResponse()
    {
        Response::macro('error', function ($message, $errors = [], $statusCode = 500, $headers = []) {
            if ($errors instanceof Exception) {
                Log::error($errors);
            }

            return response()->json([
                'status_code' => $statusCode,
                'message' => $message,
                'errors' => $errors,
            ], $statusCode, $headers);
        });
    }

    /**
     * Register not found response
     *
     * @return void
     */
    private function registerNotFoundResponse()
    {
        Response::macro('not_found', function ($data, $errors = [], $statusCode = 404, $headers = []) {
            if ($data instanceof ModelNotFoundException) {
                $data = trans('message.not_found');
            }

            return response()->json([
                'status_code' => $statusCode,
                'message' => $data,
                'errors' => $errors,
            ], $statusCode, $headers);
        });
    }
}
