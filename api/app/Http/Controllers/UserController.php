<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return response()->success(null, $users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request RegisterUserRequest.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only([
            'fullname',
            'cmnd_cccd',
            'img_cmnd_cccd_truoc',
            'img_cmnd_cccd_sau',
            'district',
            'ward',
            'phone',
            'password',
            'role_id',
            'img_signature',
            'gender',
            'job',
            'workplace',
            'email',
        ]);

        $user = User::save($data);

        return response()->success(null, $user);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);

        return response()->success(null, $user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request Request.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->only([
            'fullname',
            'cmnd_cccd',
            'img_cmnd_cccd_truoc',
            'img_cmnd_cccd_sau',
            'district',
            'ward',
            'phone',
            'password',
            'role_id',
            'img_signature',
            'gender',
            'job',
            'workplace',
            'email',
        ]);

        $user = User::find($id)->fill($data)->save();

        return response()->success(null, $user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id Id of user need delete.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::delete($id);

        return response()->noContent();
    }
}
