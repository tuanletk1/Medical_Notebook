<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StaffInjection extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected array $fillable = [
        'user_id',
        'address_injection_id',
        'name',
        'date_of_birth',
        'cmnd',
        'sothe_bhyt',
        'phone',
        'number_of_injections',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected string $table = 'staff_injection';
}
