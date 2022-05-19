<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthenticateController extends Controller
{

    /**
     * Login method
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $users = User::where([
            'phone' => $request->get('phone')
        ])->find();

        if (empty($users)) {
            return response()->error('Sai thông tin đăng nhập!');
        }

        return response()->success(null, $users);
    }
}
