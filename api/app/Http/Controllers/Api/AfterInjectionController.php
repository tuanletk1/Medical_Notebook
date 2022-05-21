<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PreHistories;
use App\Models\RegisterInjection;
use App\Models\SymptomAfterInjection;
use App\Models\User;
use App\Models\UserAfterInjection;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AfterInjectionController extends Controller
{

    /**
     * Login method
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dataUser = $request->only([
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
        ]);
        $dataSymptom = $request->only([
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
            'symptom_13',
            'name_13',
            'status_13',
            'symptom_14',
            'name_14',
            'status_14',
            'symptom_15',
            'name_15',
            'status_15',
            'symptom_16',
            'name_16',
            'status_16',
            'symptom_17',
            'name_17',
            'status_17',
            'symptom_18',
            'name_18',
            'status_18',
            'symptom_19',
            'name_19',
            'status_19',
        ]);

        $user = UserAfterInjection::create($dataUser);
        $dataSymptom['user_after_injection_id'] = $user->id;

        SymptomAfterInjection::create($dataSymptom);

        return response()->success(null, $user->load('symptomAfterInjections'));
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
        $dataUser = $request->only([
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
        ]);
        $dataSymptom = $request->only([
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
            'symptom_13',
            'name_13',
            'status_13',
            'symptom_14',
            'name_14',
            'status_14',
            'symptom_15',
            'name_15',
            'status_15',
            'symptom_16',
            'name_16',
            'status_16',
            'symptom_17',
            'name_17',
            'status_17',
            'symptom_18',
            'name_18',
            'status_18',
            'symptom_19',
            'name_19',
            'status_19',
        ]);

        $user = UserAfterInjection::findOrFail($id);

        $symptomAfterInjections = $user->symptomAfterInjections;

        $user->fill($dataUser)->save();
        $symptomAfterInjections->fill($dataSymptom)->save();

        return response()->success(null, $user);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $registerVaccinations = UserAfterInjection::with('symptomAfterInjections')->get();

        return response()->success(null, $registerVaccinations);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $registerVaccination = UserAfterInjection::with('symptomAfterInjections')->find($id);

        return response()->success(null, $registerVaccination);
    }
}
