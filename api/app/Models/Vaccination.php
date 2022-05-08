<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vaccination extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected array $fillable = [
        'name',
        'origin',
        'lot_number',
        'date_of_manufacture',
        'age_use',
        'quantity',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date_of_manufacture' => 'datetime',
        'age_use' => 'datetime',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected string $table = 'vaccinations';
}
