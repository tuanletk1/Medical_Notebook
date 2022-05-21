<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterInjection extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'the_second_time',
        'code',
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
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date_of_birth' => 'date:d-m-Y',
        'date_injection' => 'date:d-m-Y',
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'date:d-m-Y',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'register_injections';

    /**
     * Register injections hasOne pre-histories
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function preHistories()
    {
        return $this->hasOne(PreHistories::class, 'register_injection_id', 'id');
    }
}
