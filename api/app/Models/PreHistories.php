<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreHistories extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'register_injection_id',
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
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'date:d-m-Y',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'pre_histories';
}
