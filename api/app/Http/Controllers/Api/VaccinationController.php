<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vaccination;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VaccinationController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = Vaccination::all();

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
        $data = $this->getData($request);

        $vaccination = Vaccination::create($data);

        return response()->success(null, $vaccination);
    }

    /**
     * Get store data
     *
     * @param Request $request RegisterUserRequest.
     *
     * @return array
     */
    private function getData(Request $request)
    {
        $data = $request->only([
            'name',
            'quantity',
            'input_date',
            'date_of_manufacture',
            'age_use',
            'note'
        ]);

        if ($request->has('input_date')) {
            $data['input_date'] = Carbon::createFromFormat('d-m-Y', $data['input_date']);
        }

        if ($request->has('date_of_manufacture')) {
            $data['date_of_manufacture'] = Carbon::createFromFormat('d-m-Y', $data['date_of_manufacture']);
        }

        if ($request->has('age_use')) {
            $data['age_use'] = Carbon::createFromFormat('d-m-Y', $data['age_use']);
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
        $vaccination = Vaccination::find($id);

        return response()->success(null, $vaccination);
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
        $data = $this->getData($request);

        $vaccination = Vaccination::find($id)->fill($data)->save();

        return response()->success(null, $vaccination);
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
        Vaccination::findOrFail($id)->delete();

        return response()->noContent();
    }
}
