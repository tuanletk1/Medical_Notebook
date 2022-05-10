<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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
        $data = $this->getUserData($request);

        $user = User::create($data);

        return response()->success(null, $user);
    }

    /**
     * Get store data
     *
     * @param Request $request RegisterUserRequest.
     *
     * @return array
     */
    private function getUserData(Request $request)
    {
        $data = $request->only([
            'fullname',
            'cmnd_cccd',
            'district',
            'ward',
            'phone',
            'role_id',
            'gender',
            'job',
            'workplace',
            'email',
        ]);

        if ($request->has('password')) {
            $data['password'] = bcrypt($request->get('password'));
        }

        if ($request->hasFile('img_cmnd_cccd_truoc')) {
            $data['img_cmnd_cccd_truoc'] = saveFile($request->file('img_cmnd_cccd_truoc'));
        }

        if ($request->hasFile('img_cmnd_cccd_sau')) {
            $data['img_cmnd_cccd_sau'] = saveFile($request->file('img_cmnd_cccd_sau'));
        }

        if ($request->hasFile('img_signature')) {
            $data['img_signature'] = saveFile($request->file('img_signature'));
        }

        return $data;
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
        $data = $this->getUserData($request);

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
