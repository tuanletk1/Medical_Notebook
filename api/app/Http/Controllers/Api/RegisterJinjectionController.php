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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $registerVaccinations = RegisterInjection::all();

        return response()->success(null, $registerVaccinations);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $registerVaccination = RegisterInjection::find($id);

        return response()->success(null, $registerVaccination);
    }
}
