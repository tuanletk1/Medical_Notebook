<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PreHistories;
use App\Models\RegisterInjection;
use App\Models\User;
use App\Models\Vaccination;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RegisterJinjectionController extends Controller
{

    /**
     * Create register vaccinations method
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dataRegister = $request->only([
            'the_second_time',
            'name',
            'date_of_birth',
            'sex',
            'phone_number',
            'email',
            'identity_code',
            'social_insurance',
            'job',
            'workplace',
            'address',
            'city',
            'district',
            'ward',
            'date_injection',
            'time_of_day',
        ]);

        if ($request->has('date_of_birth')) {
            $dataRegister['date_of_birth'] = Carbon::createFromFormat('d-m-Y', $dataRegister['date_of_birth']);
        }

        if ($request->has('date_injection')) {
            $dataRegister['date_injection'] = Carbon::createFromFormat('d-m-Y', $dataRegister['date_injection']);
        }

        $dataPreHistories = $request->only([
            'symptom_1',
            'name_1',
            'status_1',
            'symptom_2',
            'name_2',
            'status_2',
            'symptom_3',
            'name_3',
            'status_3',
            'symptom_4',
            'name_4',
            'status_4',
            'symptom_5',
            'name_5',
            'status_5',
            'symptom_6',
            'name_6',
            'status_6',
            'symptom_7',
            'name_7',
            'status_7',
            'symptom_8',
            'name_8',
            'status_8',
            'symptom_9',
            'name_9',
            'status_9',
            'symptom_10',
            'name_10',
            'status_10',
            'symptom_11',
            'name_11',
            'status_11',
            'symptom_12',
            'name_12',
            'status_12',
        ]);

        $register = RegisterInjection::create($dataRegister);
        $register->code = Carbon::now()->format('dmY') . '-' . $register->id;
        $register->save();
        $dataPreHistories['register_injection_id'] = $register->id;

        PreHistories::create($dataPreHistories);

        return response()->success(null, $register->load('preHistories'));
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
        $dataRegister = $request->only([
            'the_second_time',
            'name',
            'date_of_birth',
            'sex',
            'phone_number',
            'email',
            'identity_code',
            'social_insurance',
            'job',
            'workplace',
            'address',
            'city',
            'district',
            'ward',
            'date_injection',
            'time_of_day',
        ]);

        if ($request->has('date_of_birth')) {
            $dataRegister['date_of_birth'] = Carbon::createFromFormat('d-m-Y', $dataRegister['date_of_birth']);
        }

        if ($request->has('date_injection')) {
            $dataRegister['date_injection'] = Carbon::createFromFormat('d-m-Y', $dataRegister['date_injection']);
        }

        $dataPreHistories = $request->only([
            'symptom_1',
            'name_1',
            'status_1',
            'symptom_2',
            'name_2',
            'status_2',
            'symptom_3',
            'name_3',
            'status_3',
            'symptom_4',
            'name_4',
            'status_4',
            'symptom_5',
            'name_5',
            'status_5',
            'symptom_6',
            'name_6',
            'status_6',
            'symptom_7',
            'name_7',
            'status_7',
            'symptom_8',
            'name_8',
            'status_8',
            'symptom_9',
            'name_9',
            'status_9',
            'symptom_10',
            'name_10',
            'status_10',
            'symptom_11',
            'name_11',
            'status_11',
            'symptom_12',
            'name_12',
            'status_12',
        ]);

        $registerVaccination = RegisterInjection::findOrFail($id);

        $preHistories = $registerVaccination->preHistories;

        $registerVaccination->fill($dataRegister)->save();
        $preHistories->fill($dataPreHistories)->save();

        return response()->success(null, $registerVaccination);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $registerVaccinations = RegisterInjection::with('preHistories')->get();

        return response()->success(null, $registerVaccinations);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $registerVaccination = RegisterInjection::with('preHistories')->find($id);

        return response()->success(null, $registerVaccination);
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
        $registerInjection = RegisterInjection::findOrFail($id);
        $registerInjection->preHistories->delete();
        $registerInjection->delete();

        return response()->noContent();
    }
}
