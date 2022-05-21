<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Report or log an exception.
     *
     * @param \Throwable $exception Throwable.
     *
     * @return void
     *
     * @throws \Exception Exception.
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request|mixed $request   Request.
     * @param \Throwable                     $exception Throwable.
     *
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable Throwable.
     */
    public function render($request, Throwable $exception)
    {
        return parent::render($request, $exception);
    }

    /**
     * Prepare a JSON response for the given exception.
     *
     * @param \Illuminate\Http\Request|mixed $request Request.
     * @param \Throwable                     $e       Throwable.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function prepareJsonResponse($request, Throwable $e)
    {
        $response = parent::prepareJsonResponse($request, $e);

        return response()->error(
            $response->getData(true)['message'] ?? 'Server Error',
            [],
            $response->getStatusCode()
        );
    }
}
