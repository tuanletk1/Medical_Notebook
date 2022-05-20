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
    protected $fillable = [
        'name',
        'origin',
        'lot_number',
        'date_of_manufacture',
        'age_use',
        'quantity',
        'input_date',
        'note'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date_of_manufacture' => 'date:d-m-Y',
        'age_use' => 'date:d-m-Y',
        'input_date' => 'date:d-m-Y',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'vaccinations';
}
