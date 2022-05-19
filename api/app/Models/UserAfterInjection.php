<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAfterInjection extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
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
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'user_after_injections';

    /**
     * Register injections hasOne pre-histories
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function symptomAfterInjections()
    {
        return $this->hasOne(SymptomAfterInjection::class, 'user_after_injection_id', 'id');
    }
}
