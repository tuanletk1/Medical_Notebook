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
